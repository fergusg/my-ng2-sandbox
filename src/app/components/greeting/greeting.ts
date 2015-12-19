import {Component, Input} from 'angular2/core';

@Component({
    selector: 'greeting',
    // ALT inputs: ['name'],
    styles: [`
        .greeting {
            color:red;
            font-size: 36px;
        }
    `],
    template: `
        <div *ngIf="canGreet" class="greeting">{{name}}</div>
        <button *ngIf="!canGreet" (click)="greet()">Create Greeting</button>
    `
})
export default class Greeting {
    greeting: string;
    canGreet: boolean;
    @Input('name') private _name: string;

    greet() {
        this.canGreet = true;
    }

    set name(name: string) {
        this._name = name;
    }

    get name() {
        return `Hello ${this._name}`;
    }
}
