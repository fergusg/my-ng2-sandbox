// import "reflect-metadata";
// import "zone.js";

import {bootstrap, Component, View, provide, CORE_DIRECTIVES, NgFor, Directive} from "angular2/angular2";
import {HTTP_PROVIDERS} from "angular2/http";
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, Router, Route, Location, Instruction,
AsyncRoute, LocationStrategy, HashLocationStrategy} from "angular2/router";

import LoadComponentAsync from "./component-helper";
import NavLink from "./nav-link-directive";

import HeroesBlahBlah from "./components/heroes/heroes-component";
import HomeComponent from "./components/home/home";
import GreetingComponent from "./components/greeting/greeting-component";
import TreeViewComponent from "./components/tree-view/tree-view-demo";
import AddressBookComponent from "./components/address-book/address-book";
import VetoComponent from "./components/veto/veto";
import SandBoxComponent from "./components/sandbox/sandbox";

// Can't yet find a way to include this with the class
// (makeRoute is called before the class is instantiated)
interface IROUTE { name: string, text: string };
const ROUTES: Array<IROUTE> = [];
function makeRoute({
    component = <any>null,
    path = <string>null,
    loadFrom = <string>null,
    name = <string>null,
    text = <string>null,
}) {
    if (component != null && name == null) {
        name = component.name.replace(/Component$/, "");
    }
    if (name) {
        text = text == null ? name : text;
        ROUTES.push({ name, text });
    } else {
        throw "Can't determine a name for the route";
    }

    path = path ? path : "/" + name.toLowerCase();

    if (loadFrom != null) {
        let loader = LoadComponentAsync(loadFrom);
        return new AsyncRoute({ loader, name, path });
    } else {
        return new Route({ component, name, path });
    }
}

@Component({
    selector: "index"
})
@RouteConfig([
    makeRoute({ component: HomeComponent, path: '/' }),
    makeRoute({ component: HeroesBlahBlah }),
    makeRoute({ component: GreetingComponent }),
    makeRoute({ component: TreeViewComponent }),
    makeRoute({ component: SandBoxComponent }),
    makeRoute({ component: AddressBookComponent }),
    makeRoute({ component: VetoComponent }),
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
        <span >
            <a nav-link-active="nav-style-1" [nav-link]="['SandBox']" >SandBox2</a>
        </span>
        <router-outlet></router-outlet>
    `,
    styles: [`
        a {
            text-decoration: none;
        }

        .nav-link-active {
            cursor: pointer;
        }

        .nav-style-0 {
            color: green;
        }
        .nav-style-1 {
            color: red;
            text-decoration: underline;
        }
        .nav-style-2 {
            color: blue;
        }

        .inactive {
            color: lightgray;
            cursor: not-allowed;
        }
    `],
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, NavLink]
})
class Index {
    public routes = ROUTES;

    private static colours = ["nav-style-0", "nav-style-1", "nav-style-2"];
    private static nColours = Index.colours.length;

    public getLinkStyle(i: number) {
        return Index.colours[i % Index.nColours];
    }

    public isEnabled(route:string) {
        return !/Veto/.test(route);
    }
}

bootstrap(Index, [HTTP_PROVIDERS, ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
