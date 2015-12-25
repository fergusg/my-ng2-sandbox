import {Directive, ElementRef} from "angular2/core";
import MessageBus from "./messagebus";

@Directive({
    selector: "[message-bus-receiver]"
})
export default class MessageBusReceiver {
    constructor(private messageBus: MessageBus, private elem: ElementRef) {
        console.log(this.messageBus.emitter);
        let r: any = this.messageBus
        .emitter
        .debounceTime(100)
        .subscribe(
            (t: any) => {
                elem.nativeElement.innerText = t;
            },
            (err: any) => console.log("error", err),
            () => console.log("complete")
        );
        console.log(r);
    }
}
