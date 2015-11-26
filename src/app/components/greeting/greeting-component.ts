import {Component} from 'angular2/angular2';
import Greeting from './greeting';

@Component({
    template: `
        <h1>Create a Greeting</h1>
        <greeting [name]="name"></greeting>
    `,
    directives: [Greeting]
})
export class GreetingComponent {
    public name = "Joe Smith";
}