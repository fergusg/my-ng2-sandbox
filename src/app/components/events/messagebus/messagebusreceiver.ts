import MessageBus, {IEvent} from "./messagebus";

export default class MessageBusReceiver {
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

    protected acceptMessage(t: IEvent): void {
        throw "needs override";
    }
}
