import {Component} from "angular2/core";
import UiTabs from "./ui-tabs";
import UiPane from "./ui-pane";

interface IDetail {
    title: string;
    text: string;
}

@Component({
    directives: [UiTabs, UiPane],
    selector: "tabs",
    template: `
        <h4>Tabs Demo</h4>
        <ui-tabs>
            <template ui-pane title="Overview" active="true">
                You have {{details.length}} details.
            </template>
            <template *ngFor="let detail of details" ui-pane [title]="detail.title">
                {{detail.text}} <br><br>
                <button class="btn" (click)="removeDetail(detail)">Remove</button>
            </template>
            <template ui-pane title="Summary">
                Next last ID is {{id}}.
            </template>
        </ui-tabs>
        <hr>
        <button class="btn" (click)="addDetail()">Add Detail</button>
      `,
})
class TabsComponent {
    private details: IDetail[] = [];
    private id: number = 0;

    public addDetail(): void {
        this.id++;
        this.details.push({
            text: `Some detail text for ${this.id}...`,
            title: `Detail ${this.id}`,
        });
    }

    public removeDetail(detail: IDetail): void {
        this.details = this.details.filter((d: IDetail) => d !== detail);
    }
}

export {TabsComponent};
