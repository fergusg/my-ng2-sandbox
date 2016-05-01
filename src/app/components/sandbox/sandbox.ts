import {Component, Inject, OnInit} from "angular2/core";
import {CachingService} from "../../utils/caching-service";


@Component({
    selector: "sandbox",
    template: `
    <h1>Sandbox</h1>
    <em>Nothing to see here</em>
    `,
})
class SandBoxComponent implements OnInit {
    @Inject(CachingService) private c: CachingService;

    public ngOnInit(): void {
        console.log("SandBox", this.c);
    }
}

export {SandBoxComponent};
