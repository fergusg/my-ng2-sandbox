import {Component} from "angular2/core";
import MessageBus from "./messagebus";
import MessageBusReceiver from "./messagebusreceiver";
import ChangeForm from "./changeform";

@Component({
    directives: [ChangeForm, MessageBusReceiver],
    providers: [MessageBus],
    selector: "events",
    template: `
        <h1>Events</h1>
        Updating one component from another.
        <hr>
        <h1>1. Use custom component/event (doesn't bubble)</h1>
        <h2>{{title}}&nbsp;</h2>
        <change-form
            [title]="title"
            (updateTitle)="changeTitle($event)"></change-form>
        <hr>
        <h1>2. With message bus</h1>
        <h2 message-bus-receiver></h2>
        New Title <input #formTitle2 (keyup)="emitTitle(formTitle2.value)">
    `,
})
class EventsComponent {
    private title: string = "Hello World";

    constructor(private messageBus: MessageBus) {
    }

    protected changeTitle(t: string): void {
        this.title = t;
    }

    protected emitTitle(s: string): void {
        this.messageBus.emit(s);
    }
}

export default EventsComponent;
