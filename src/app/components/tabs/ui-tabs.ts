import {Component, QueryList, ContentChildren} from 'angular2/core';

import UiPane from "./ui-pane";

@Component({
    selector: 'ui-tabs',
    template: `
    <ul class="nav nav-tabs">
      <li *ngFor="var pane of panes"
          (click)="select(pane)"
          role="presentation" [class.active]="pane.active">
        <a href="javascript: false">{{pane.title}}</a>
      </li>
    </ul>
    <ng-content></ng-content>
    `
})
class UiTabs {
    @ContentChildren(UiPane) panes: QueryList<UiPane>;

    select(pane: UiPane) {
        this.panes.toArray().forEach((p: UiPane) => p.active = (p === pane));
    }
}

export default UiTabs;
