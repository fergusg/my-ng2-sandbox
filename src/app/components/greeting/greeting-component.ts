import {Component} from "angular2/core";
import Greeting from "./greeting";

@Component({
    directives: [Greeting],
    template: `
        <h1>Create a Greeting</h1>
        <greeting [name]="name"></greeting>
    `,
})
export default class GreetingComponent {
    public name: string = "Joe Smith";
}
