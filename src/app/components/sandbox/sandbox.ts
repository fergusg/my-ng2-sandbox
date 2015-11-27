import {Component, View} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router'

@Component({
    selector: '[veto]',
    template: null
})
class Veto {
}

@Component({
    selector: 'home'
})
@View({
    template: `
    <h1>Sandbox</h1>

    <a [router-link]="['/Greeting']" (click)='veto($event)'>Greet.1</a>
    <a [router-link]="['/Greeting']" veto>Greet.1</a>
    `,
    directives: [ROUTER_DIRECTIVES, Veto]
})
export default class SandBoxComponent {
    veto(event:Event) {
        event.preventDefault();
    }
 }
