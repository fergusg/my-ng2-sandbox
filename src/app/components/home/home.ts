import {Component} from "angular2/core";

@Component({
    selector: "home",
    template: `
    <h1>{{title}}</h1>
    <span *ngFor="#d of data">{{d}} </span>
    `
})
export default class HomeComponent {
    public title: string = "Home Page";
    public data: any[] = [];

    constructor() {
        this.load(200);
    }

    private load(N: number = 100): void {
        let i: any, delta: any;
        for (i = 0, delta = 2000.0 / N; i < N; i++) {
            ((j: number) => {
                window.setTimeout(() => this.data.push(`${j}, `), j * delta);
            })(i);
        }
        // tsc doesn"t support let in loops properly yet.
        // for (let q = 0, delta = 2000.0 / N; q < N; q++) {
        //     window.setTimeout(() => this.data.push(`${q}, `), q * delta);
        // }
    }
}
