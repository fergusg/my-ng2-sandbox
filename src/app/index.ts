import {bootstrap, Component, View, provide, CORE_DIRECTIVES, NgFor}
from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, Route,
AsyncRoute, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import LoadComponentAsync from "./component-helper";

import HeroesComponent from './components/heroes/heroes-component';
import HomeComponent from './components/home/home';
import GreetingComponent from './components/greeting/greeting-component';
import TreeViewComponent from "./components/tree-view/tree-view-demo";
import AddressBookComponent from "./components/address-book/address-book";
import SandBoxComponent from "./components/sandbox/sandbox";
import VetoComponent from "./components/veto/veto";

console.log('Loading index.js...');

function makeRoute(component: any, path: string = null) {
    const name = component.name.replace(/Component$/, '');
    return new Route(
        {
            path: path ? path : '/' + name.toLowerCase(),
            component: component,
            name: name
        }
    );
}

@Component({
    selector: 'index',
})
@RouteConfig([
    makeRoute(HomeComponent, '/'),
    makeRoute(HeroesComponent),
    makeRoute(GreetingComponent),
    makeRoute(TreeViewComponent),
    makeRoute(AddressBookComponent),
    makeRoute(SandBoxComponent),
    makeRoute(VetoComponent),
    new AsyncRoute({
        path: '/lazy',
        loader: LoadComponentAsync('./app/components/lazy-loaded/lazy-loaded'),
        name: 'Lazy'
    })
])
@View({
    template: `
        <span *ng-for="#route of routes" >
            <a [router-link]="[route]">{{route}}</a>
        </span>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES]
})
class Index {
    public routes: string[] = [
        'Home', 'Greeting', 'Heroes', 'TreeView',
        'AddressBook', 'Lazy', 'Veto', 'SandBox'
    ];

}

bootstrap(Index, [HTTP_PROVIDERS, ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })]);
