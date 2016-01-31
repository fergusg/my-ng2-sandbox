import {Component, Directive, ElementRef} from "angular2/core";

import MessageBus, {IEvent} from "./messagebus";
import MessageBusReceiver from "./messagebusreceiver";

@Directive({
    selector: "[title-receiver]",
    providers: [MessageBus],
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
    selector: "messagebus-target",
    template: `
        <h2 title-receiver><em>Enter title</em></h2>
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
        console.log("emit", s);
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
