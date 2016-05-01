import {Component, OnInit} from "angular2/core";

@Component({
    selector: "home",
    template: `
    <h1>{{title}}</h1>
    <span *ngFor="let d of data">{{d}} </span>
    `,
})
export class HomeComponent implements OnInit {
    public title: string = "Home Page";
    public data: string[] = [];

    public ngOnInit(): void {
        this.load(200);
    }

    private load(N: number = 100): void {
        const maxT = 2000.0;
        const delta = maxT / N;
        for (let i = 1; i <= N; i++) {
            window.setTimeout(() => this.data.push(`${i}${i < N ? ", " : ""}`), i * delta);
        }
    }
}
