import {Component} from "angular2/core";


import MessageBus from "./messagebus";
import MessageBusReceiver from "./messagebusreceiver";

@Component({
    directives: [MessageBusReceiver],
    providers: [MessageBus],
    selector: "messagebus",
    template: `
        <h2 message-bus-receiver></h2>
        New Title <input #formTitle2 (keyup)="emitTitle(formTitle2.value)">
    `,
})
class EventsComponent {
    constructor(private messageBus: MessageBus) {
    }

    protected emitTitle(s: string): void {
        this.messageBus.emit(s);
    }
}

export default EventsComponent;
