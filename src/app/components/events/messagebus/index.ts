import {Component, Directive, ElementRef} from "angular2/core";

import MessageBus, {IEvent, MessageBusReceiver} from "./messagebus";

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
        <h3 receiver="title"><em>Enter title</em></h3>
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
        <h3><em>{{title}}</em></h3>
    `,
})
class MessageBusTarget2 extends MessageBusReceiver {
    public title: string = "Enter title";
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
        <messagebus-source></messagebus-source>
        <hr />
        <h2>Using custom receiver attribute</h2>
        <messagebus-target></messagebus-target>
        <hr />
        <h2>Using direct subscription</h2>
        <messagebus-target2></messagebus-target2>
    `,
})
class MessageBusExample {
}

export default MessageBusExample;
