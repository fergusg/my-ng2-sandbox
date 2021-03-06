import {Directive, Input, ViewContainerRef, TemplateRef}
from "@angular/core";

@Directive({
    selector: "[ui-pane]"
})
class UiPane {
    @Input() public title: string;
    public viewContainer: ViewContainerRef;
    public templateRef: TemplateRef<any>;

    private _active: boolean = false;

    constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<any>) {
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
    }

    @Input() set active(active: boolean) {
        if (active === this._active) {
            return;
        }
        this._active = active;
        if (active) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.remove(0);
        }
    }

    get active(): boolean {
        return this._active;
    }
}

export default UiPane;
