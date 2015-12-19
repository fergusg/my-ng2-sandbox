import {Component, View, Directive} from 'angular2/core';
import {Router, Instruction} from 'angular2/router';

@Component({
    selector: 'sandbox'
})
@View({
    template: `
    <h1>Sandbox</h1>
    <em>Nothing to see here</em>
    `
})
class SandBoxComponent {
}

export default SandBoxComponent;
