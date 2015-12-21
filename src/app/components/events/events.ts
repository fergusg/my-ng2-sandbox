import {Component, Output, Input, EventEmitter} from "angular2/core";

@Component({
    selector: "change-form",
    template: `
    New Title
    <input #formTitle [value]="title"
        (keyup)="changeTitle(formTitle.value)">
    {{title}}
    `
})
class ChangeForm {
    @Input() private title: string;
    @Output() private updateTitle: EventEmitter<string> = new EventEmitter<string>();

    private changeTitle(t: string) {
        this.updateTitle.emit(t);
    }
}

@Component({
    selector: "events",
    template: `
        <h1>Events</h1>
        Updating one component from another.
        <h2>{{title}}&nbsp;</h2>
        <change-form
            [title]="title"
            (updateTitle)="changeTitle($event)"></change-form>
    `,
    directives: [ChangeForm]
})
class EventsComponent {
    private title = "Hello World";

    private changeTitle(t: string) {
        this.title = t;
    }
}

export default EventsComponent;
