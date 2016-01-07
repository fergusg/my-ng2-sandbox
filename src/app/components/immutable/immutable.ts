import {Component, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy} from "angular2/core";
declare var Immutable: any;

@Component({
    selector: "immutable",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div>{{data | json}}</div>
        <button (click)="true">Click</button>
        <p>The value is incremented every 100ms but automatic change detection is disabled.</p>
        <p>Click the button to trigger a manual check.  One will be triggered every 5s anyway</p>
    `
})
class ImmutableComponent implements OnDestroy {
    private data: any;
    private interval: any;

    constructor(private ref: ChangeDetectorRef) {
        this.data = Immutable.Map({ x: 0 });
        this.interval = setInterval(this.incr.bind(this), 100);
    }

    /**
     * Timeout/interval events to not trigger change detection with OnPush
     * Click events do, though.
     */
    public incr(): void {
        const x = this.data.get("x") + 1;
        this.data = this.data.set("x", x);
        if (x % 50 === 0) {
            this.ref.markForCheck();
        }
    }

    public ngOnDestroy(): void {
        console.log("Destroyed");
        clearInterval(this.interval);
    }
}

export default ImmutableComponent;
