import {Component, View, Directive} from "angular2/core";
import {Router} from "angular2/router";

@Directive({
    // This is a CSS selector.  It"s confusing that the template syntax ALSO uses []
    selector: "[veto-router-link]",
    host: {
        "(click)": "onClick($event)",
        "[attr.href]": "getLink()",
    },
    // aaa:bbb means "make this.aaa = attr.bbb"
    // Note 1: if both use the same name, then can use just "aaa"
    // Note 2: can use either "veto-if" or camelCase "vetoIf"
    inputs: [
        "veto:veto-if",
        "route:veto-router-link",
    ],
})
class Veto {
    private route: any[];
    private veto: boolean;
    private router: Router;

    constructor(router: Router) {
        this.router = router;
    }

    protected getLink(): string {
        // <a>"s only normally render as expected with an explicit href,
        // so try to generate somthing better than href="#".
        // The actual href is ignored via event.preventDefault()
        if (typeof this.veto === "undefined") {
            throw "veto-router-link needs a veto-if condition";
        }
        let instruction = this.router.generate(this.route);
        // I don"t know how to generate a proper URL reliably. There"s a
        // stringifyInstruction() but that"s hidden.
        return `#/${instruction.component.urlPath}`;
    }

    // "onClick" is NOT a magic name - the click event is mapped to a function
    // via the "host" defintion above
    protected onClick($event: Event): void {
        $event.preventDefault(); // don"t navigate to href.
        if (!this.veto) {
            this.router.navigate(this.route);
        } else {
            console.log("route vetoed");
        }
    }
}

@Component({
    selector: "home"
})
@View({
    directives: [Veto],
    template: `
    <h1>Veto clicks</h1>
    <a [veto-router-link]="heroesLink" [veto-if]="true">Can't click me</a>
    <a [veto-router-link]="heroesLink" [veto-if]="false">Heroes</a>
    `,
})
class VetoComponent {
    protected heroesLink: string[] = ["/Heroes"];
}

export default VetoComponent;
