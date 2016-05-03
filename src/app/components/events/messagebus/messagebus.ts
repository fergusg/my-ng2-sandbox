import {EventEmitter, Injectable} from "@angular/core";
import AppConfig from "../../../config";

interface IEvent {
    type?: string;
    message: any;
}

interface IEventEmitter {
    (message: IEvent): void;
}

interface IEventSubscriber {
    (generatorOrNext?: any, error?: any, complete?: any): any;
}

@Injectable()
class MessageBus {
    private static _emitter: EventEmitter<any> = new EventEmitter<any>();

    public get emit(): IEventEmitter {
        return MessageBus._emitter.emit.bind(MessageBus._emitter);
    }

    public get subscribe(): IEventSubscriber {
        return MessageBus._emitter
            .debounceTime(AppConfig.debounceTime)
            .subscribe
            .bind(MessageBus._emitter);
    }

    public get emitter(): EventEmitter<any> {
        return MessageBus._emitter;
    }
}

abstract class MessageBusReceiver {
    constructor(private messageBus: MessageBus) {
        this.messageBus.subscribe(
            this.acceptMessage.bind(this),
            this.onError.bind(this),
            this.onComplete.bind(this)
        );
    }

    protected onError(err: any): void {
        console.error(err);
    }

    protected onComplete(): void {
        console.log("complete");
    }

    protected abstract acceptMessage(t: IEvent): void;
}


export {IEvent, IEventEmitter, IEventSubscriber, MessageBusReceiver};
export default MessageBus;
