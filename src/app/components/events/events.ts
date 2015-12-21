import {Component, Output, Input, EventEmitter} from "angular2/core";

@Component({
	selector: "change-form",
	template: `
	New Title <input #formTitle (keyup)="changeTitle(formTitle.value)" [value]="title">
	`
})
class ChangeForm {
	@Input() private title:string;
	@Output() updateTitle:EventEmitter<string> = new EventEmitter<string>();

	changeTitle(t: string) {
		this.title = t;
		this.updateTitle.emit(t);
	}
}

@Component({
	selector: "events",
	template: `
		<h1>Events</h1>
		Updating one component from another.
		<h2>{{title}}&nbsp;</h2>
		<change-form
			[title]="title"
			(updateTitle)="changeTitle($event)"></change-form>
	`,
	directives: [ChangeForm]
})
class EventsComponent {
	private title ="Hello World";

	changeTitle(t:string) {
		this.title = t;
	}
}

export default EventsComponent;
