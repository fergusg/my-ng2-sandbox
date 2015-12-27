import {Directive, ElementRef} from "angular2/core";
import MessageBus from "./messagebus";
import AppConfig from "../../config";

@Directive({
    selector: "[message-bus-receiver]",
    providers: [AppConfig],
})
export default class MessageBusReceiver {
    constructor(messageBus: MessageBus, elem: ElementRef, config: AppConfig) {
        messageBus
            .emitter
            .debounceTime(config.debounceTime)
            .subscribe(
                (t: any) => elem.nativeElement.innerText = t,
                (err: any) => console.error("error", err),
                () => console.log("complete")
            );
    }
}
