import {Component, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy, ElementRef} from "angular2/core";
import {Http} from "angular2/http";
import jsonLoader from "../../utils/json-loader";

declare var _: any;
declare var Immutable: any;
declare var nv: any;
declare var d3: any;

@Component({
    selector: "immutable",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <svg style="height:400px; width:95%; border: 1px solid black"></svg>
    `
})
class ImmutableComponent implements OnDestroy {
    protected src = "chart-data.json";
    protected shift: number = 0;
    private interval: any;
    private data: any[];
    private chart: any;

    constructor(private http: Http, private ref: ChangeDetectorRef, private elem: ElementRef) {
        this.chart = nv.models.lineChart()
            .margin({ left: "100" })
            .showLegend(false);
        this.interval = setInterval(this.loader.bind(this), 1000);
        this._setupAxes(this.chart);
    }

    public loader(): void {
        jsonLoader(this.http, this.src).subscribe(
            onLoad.bind(this),
            (): any => null
        );

        function onLoad(res: any): any {
            this.data = [];
            const len = res.timestamps.length;
            this.shift = (this.shift + 1) % len;
            for (let i = 0; i < len; i++) {
                this.data.push({
                    x: res.timestamps[i] * 1000, // secs -> millis
                    y: res.data[(i + this.shift) % len]
                });
            }
            this.makeChart();
        }
    }

    public ngOnDestroy(): void {
        console.log("Destroyed");
        clearInterval(this.interval);
    }

    public makeChart(): void {
        const e = document.querySelector("svg");
        d3.select(e)
            .datum([{ values: this.data }])
            .call(this.chart);
    }

    private _setupAxes(chart: any): void {
        let fmtX = d3.time.format("%H:%M");
        let fmtY = d3.format(".i");

        let xlabel = "Time";
        let ylabel = "Value";

        chart.xAxis
            .axisLabel(xlabel)
            .tickFormat((d: any) => fmtX(new Date(d)));

        chart.yAxis
            .axisLabel(ylabel)
            .tickFormat((v: number) => fmtY(Math.floor(v / 1000)));
    }
}

export default ImmutableComponent;
