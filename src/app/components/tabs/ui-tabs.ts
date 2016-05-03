import {Component, QueryList, ContentChildren} from "@angular/core";

import UiPane from "./ui-pane";

@Component({
    selector: "ui-tabs",
    template: `
    <ul class="nav nav-tabs">
      <li *ngFor="let pane of panes"
          (click)="select(pane)"
          role="presentation" [class.active]="pane.active">
        <a>{{pane.title}}</a>
      </li>
    </ul>
    <ng-content></ng-content>
    `
})
class UiTabs {
    @ContentChildren(UiPane) private panes: QueryList<UiPane>;

    public select(pane: UiPane): void {
        this.panes.toArray().forEach((p: UiPane) => p.active = (p === pane));
    }
}

export default UiTabs;
