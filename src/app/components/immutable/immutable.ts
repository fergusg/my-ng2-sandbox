import {Component, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy, ElementRef} from "angular2/core";
import {Http} from "angular2/http";
import jsonLoader from "../../utils/json-loader";

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
    template: `
        <svg style="height:400px; width:95%; border: 1px solid black"></svg>
    `,
})
class ImmutableComponent implements OnDestroy {
    private shift: number = 0;
    private src = "chart-data.json";
    private interval: any;
    private data: IChartData[];
    private chart: any;

    constructor(private http: Http, private ref: ChangeDetectorRef, private elem: ElementRef) {
        this.chart = nv.models.lineChart()
            .margin({ left: "100" })
            .showLegend(false);
        this.interval = setInterval(this.loader, 1000);
        this._setupAxes(this.chart);
    }

    private makeChart = (): void => {
        d3.select(this.elem.nativeElement)
            .select("svg")
            .datum([{ values: this.data }])
            .call(this.chart);
    };

    private loader = (): void => {
        this.shift++;
        jsonLoader(this.http, this.src).subscribe(
            this.onLoad,
            (): any => null
        );
    };

    private onLoad = (res: any): any => {
        this.data = [];
        const len = res.timestamps.length;
        for (let i = 0; i < len; i++) {
            this.data.push({
                x: res.timestamps[i] * 1000, // secs -> millis
                y: res.data[(i + this.shift) % len],
            });
        }
        this.makeChart();
    };

    private _setupAxes = (chart: any): void => {
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
    };

    public ngOnDestroy(): void {
        console.log("Destroyed");
        clearInterval(this.interval);
    }

}

export default ImmutableComponent;
