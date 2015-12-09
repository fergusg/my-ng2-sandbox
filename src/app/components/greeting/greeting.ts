import {Component, Input /*, NgIf*/ } from 'angular2/angular2';

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
        <div *ng-if="canGreet" class="greeting">{{name}}</div>
        <button *ng-if="!canGreet" (click)="greet()">Create Greeting</button>
    `,
    // directives: [NgIf]  // Doesn't seem needed
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
