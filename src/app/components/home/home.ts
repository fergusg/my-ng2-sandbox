import {Component} from "angular2/core";

@Component({
    selector: "home",
    template: `
    <h1>{{title}}</h1>
    <span *ngFor="let d of data">{{d}} </span>
    `,
})
export class HomeComponent {
    public title: string = "Home Page";
    public data: any[] = [];

    constructor() {
        this.load(200);
    }

    private load(N: number = 100): void {
        for (let i = 0, delta = 2000.0 / N; i < N; i++) {
            window.setTimeout(() => this.data.push(`${i}, `), i * delta);
        }
    }
}
