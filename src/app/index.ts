import {bootstrap, Component, View, provide, CORE_DIRECTIVES, NgFor}
    from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, Route,
    AsyncRoute, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import LoadComponentAsync from "./component-helper";

import HeroesComponent from './components/heroes/heroes-component';
import HomeComponent from './components/home/home';
import GreetingComponent from './components/greeting/greeting-component';
import TreeViewDemoComponent from "./components/tree-view/tree-view-demo";
import AddressBookComponent from "./components/address-book/address-book";
import SandBoxComponent from "./components/sandbox/sandbox";
import VetoComponent from "./components/veto/veto";

console.log('Loading index.js...');

@Component ({
    selector: 'index',
})
@RouteConfig([
    new Route({
        path : '/heroes',
        component: HeroesComponent,
        name: 'Heroes'
    }),
    new Route({
        path: '/',
        component: HomeComponent,
        name: 'Home'
    }),
    new Route({
        path: '/greeting',
        component: GreetingComponent,
        name: 'Greeting'
    }),
    new Route({
        path: '/treeview',
        component: TreeViewDemoComponent,
        name: 'TreeView'
    }),
    new Route({
        path: '/addressbook',
        component: AddressBookComponent,
        name: 'AddressBook'
    }),
    new Route({
        path: '/sandbox',
        component: SandBoxComponent,
        name: 'SandBox'
    }),
    new Route({
        path: '/veto',
        component: VetoComponent,
        name: 'Veto'
    }),
    new AsyncRoute({
        path: '/lazy',
        loader: LoadComponentAsync('LazyLoaded', './app/components/lazy-loaded/lazy-loaded'),
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
    public routes:string[] = [
        'Home', 'Greeting', 'Heroes', 'TreeView',
        'AddressBook', 'Lazy', 'Veto', 'SandBox'
    ];
}

bootstrap(Index, [HTTP_PROVIDERS, ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})]);
