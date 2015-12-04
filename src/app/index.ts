import {bootstrap, Component, View, provide, CORE_DIRECTIVES, NgFor} from "angular2/angular2";
import {HTTP_PROVIDERS} from "angular2/http";
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, Router, Route, Location, Instruction,
AsyncRoute, LocationStrategy, HashLocationStrategy} from "angular2/router";

import LoadComponentAsync from "./component-helper";

import HeroesComponent from "./components/heroes/heroes-component";
import HomeComponent from "./components/home/home";
import GreetingComponent from "./components/greeting/greeting-component";
import TreeViewComponent from "./components/tree-view/tree-view-demo";
import AddressBookComponent from "./components/address-book/address-book";
import VetoComponent from "./components/veto/veto";
import SandBoxComponent from "./components/sandbox/sandbox";

// Can't yet find a way to include this with the class
const ROUTE_NAMES: any = [];
const ROUTE_MAP: any = {};
function makeRoute(component: any, path: string = null) {
    const name:string = component.name.replace(/Component$/, "");
    path = path ? path : "/" + name.toLowerCase();

    ROUTE_NAMES.push(name);
    ROUTE_MAP[component.name] = name;
    // ES6: key-name = value-name by default
    // i.e., this is shorthand for {component:component, name:name, path:path}
    return new Route({ component, name, path });
}

@Component({
    selector: "index"
})
@RouteConfig([
    makeRoute(HomeComponent, "/"),
    makeRoute(HeroesComponent),
    makeRoute(GreetingComponent),
    makeRoute(TreeViewComponent),
    makeRoute(AddressBookComponent),
    makeRoute(SandBoxComponent),
    makeRoute(VetoComponent),
    new AsyncRoute({
        loader: LoadComponentAsync("./app/components/lazy-loaded/lazy-loaded"),
        name: "Lazy",
        path: "/Lazy",
    }),
])
@View({
    template: `
        <span *ng-for="#route of routes" >
            <a [class.active]="isRouteActive(route)" [router-link]="[route]">{{route}}</a>
        </span>
        <span>
            <a [router-link]="['Lazy']">Lazy</a>
        </span>
        <router-outlet></router-outlet>
    `,
    styles: [`
        .active {
            font-weight: bold;
        }
    `],
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES]
})
class Index {
    public routes = ROUTE_NAMES;
    private currentRoute:string = 'x';
    private currentComponentName:string = 'x';

    constructor(private location: Location, private router: Router) {
        this.router.subscribe((value:any) => {
            this.router.recognize(value).then(
                (instr:Instruction) => {
                    let cmp = instr.component;
                    let cmpName = cmp.componentType.name;
                    let path = cmp.urlPath;
                    console.log('Route', value, path, instr, cmp);
                    this.currentRoute = path;
                    this.currentComponentName = cmpName;
                }
            );
        });
    }

    public isRouteActive(path:string): boolean {
        return path === this.currentComponentName.replace(/Component$/, "");
    }

}

bootstrap(Index, [HTTP_PROVIDERS, ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
