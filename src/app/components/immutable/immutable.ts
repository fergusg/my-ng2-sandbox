import {Component, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy, ElementRef} from "angular2/core";
import {Http} from "angular2/http";
import JsonLoader from "../../utils/json-loader";

declare var _: any;
declare var Immutable: any;
declare var nv: any;
declare var d3: any;

interface IChartData {
    x: number;
    y: number;
}

@Component({
    selector: "immutable",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<svg></svg>",
    styles: [`
        svg {
            height:400px;
            padding: 20px;
            width: 100%;
            border: 1px solid red
        }`,
    ],
    providers: [JsonLoader],
})
class ImmutableComponent implements OnDestroy {
    private shift: number = 0;
    private src = "chart-data.json";
    private interval: any;
    private data: IChartData[];
    private chart: any;

    constructor(
        private http: Http,
        private ref: ChangeDetectorRef,
        private elem: ElementRef,
        private json: JsonLoader) {
        this.initChart();
        this.interval = setInterval(this.loader, 1000);
    }

    private initChart = (): void => {
        this.chart = nv.models.lineChart()
            .margin({ left: "100" })
            .showLegend(false);

        let xFmt = d3.time.format("%H:%M");
        let yFmt = d3.format(".i");

        let xLabel = "Time";
        let yLabel = "Value/1000";

        this.chart.xAxis
            .axisLabel(xLabel)
            .tickFormat((d: any) => xFmt(new Date(d)));

        this.chart.yAxis
            .axisLabel(yLabel)
            .tickFormat((v: number) => yFmt(Math.floor(v / 1000)));
    };

    private loader = (): void => {
        this.shift++;

        this.json.load(this.src).subscribe(
            (res: any): any => {
                this.data = [];
                const len = res.timestamps.length;
                for (let i = 0; i < len; i++) {
                    this.data.push({
                        x: res.timestamps[i] * 1000, // secs -> millis
                        y: res.data[(i + this.shift) % len],
                    });
                }
                d3.select(this.elem.nativeElement)
                    .select("svg")
                    .datum([{ values: this.data }])
                    .call(this.chart);
            }
        );
    };


    public ngOnDestroy(): void {
        console.log("Destroyed");
        clearInterval(this.interval);
    }
}

export default ImmutableComponent;
