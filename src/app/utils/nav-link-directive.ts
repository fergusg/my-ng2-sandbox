import {Directive, ElementRef} from "angular2/core";
import {Router, Location} from "angular2/router";

@Directive({
    host: {
        "(click)": "onClick($event)",
        "[attr.href]": "makeHref()"
    },
    inputs: [
        "route:nav-link",
        "activeClass:nav-link-active",
        "enabled:nav-link-enabled"
    ],
    selector: "[nav-link]",
})
class NavLink {
    private path: string; // set in makeHref()
    private classList: DOMTokenList; // via ElementRef DI
    private router: Router;
    private location: Location;

    // These are all set via @Directive->inputs above
    private route: any[]; // routes are ["name", {p1:v1, .... }]
    private activeClass: string = "nav-link-active"; // optional. Can be "class1 class2 ..."
    private enabled: boolean = true; // link enabled by default. Optional.

    constructor(
        router: Router,
        location: Location,
        element: ElementRef
    ) {
        this.classList = element.nativeElement.classList;
        this.router = router;
        this.location = location;
        /*tslint:disable */
        // phantom ref to fool tslint
        this.onClick || this.makeHref;
        /*tslint:enable */
    }

    private makeHref(): string {
        const curr: string = this.location.path();

        // only need to calc. once. Can't do this in the constructor
        // as 'this.route' isn't set until after initialization.
        if (!this.path) {
            this.path = this.router.generate(this.route).toUrlPath();
        }

        // "home" path is "", others "/xxxxx"
        const active: boolean = (curr === `/${this.path}`) || (curr === this.path);

        const classes: string[] = this.activeClass.split(/\s+/);
        // ES6 spread operator  (...x) -> (x[0], x[1], ...)
        active ? this.classList.add(...classes) : this.classList.remove(...classes);

        // Assume we're using hashed paths.  This is only for display so nothing
        // should break if it's wrong, but it would be nice to get it right
        return this.path ? `#/${this.path}` : "";
    }

    private onClick($event: Event): void {
        $event.preventDefault(); // don't navigate to href.
        if (this.enabled) {
            this.router.navigate(this.route);
        }
    }
}

export default NavLink;
