import {Component} from "angular2/core";
import LazyMessage from "./lazy-message";

@Component({
    directives: [LazyMessage],
    selector: "lazy-loaded",
    template: `
        <div>
            <p>
                Congratulations, this component was lazy loaded, so none of its
                dependencies were loaded until just now.
            </p>

            <lazy-message></lazy-message>
        </div>
    `,
})
export default class LazyLoadedComponent {}
