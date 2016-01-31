import {Component, ChangeDetectionStrategy, OnDestroy, ElementRef} from "angular2/core";
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
    selector: "simple-graph",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: "<svg></svg>",
    styles: [`
        svg {
            height:400px;
            width: 80%;
        }`,
    ],
    providers: [JsonLoader],
})
class SimpleGraphComponent implements OnDestroy {
    private shift: number = 0;
    private src = "chart-data.json";
    private interval: any;
    private chart: any;

    constructor(
        private elem: ElementRef,
        private json: JsonLoader) {
        this.initChart();
        this.interval = setInterval(this.loader, 1000);
    }

    private initChart = (): void => {
        this.chart = nv.models.lineChart()
            .margin({ left: "100" })
            .showLegend(false);

        const fmt = {
            x: d3.time.format("%H:%M"),
            y: d3.format(".i"),
        };

        const label = {
            x: "Time",
            y: "Value/1000",
        };

        this.chart.xAxis
            .axisLabel(label.x)
            .tickFormat((d: any) => fmt.x(new Date(d)));

        this.chart.yAxis
            .axisLabel(label.y)
            .tickFormat((v: number) => fmt.y(Math.floor(v / 1000)));
    };

    private loader = (): void => {
        this.shift++;

        this.json.load(this.src).subscribe(
            (res: any): any => {
                const data: IChartData[] = [];
                const len = res.timestamps.length;
                for (let i = 0; i < len; i++) {
                    data.push({
                        x: res.timestamps[i] * 1000, // secs -> millis
                        y: res.data[(i + this.shift) % len],
                    });
                }
                d3.select(this.elem.nativeElement)
                    .select("svg")
                    .datum([{ values: data }])
                    .call(this.chart);
            }
        );
    };

    public ngOnDestroy(): void {
        console.log("Destroyed");
        clearInterval(this.interval);
    }
}

export {SimpleGraphComponent};
