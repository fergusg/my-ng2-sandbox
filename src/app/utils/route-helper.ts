declare var System: any; // SystemJS imported globally

import {Route, AsyncRoute, RouteDefinition} from "angular2/router";

import {IComponentProvider, componentProxyFactory} from "./component-proxy-factory";

export {makeRoute, makeLazyRoute, IRoute, IRouteDef};

interface IRoute {
    name: string;
    text: string;
};

interface IRouteDef {
    component?: any;
    path?: string;
    provider?: IComponentProvider;
    name?: string;
    text?: string;
}

function makeRoute(def: IRouteDef, routes?: IRoute[]): RouteDefinition {
    "use strict";
    let name = def.name;
    if (def.component != null && name == null) {
        name = def.component.name.replace(/Component$/, "");
    }
    if (!name) {
        throw "Can't determine a name for the route";
    }

    const path = def.path || "/" + name.toLowerCase();
    if (routes) {
        const text = def.text || name;
        routes.push({ name, text });
    }

    if (def.provider) {
        const p = def.provider;
        const loader = () => System.import(p.path).then((c: any) => c[p.name || "default"]);
        return new AsyncRoute({ loader, name, path });
    } else {
        const component = def.component;
        // Don't actually need the 'new Route()' wrapper
        return new Route({ path, component, name });
    }
}

function makeLazyRoute(def: IRouteDef, routes?: IRoute[]): Route {
    "use strict";

    const name = def.name;
    const text = def.text || name;
    const path = def.path || `/${name.toLowerCase()}`;
    const component = componentProxyFactory(def.provider, "cheezy");

    if (routes) {
        routes.push({ name, text });
    }

    return new Route({ path, component, name });
}
