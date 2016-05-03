import {Component, Directive, Input, OnInit} from "@angular/core";
import {Router} from "@angular/router-deprecated";
import {LocationStrategy} from "@angular/common";

declare var module: any;

@Directive({
    // This is a CSS selector.  It"s confusing that the template syntax ALSO uses []
    selector: "[veto-router-link]",
    host: {
        "(click)": "onClick($event)",
        "[attr.href]": "link",
    },
})
class Veto implements OnInit {
    protected link: string;
    @Input("veto-router-link") private route: any[];
    @Input("veto-if") private veto: boolean;

    constructor(private router: Router, private locationStrategy: LocationStrategy) {
    }

    public ngOnInit(): void {
        // <a>"s only normally render as expected with an explicit href,
        // so try to generate somthing better than href="#".

        // The actual href is ignored via event.preventDefault()

        if (typeof this.veto === "undefined") {
            throw "veto-router-link needs a veto-if condition";
        }
        let instruction = this.router.generate(this.route);
        this.link = this.locationStrategy.prepareExternalUrl(instruction.toUrlPath());
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
    selector: "home",
    directives: [Veto],
    moduleId: module.id,
    templateUrl: "./veto.html",
})
class VetoComponent {
    protected vetoClick = true;
    protected toggle(): void {
        this.vetoClick = !this.vetoClick;
    }
}

export {VetoComponent};
