import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromArray'; // gives us .of()

import {Component, View, provide,  Directive} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";
import {HTTP_PROVIDERS} from "angular2/http";
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig, Route, AsyncRoute} from "angular2/router";
import {LocationStrategy, HashLocationStrategy} from "angular2/router";

import LoadComponentAsync from "./component-helper";
import NavLink from "./nav-link-directive";

import Heroes from "./components/heroes/heroes-component";
import HomeComponent from "./components/home/home";
import GreetingComponent from "./components/greeting/greeting-component";
import TreeViewComponent from "./components/tree-view/tree-view-demo";
import AddressBookComponent from "./components/address-book/address-book";
import VetoComponent from "./components/veto/veto";
import SandBoxComponent from "./components/sandbox/sandbox";
import EventsComponent from "./components/events/events";
import TabsComponent from "./components/tabs/tabs";

interface IROUTE { name: string, text: string };
const ROUTES: Array<IROUTE> = [];

interface RouteDef {
    component?: any;
    path?: string,
    loadFrom?: string;
    name?: string;
    text?: string;
}

// Can't yet find a way to include this with the class
// (makeRoute is called before the ES5 "class" is instantiated)
function makeRoute(def: RouteDef) {
    if (def.component != null && def.name == null) {
        def.name = def.component.name.replace(/Component$/, "");
    }
    if (!def.name) {
        throw "Can't determine a name for the route";
    }

    def.text = def.text || def.name;
    def.path = def.path || "/" + def.name.toLowerCase();

    ROUTES.push({ name : def.name, text: def.text });

    if (def.loadFrom) {
        return new AsyncRoute({
            loader: LoadComponentAsync(def.loadFrom),
            name: def.name,
            path: def.path
        });
    } else {
        return new Route({
            component: def.component,
            name: def.name,
            path: def.path
        });
    }
}

@Component({
    selector: "index"
})
@RouteConfig([
    makeRoute({ component: HomeComponent, path: '/' }),
    makeRoute({ component: Heroes, name: "Heroes" }),
    makeRoute({ component: GreetingComponent }),
    makeRoute({ component: EventsComponent }),
    makeRoute({ component: TreeViewComponent }),
    makeRoute({ component: SandBoxComponent }),
    makeRoute({ component: AddressBookComponent }),
    makeRoute({ component: VetoComponent }),
    makeRoute({ component: GreetingComponent, name: "Unclickable" }),
    makeRoute({ component: TabsComponent}),
    makeRoute({ loadFrom: "./app/components/lazy-loaded/lazy-loaded", name: "Lazy" })
])
@View({
    template: `
        <span *ngFor="#route of routes; #idx=index" >
            <a [nav-link-enabled]="isEnabled(route.name)"
                [nav-link-active]="getLinkStyle(idx)"
                [nav-link]="[route.name]"
                [class.inactive]="!isEnabled(route.name)"
            >{{route.text}}</a>
        </span>
        <span>
            <a
                nav-link-active="nav-style-1"
                [nav-link]="['SandBox']"
            >SandBox2</a>
        </span>
        <span>
            <a
                [nav-link-enabled]="false"
                nav-link-active="nav-style-2"
                [nav-link]="['Greeting']"
            >Unclickable</a>
        </span>
        <router-outlet></router-outlet>
    `,
    styles: [`
        a { text-decoration: none; }

        .nav-link-active { cursor: pointer; }
        .inactive { color: lightgray; cursor: not-allowed; }

        .nav-style-0 { color: green; text-decoration: underline;}
        .nav-style-1 { color: red; text-decoration: underline; }
        .nav-style-2 { color: blue; text-decoration: underline; }

    `],
    directives: [ROUTER_DIRECTIVES, NavLink]
})
class Index {
    public routes = ROUTES;

    private static colours = ["nav-style-0", "nav-style-1", "nav-style-2"];
    private static nColours = Index.colours.length;

    private vetoRegex = /Unclickable/;

    constructor() {
    }

    public getLinkStyle(i: number) {
        return Index.colours[i % Index.nColours];
    }

    public isEnabled(route:string) {
        return !this.vetoRegex.test(route);
    }
}

bootstrap(Index, [HTTP_PROVIDERS, ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
