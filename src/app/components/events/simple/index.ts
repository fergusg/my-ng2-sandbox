import {Component} from "angular2/core";
import ChangeForm from "./changeform";

@Component({
    directives: [ChangeForm],
    selector: "simple",
    template: `
        <h2>{{title}}&nbsp;</h2>
        <change-form
            [title]="title"
            (updateTitle)="changeTitle($event)"></change-form>
    `,
})
class EventsComponent {
    private title: string = "Hello World";

    protected changeTitle(t: string): void {
        this.title = t;
    }

}

export default EventsComponent;
