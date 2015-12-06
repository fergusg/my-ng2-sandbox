import {Directive, ElementRef} from "angular2/angular2";
import {Router, Location} from "angular2/router";

@Directive({
    selector: "[nav-link]",
    host: {
        "(click)": "onClick($event)",
        "[attr.href]": "getPath(true)",
        "[class.nav-link-active]": "isActive()"
    },
    inputs: [
        "route:nav-link",
        "activeClass:nav-link-active"
    ]
})
class NavLink {
    private route: any[];
    private path: string;
    private element:Element;
    private activeClass: string = "nav-link-active";

    constructor(
        private router: Router,
        private location: Location,
        element: ElementRef
    ) {
        this.element = element.nativeElement;
    }

    private isActive(): boolean {
        const curr = this.location.path();
        // "home" path is "", others "/xxxxx"
        let ret = (curr === `/${this.path}`) || (curr === this.path);
        console.log(this.activeClass);
        if (ret) {
            this.element.classList.add(this.activeClass);
        } else {
            this.element.classList.remove(this.activeClass);
        }
        return ret;
    }

    private getPath(hash: boolean = false): string {
        if (!this.path) {
            // Can't do this in the constructor as route isn't set 'til later
            this.path = this.router.generate(this.route).toUrlPath();
        }
        if (hash) {
            return this.path ? `#/${this.path}` : "";
        } else {
            return this.path ? `/${this.path}` : "";
        }
    }

    public onClick($event: Event): void {
        $event.preventDefault(); // don't navigate to href.
        this.router.navigate(this.route);
    }
}

export default NavLink;
