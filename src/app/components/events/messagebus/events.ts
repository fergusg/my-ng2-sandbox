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

export {IEvent, IEventEmitter, IEventSubscriber};
