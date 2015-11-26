import {bootstrap, Component, View, provide} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, Route, AsyncRoute, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import HeroesComponent from './components/heroes/heroes-component';
import Home from './components/home/home';
import GreetingComponent from './components/greeting/greeting-component';
import TreeViewDemo from "./components/tree-view/tree-view-demo";
import LoadComponentAsync from "./component-helper";
import AddressBook from "./components/address-book/address-book";

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
        component: Home,
        name: 'Home'
    }),
    new Route({
        path: '/greeting',
        component: GreetingComponent,
        name: 'Greeting'
    }),
    new Route({
        path: '/treeview',
        component: TreeViewDemo,
        name: 'TreeView'
    }),
    new Route({
        path: '/addressbook',
        component: AddressBook,
        name: 'AddressBook'
    }),
    new AsyncRoute({
        path: '/lazy',
        loader: LoadComponentAsync('LazyLoaded', './app/components/lazy-loaded/lazy-loaded'),
        name: 'Lazy'
    })
])
@View({
    template: `
        <a [router-link]="['/Home']">Home</a>
        <a [router-link]="['/Greeting']">Greeting</a>
        <a [router-link]="['/Heroes']">Heroes</a>
        <a [router-link]="['/TreeView']">Tree</a>
        <a [router-link]="['/AddressBook']">AddressBook</a>
        <a [router-link]="['/Lazy']">Lazy</a>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
class Index {
}

bootstrap(Index, [HTTP_PROVIDERS, ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})]);
