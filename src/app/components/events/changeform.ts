import {Component, Output, Input, EventEmitter} from "angular2/core";

@Component({
    selector: "change-form",
    template: `
    New Title
    <input #formTitle [value]="title"
        (keyup)="changeTitle(formTitle.value)">
    {{title}}
    `,
})
export default class ChangeForm {
    @Input() protected title: string;
    @Output() private updateTitle: EventEmitter<string> = new EventEmitter<string>();

    protected changeTitle(t: string): void {
        this.updateTitle.emit(t);
    }
}
