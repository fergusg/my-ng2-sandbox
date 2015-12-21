import {Component} from 'angular2/core';
import UiTabs from './ui-tabs';
import UiPane from './ui-pane';

interface Detail {
    title: string,
    text: string
}

@Component({
    selector: 'tabs',
    template: `
        <h4>Tabs Demo</h4>
        <ui-tabs>
            <template ui-pane title='Overview' active="true">
                You have {{details.length}} details.
            </template>
            <template *ngFor="#detail of details" ui-pane [title]="detail.title">
                {{detail.text}} <br><br>
                <button class="btn" (click)="removeDetail(detail)">Remove</button>
            </template>
            <template ui-pane title='Summary'>
                Next last ID is {{id}}.
            </template>
        </ui-tabs>
        <hr>
        <button class="btn" (click)="addDetail()">Add Detail</button>
      `,
    directives: [UiTabs, UiPane]
})
class TabsComponent {
    private details: Detail[] = [];
    private id: number = 0;

    private addDetail() {
        this.id++;
        this.details.push({
            title: `Detail ${this.id}`,
            text: `Some detail text for ${this.id}...`
        });
    }

    private removeDetail(detail: Detail) {
        this.details = this.details.filter((d) => d !== detail);
    }
}

export default TabsComponent;