import {Directive} from "angular2/angular2";
import {Router, Location} from "angular2/router";

@Directive({
    selector: "[nav-link]",
    host: {
        "(click)": "onClick($event)",
        "[attr.href]": "getPath(true)",
        "[class.active]": "isActive()"
    },
    inputs: [
        "route:nav-link"
    ]
})
class NavLink {
    private route: any[];
    private path: string;

    constructor(public router: Router, public location: Location) {
    }

    private isActive():boolean {
        const curr = this.location.path();
        // "home" path is "", others "/xxxxx"
        return (curr === `/${this.path}`) || (curr === this.path);
    }

    private getPath(hash: boolean = false):string {
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

    public onClick($event: Event):void {
        $event.preventDefault(); // don't navigate to href.
        this.router.navigate(this.route);
    }
}

export default NavLink;
