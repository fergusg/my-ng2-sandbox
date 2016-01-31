import {Component, Directive, ElementRef} from "angular2/core";

import MessageBus, {IEvent} from "./messagebus";
import MessageBusReceiver from "./messagebusreceiver";

@Directive({
    selector: "[receiver]",
    providers: [MessageBus],
    inputs: ["type:receiver"],
})
class Receiver extends MessageBusReceiver {
    public type: string;
    constructor(messageBus: MessageBus, protected elem: ElementRef) {
        super(messageBus, elem);
    }

    protected acceptMessage(t: IEvent): void {
        if (!this.type || t.type === this.type) {
            this.elem.nativeElement.innerText = t.message;
        }
    };
}

@Component({
    directives: [Receiver],
    selector: "messagebus-target",
    template: `
        <h2 receiver="title"><em>Enter title</em></h2>
    `,
})
class MessageBusTarget {
}


@Component({
    providers: [MessageBus],
    selector: "messagebus-source",
    template: `
        New Title <input #title (keyup)="emitTitle(title.value)">
    `,
})
class MessageBusSource {
    constructor(private messageBus: MessageBus) {
    }

    protected emitTitle(s: string): void {
        this.messageBus.emit({type: "title", message: s});
    }
}

@Component({
    selector: "messagebus",
    directives: [MessageBusTarget, MessageBusSource],
    template: `
        <messagebus-target></messagebus-target>
        <messagebus-source></messagebus-source>
    `,
})
class MessageBusExample {
}

export default MessageBusExample;
