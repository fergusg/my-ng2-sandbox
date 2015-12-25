import {Directive, ElementRef} from "angular2/core";
import MessageBus from "./messagebus";

@Directive({
    selector: "[message-bus-receiver]"
})
export default class MessageBusReceiver {
    constructor(private messageBus: MessageBus, private elem: ElementRef) {
        this.messageBus
        .emitter
        .debounceTime(100)
        .subscribe(
            (t: any) => {
                elem.nativeElement.innerText = t;
            },
            (err: any) => console.error("error", err),
            () => console.log("complete")
        );
    }
}
