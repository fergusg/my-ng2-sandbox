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
    private _emitter: EventEmitter<any> = new EventEmitter<any>();

    public get emit(): IEventEmitter {
        return this._emitter.emit.bind(this._emitter);
    }

    public get subscribe(): IEventSubscriber {
        return this._emitter
            .debounceTime(AppConfig.debounceTime)
            .subscribe
            .bind(this._emitter);
    }

    public get emitter(): EventEmitter<any> {
        return this._emitter;
    }
}

export {IEvent, IEventEmitter, IEventSubscriber};
export default MessageBus;
