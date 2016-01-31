import {EventEmitter, Injectable} from "angular2/core";
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

export {IEvent, IEventEmitter, IEventSubscriber};
export default MessageBus;
