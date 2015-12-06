import {Directive, ElementRef} from "angular2/angular2";
import {Router, Location} from "angular2/router";

declare var window: any;

@Directive({
    selector: "[nav-link]",
    host: {
        "(click)": "onClick($event)",
        "[attr.href]": "getPath(true)"
    },
    inputs: [
        "route:nav-link",
        "activeClass:nav-link-active"
    ]
})
class NavLink {
    private route: any[];
    private path: string; // via getPath()
    private element: Element;
    private activeClass: string = "nav-link-active";

    constructor(
        private router: Router,
        private location: Location,
        element: ElementRef // injected
    ) {
        this.element = element.nativeElement;
    }

    private isActive(): boolean {
        const curr = this.location.path();
        // "home" path is "", others "/xxxxx"
        let ret = (curr === `/${this.path}`) || (curr === this.path);

        const classList = this.element.classList;
        new Promise(resolve => {
            resolve();
            for (let c of this.activeClass.split(/\s+/)) {
                if (ret) {
                    classList.add(c);
                } else {
                    classList.remove(c);
                }
            }
        });
        return ret;
    }

    private getPath(hash: boolean = false): string {
        if (!this.path) {
            // Can't do this in the constructor as route isn't set 'til later
            this.path = this.router.generate(this.route).toUrlPath();
        }

        this.isActive();
        if (hash) {
            return this.path ? `#/${this.path}` : "";
        } else {
            return this.path ? `/${this.path}` : "";
        }
    }

    private onClick($event: Event): void {
        $event.preventDefault(); // don't navigate to href.
        this.router.navigate(this.route);
    }
}

export default NavLink;
