import {Component, Output, Input, EventEmitter} from "angular2/core";

@Component({
    selector: "change-form",
    template: `
    New Title
    <input #formTitle [value]="title"
        (keyup)="changeTitle(formTitle.value)">
    {{title}}
    `,
})
class ChangeForm {
    @Input() protected title: string;
    @Output() private updateTitle: EventEmitter<string> = new EventEmitter<string>();

    protected changeTitle(t: string): void {
        this.updateTitle.emit(t);
    }
}

@Component({
    directives: [ChangeForm],
    selector: "events",
    template: `
        <h1>Events</h1>
        Updating one component from another.
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
