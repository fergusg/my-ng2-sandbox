import {Component, Directive, ElementRef} from "angular2/core";

import MessageBus from "./messagebus";
import MessageBusReceiver from "./messagebusreceiver";
import {IEvent} from "./events";

@Directive({
    selector: "[message-bus-receiver]"
})
class TitleReceiver extends MessageBusReceiver {
    constructor(messageBus: MessageBus, protected elem: ElementRef) {
        super(messageBus, elem);
    }

    protected acceptMessage(t: IEvent): void {
        if (t.type === "title") {
            this.elem.nativeElement.innerText = t.message;
        }
    };
}

@Component({
    directives: [TitleReceiver],
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
        this.messageBus.emit({type: "title", message: s});
    }
}

export default EventsComponent;
