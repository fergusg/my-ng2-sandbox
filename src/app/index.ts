import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/observable/fromArray"; // gives us .of()

import {Component, View, provide} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";
import {HTTP_PROVIDERS} from "angular2/http";
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from "angular2/router";
import {Router, RouteDefinition, LocationStrategy, HashLocationStrategy} from "angular2/router";

import {makeRoute, makeLazyRoute, IRoute, IRouteDef} from "./utils/route-helper";
import NavLink from "./utils/nav-link-directive";

import HeroesComponent from "./components/heroes/heroes-component";
import HomeComponent from "./components/home/home";
import GreetingComponent from "./components/greeting/greeting-component";
import TreeViewComponent from "./components/tree-view/tree-view";
import AddressBookComponent from "./components/address-book/address-book";
import VetoComponent from "./components/veto/veto";
import SandBoxComponent from "./components/sandbox/sandbox";
import EventsComponent from "./components/events/events";
import TabsComponent from "./components/tabs/tabs";
import ImmutableComponent from "./components/immutable/immutable";

@Component({
    selector: "index"
})
@View({
    directives: [ROUTER_DIRECTIVES, NavLink],
    styles: [`
        a { text-decoration: none; }
        .nav-link-active { cursor: pointer; }
        .inactive { color: lightgray; cursor: not-allowed; }
        .nav-style-0 { color: green; text-decoration: underline;}
        .nav-style-1 { color: red; text-decoration: underline; }
        .nav-style-2 { color: blue; text-decoration: underline; }
    `, ],
    template: `
        <span *ngFor="#route of routes; #idx=index">
            <a [nav-link-enabled]="isEnabled(route.name)"
                [nav-link-active]="getLinkStyle(idx)"
                [nav-link]="[route.name]"
                [class.inactive]="!isEnabled(route.name)"
            >{{route.text}}</a></span>
        <a nav-link-active="nav-style-1" [nav-link]="['SandBox']">SandBox2</a>
        <a nav-link-active="nav-style-1" [nav-link]="['SandBox']"
            [nav-link-enabled]="false">Sandbox(Unclickable)</a>
        <router-outlet></router-outlet>
    `,
})
class Index {
    private static linkStyles: string[] = ["nav-style-0", "nav-style-1", "nav-style-2"];
    private static nLinkStyles: number = Index.linkStyles.length;

    public routes: IRoute[];

    private vetoRegex: any = /Unclickable/;

    // We don't use @RouteConfig so we can avoid a global ROUTES variable
    constructor(router: Router) {
        this.routes = [];

        const route = (def: IRouteDef): RouteDefinition => makeRoute(def, this.routes);
        const lroute = (def: IRouteDef): RouteDefinition => makeLazyRoute(def, this.routes);

        router.config([
            route({ component: HomeComponent, path: "/", text: "HOME" }),
            route({ component: ImmutableComponent }),
            route({ component: HeroesComponent, name: "Heroes" }),
            route({ component: GreetingComponent }),
            route({ component: EventsComponent }),
            route({ component: TreeViewComponent }),
            route({ component: AddressBookComponent }),
            route({ component: VetoComponent }),
            route({ component: GreetingComponent, name: "Unclickable" }),
            route({ component: TabsComponent }),
            route({ component: SandBoxComponent }),
            route(
                {
                    name: "Lazy",
                    provider: {
                        path: "./app/components/lazy-loaded/lazy-loaded"
                    },
                }
            ),
            lroute(
                {
                    name: "About",
                    text: "Abooot",
                    provider: {
                        path: "./app/components/lazy-loaded/lazy-loaded"
                    },
                }
            ),
        ]);
    }

    public getLinkStyle(i: number): string {
        return Index.linkStyles[i % Index.nLinkStyles];
    }

    public isEnabled(route: string): boolean {
        return !this.vetoRegex.test(route);
    }
}

bootstrap(Index, [
    ...HTTP_PROVIDERS,
    ...ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
]);
