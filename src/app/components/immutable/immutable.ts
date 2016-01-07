import {Component, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy, ElementRef} from "angular2/core";
import {Http, Response} from "angular2/http";
import {Observable} from "rxjs/Observable";

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
    private simpleData: any;
    private interval: any;
    private src = "/app/components/immutable/data.json";
    private data: any[];
    private chart: any;
    private shift: number = 0;

    constructor(private http: Http, private ref: ChangeDetectorRef, private elem: ElementRef) {
        this.simpleData = Immutable.Map({ x: 0 });
        this.chart = nv.models.lineChart()
            .margin({ left: "100" })
            .showLegend(false);
        this.interval = setInterval(this.loader.bind(this), 1000);
        this._setupAxes(this.chart);
    }

    public loader(): void {
        this.load().subscribe(
            this.onLoad.bind(this),
            (): any => null
        );
    }

    public onLoad(res: any): any {
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

    private load(): Observable<any> {
        return this.http.get(this.src).map(
            (res: Response) => res.json()
        );
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
