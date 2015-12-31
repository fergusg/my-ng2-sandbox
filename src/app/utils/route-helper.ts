declare var System: any; // SystemJS imported globally

import {Type} from "angular2/core";
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
    let path = def.path;
    let name = def.name;
    if (def.component != null && name == null) {
        name = def.component.name.replace(/Component$/, "");
    }
    if (!name) {
        throw "Can't determine a name for the route";
    }

    path = path || "/" + name.toLowerCase();
    if (routes) {
        routes.push({ name, text: def.text || name });
    }

    if (def.provider) {
        return new AsyncRoute({
            loader: _loadAsync(def.provider),
            name: name,
            path: path,
        });
    } else {
        // Don't actually need the 'new Route()' wrapper
        return new Route({
            component: def.component,
            name,
            path,
        });
    }
}

function makeLazyRoute(def: IRouteDef, routes?: IRoute[]): Route {
    "use strict";

    if (routes) {
        routes.push({ name: def.name, text: def.text || def.name });
    }

    return new Route({
        path: def.path || `/${def.name.toLowerCase()}`,
        component: componentProxyFactory(def.provider, "cheezy"),
        name: def.name,
    });
}

function _loadAsync(provider: IComponentProvider): Type {
    "use strict";
    // System.import returns an object with keys = exported object (class, etc)
    // "default" returns the default object
    return () => System.import(provider.path).then((c: any) => c[provider.name || "default"]);
    /*
        return () => {
            let promise = System.import(path).then(
                (c: any) => {
                    return c[name]
                }
            );
            return promise;
        };
    */
}
