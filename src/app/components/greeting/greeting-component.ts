import {Component} from 'angular2/core';
import Greeting from './greeting';

@Component({
    template: `
        <h1>Create a Greeting</h1>
        <greeting [name]="name"></greeting>
    `,
    directives: [Greeting]
})
export default class GreetingComponent {
    public name = "Joe Smith";
}