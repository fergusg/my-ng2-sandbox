import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/observable/fromArray"; // gives us .of()

import {Component, View, provide} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";
import {HTTP_PROVIDERS} from "angular2/http";
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {LocationStrategy, HashLocationStrategy} from "angular2/router";

import {makeRoute, makeLazyRoute, IROUTE, ROUTES} from "./utils/route-helper";
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

@Component({
    selector: "index"
})
@RouteConfig([
    makeRoute({ component: HomeComponent, path: "/" }),
    makeRoute({ component: HeroesComponent, name: "Heroes" }),
    makeRoute({ component: GreetingComponent }),
    makeRoute({ component: EventsComponent }),
    makeRoute({ component: TreeViewComponent }),
    makeRoute({ component: AddressBookComponent }),
    makeRoute({ component: VetoComponent }),
    makeRoute({ component: GreetingComponent, name: "Unclickable" }),
    makeRoute({ component: TabsComponent }),
    makeRoute({ loadFrom: "./app/components/lazy-loaded/lazy-loaded", name: "Lazy" }),
    makeLazyRoute({ name: "About", src: "./app/components/lazy-loaded/lazy-loaded" }),
    makeRoute({ component: SandBoxComponent }),
])
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
        <a nav-link-active="nav-style-1" [nav-link]="['About']">About</a>
        <a nav-link-active="nav-style-1" [nav-link]="['SandBox']">SandBox2</a>
        <a nav-link-active="nav-style-1" [nav-link]="['SandBox']"
            [nav-link-enabled]="false">Sandbox(Unclickable)</a>
        <router-outlet></router-outlet>
    `,
})
class Index {
    private static colours: string[] = ["nav-style-0", "nav-style-1", "nav-style-2"];
    private static nColours: number = Index.colours.length;

    public routes: IROUTE[] = ROUTES;

    private vetoRegex: any = /Unclickable/;

    public getLinkStyle(i: number): string {
        return Index.colours[i % Index.nColours];
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
