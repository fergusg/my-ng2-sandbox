import {Component, Directive, ElementRef} from "angular2/core";

import MessageBus, {IEvent} from "./messagebus";
import MessageBusReceiver from "./messagebusreceiver";

/**
 *
 */
@Directive({
    selector: "[receiver]",
    providers: [MessageBus],
    inputs: ["type:receiver"],
})
class Receiver extends MessageBusReceiver {
    public type: string;
    constructor(messageBus: MessageBus, protected elem: ElementRef) {
        super(messageBus);
    }

    protected acceptMessage(t: IEvent): void {
        if (!this.type || t.type === this.type) {
            this.elem.nativeElement.innerText = t.message;
        }
    };
}

/**
 *
 */
@Component({
    directives: [Receiver],
    selector: "messagebus-target",
    template: `
        <h2 receiver="title"><em>Enter title</em></h2>
    `,
})
class MessageBusTarget {
}

/**
 *
 */
@Component({
    providers: [MessageBus],
    selector: "messagebus-target2",
    template: `
        <h2>{{title}}</h2>
    `,
})
class MessageBusTarget2 extends MessageBusReceiver {
    public title: string;
    constructor(messageBus: MessageBus) {
        super(messageBus);
    }

    protected acceptMessage(t: IEvent): void {
        if (t.type === "title") {
            this.title = t.message;
        }
    };

}

/**
 *
 */
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

/**
 *
 */
@Component({
    selector: "messagebus",
    directives: [MessageBusTarget, MessageBusSource, MessageBusTarget2],
    template: `
        <messagebus-target></messagebus-target>
        <messagebus-source></messagebus-source>
        <hr />
        <h1>3. Alt target for Message Bus</h1>
        <messagebus-target2></messagebus-target2>
    `,
})
class MessageBusExample {
}

export default MessageBusExample;
