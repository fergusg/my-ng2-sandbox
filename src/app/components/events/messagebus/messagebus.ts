import {EventEmitter} from "angular2/core";
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

class MessageBus {
    private _emitter = new EventEmitter<any>();

    public get emit(): IEventEmitter {
        return this._emitter.emit.bind(this._emitter);
    }

    public get subscribe(): IEventSubscriber {
        return this._emitter
            .debounceTime(AppConfig.debounceTime || 100)
            .subscribe
            .bind(this._emitter);
    }
    // public subscribe(generatorOrNext?: any, error?: any, complete?: any): any {
    //     return this.eventEmitter.subscribe(generatorOrNext, error, complete);
    // }

    public get emitter(): EventEmitter<any> {
        return this._emitter;
    }
}

export {IEvent, IEventEmitter, IEventSubscriber};
export default MessageBus;
