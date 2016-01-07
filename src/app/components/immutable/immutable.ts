import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from "angular2/core";
declare var Immutable: any;

@Component({
    selector: "immutable",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div>{{data | json}}</div>
        <button (click)="true">Click</button>
        <p>The value is incremented every 100ms but automatic change detection is disabled.</p>
        <p>Click the button to trigger a manual check</p>
    `
})
class ImmutableComponent {
    private data: any;
    private interval: any;

    constructor(private ref: ChangeDetectorRef) {
        this.data = Immutable.Map({ x: 0 });
        this.interval = setInterval(this.incr.bind(this, false), 100);
    }

    /**
     * Timeout/interval events to not trigger change detection with OnPush
     * Click events do, though.
     */
    public incr(mark: boolean = false): void {
        const x = this.data.get("x");
        this.data = this.data.set("x", x + 1);
        if (mark) {
            this.ref.markForCheck();
        }
    }

    public ngOnDestroy(): void {
        console.log("Destroyed");
        clearInterval(this.interval);
    }
}

export default ImmutableComponent;
