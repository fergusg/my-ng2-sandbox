import {Component, OnDestroy, OnInit, ElementRef} from "angular2/core";
import {Http} from "angular2/http";

import {CachingService} from "../../utils/caching-service";

declare var nv: any;
declare var d3: any;

interface IChartData {
    x: number;
    y: number;
}

interface ISrcData {
    timestamps: number[];
    data: number[];
}

class DataService extends CachingService {
    constructor(http: Http) {
        super(http);
        this.src = "chart-data.json";
    }
}

@Component({
    selector: "simple-graph",
    template: "<svg></svg>",
    styles: [`
        svg {
            height:400px;
            width: 80%;
        }`,
    ],
    providers: [DataService],
})
class SimpleGraphComponent implements OnDestroy, OnInit {
    private shift: number = 0;
    private interval: any;
    private chart: any;

    constructor(
        private elem: ElementRef,
        private dataSvc: DataService) {
    }

    public ngOnDestroy(): void {
        console.log("Destroyed");
        clearInterval(this.interval);
    }

    public ngOnInit(): void {
        this.initChart();
        this.loader();
        this.interval = setInterval(this.loader.bind(this), 1000);
    }

    private initChart(): void {
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
            .tickFormat((d: number) => fmt.x(new Date(d)));

        this.chart.yAxis
            .axisLabel(label.y)
            .tickFormat((v: number) => fmt.y(Math.floor(v / 1000)));

    };

    private loader(): void {
        this.shift++;

        this.dataSvc.get().subscribe(
            (res: ISrcData): void => {
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

}

export {SimpleGraphComponent};
