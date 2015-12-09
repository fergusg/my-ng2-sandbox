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
        <div *ng-if="greeting" class="greeting">{{greeting}}</div>
        <button *ng-if="!greeting" (click)="greet()">Create Greeting</button>
    `,
    // directives: [NgIf]  // Doesn't seem needed
})
export default class Greeting {
    greeting: string;
    @Input('name') private _name: string;

    greet() {
        this.greeting = `Hello, ${this.name}`;
    }

    set name(name:string) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
}
