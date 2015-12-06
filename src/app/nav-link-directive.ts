import {Directive, ElementRef} from "angular2/angular2";
import {Router, Location} from "angular2/router";

@Directive({
    selector: "[nav-link]",
    host: {
        "(click)": "onClick($event)",
        "[attr.href]": "getPath()"
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
        element: ElementRef
    ) {
        this.element = element.nativeElement;
    }

    private setActive(): void {
        const curr = this.location.path();
        // "home" path is "", others "/xxxxx"
        let active = (curr === `/${this.path}`) || (curr === this.path);

        const classList = this.element.classList;
        for (let c of this.activeClass.split(/\s+/)) {
            if (active) {
                classList.add(c);
            } else {
                classList.remove(c);
            }
        }
    }

    private getPath(): string {
        if (!this.path) {
            // Can't do this in the constructor as route isn't set 'til later
            this.path = this.router.generate(this.route).toUrlPath();
        }

        this.setActive();
        return this.path ? `#/${this.path}` : "";
    }

    private onClick($event: Event): void {
        $event.preventDefault(); // don't navigate to href.
        this.router.navigate(this.route);
    }
}

export default NavLink;