import {EventEmitter} from "angular2/core";

export default class MessageBus {
    private eventEmitter: EventEmitter<any>;
    constructor() {
        this.eventEmitter = new EventEmitter<any>();
    }

    // shorthand for .emitter.emit(...)
    public emit(message: any): void {
        this.eventEmitter.emit(message);
    }

    // shorthand for .emitter.subscribe(...)
    public subscribe(generatorOrNext?: any, error?: any, complete?: any): any {
        return this.eventEmitter.subscribe(generatorOrNext, error, complete);
    }

    public get emitter(): EventEmitter<any> {
        return this.eventEmitter;
    }
}
