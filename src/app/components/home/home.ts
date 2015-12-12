import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
    selector: 'home',
    template: `
    <h1>{{title}}</h1>
    <span *ngFor="#d of data">{{d}} </span>
    `,
    directives: [CORE_DIRECTIVES]
})
export default class HomeComponent {
    public title = "Home Page";
    public data: any[] = [];

    constructor() {
        this.load(200);
    }

    load(N:number = 100) {
        for (var i = 0, delta = 2000.0/N; i < N; i++) {
            ((i:number) => {
                window.setTimeout(() => this.data.push(`${i}, `), i * delta);
            })(i);
        }
        // tsc doesn't support let in loops properly yet.
        // for (let q = 0, delta = 2000.0 / N; q < N; q++) {
        //     window.setTimeout(() => this.data.push(`${q}, `), q * delta);
        // }
    }
}
