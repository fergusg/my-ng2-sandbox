import {Component} from 'angular2/angular2';
import LazyMessage from './lazy-message';

@Component({
    selector: 'lazy-loaded',
    template: `
        <div class="container">
            <p>
                Congratulations, this component was lazy loaded, so none of its
                dependencies were loaded until just now.
            </p>

            <lazy-message></lazy-message>
        </div>
    `,
    directives: [LazyMessage]
})
export default class LazyLoadedComponent {}
