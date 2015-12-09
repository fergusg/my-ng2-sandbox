import {Component, View, NgIf} from 'angular2/angular2';

@Component({
    selector: 'greeting',
    inputs: ['name'],
    styles: [`
        .greeting {
            color:red;
            font-size: larger;
            transition: all 1s ease;
        }
    `],
    template: `
        <div *ng-if="greeting" class="greeting">{{greeting}}</div>
        <button *ng-if="!greeting" (click)="createGreeting()">Create Greeting</button>
    `,
    directives: [NgIf]
})

export default class Greeting {
    public greeting: string = "";
    private name: string;

    createGreeting() {
        this.greeting = `Greetings, ${this.name}`;
    }
}
