
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/observable/of";

import {Component, provide} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {HTTP_PROVIDERS} from "@angular/http";
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {Router, RouteDefinition} from "@angular/router-deprecated";

import {makeRoute, makeLazyRoute, IRoute, IRouteDef} from "./utils/route-helper";
import NavLink from "./utils/nav-link-directive";

import {
    HomeComponent,
    HeroesComponent,
    GreetingComponent,
    TreeViewComponent,
    AddressBookComponent,
    SandBoxComponent,
    EventsComponent,
    TabsComponent,
    SimpleGraphComponent,
    VetoComponent,
} from "./components";

@Component({
    selector: "index",
    directives: [ROUTER_DIRECTIVES, NavLink],
    styles: [`
        a { text-decoration: none; }
        .nav-link-active { cursor: pointer; }
        .inactive { color: lightgray; cursor: not-allowed; }
        .nav-style-0 { color: green; text-decoration: underline;}
        .nav-style-1 { color: red; text-decoration: underline; }
        .nav-style-2 { color: blue; text-decoration: underline; }
    `,
    ],
    template: `
        <span *ngFor="let route of routes; let idx=index">
            <a [nav-link-enabled]="isEnabled(route.name)"
                [nav-link-active]="getLinkStyle(idx)"
                [nav-link]="[route.name]"
                [class.inactive]="!isEnabled(route.name)"
            >{{route.text}}</a></span>
        <a nav-link-active="nav-style-1" [nav-link]="['SandBox']">SandBox2</a>
        <a nav-link-active="nav-style-1" [nav-link]="['SandBox']"
            [nav-link-enabled]="false">Unclickable</a>
        <router-outlet></router-outlet>
    `,
})
class Index {
    private static linkStyles: string[] = ["nav-style-0", "nav-style-1", "nav-style-2"];
    private static nLinkStyles: number = Index.linkStyles.length;

    public routes: IRoute[];

    private vetoRegex: RegExp = /Unclickable/;

    // We don't use @RouteConfig so we can avoid a global ROUTES variable
    constructor(router: Router) {
        this.routes = [];

        const route: any = (def: IRouteDef): RouteDefinition => makeRoute(def, this.routes);
        const lroute: any = (def: IRouteDef): RouteDefinition => makeLazyRoute(def, this.routes);

        router.config([
            route({ component: HomeComponent, path: "/", text: "HOME" }),
            route({ component: SimpleGraphComponent }),
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
                    text: "Lazy2",
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
