import {Component} from "angular2/core";
import MessageBusComponent from "./messagebus/index";
import SimpleEventsComponent from "./simple/index";

@Component({
    directives: [MessageBusComponent, SimpleEventsComponent],
    selector: "events",
    template: `
        <h1>Events</h1>
        Updating one component from another.

        <hr>
        <h1>1. Use custom component/event (doesn't bubble)</h1>
        <simple></simple>

        <hr>
        <h1>2. With message bus</h1>
        <messagebus></messagebus>
    `,
})
class EventsComponent {
}

export default EventsComponent;
