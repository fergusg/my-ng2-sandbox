declare var System: any; // SystemJS imported globally

import {Type} from "angular2/core";
import {Route, AsyncRoute} from "angular2/router";

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

function makeRoute(def: IRouteDef, routes?: IRoute[]): any {
    "use strict";
    if (def.component != null && def.name == null) {
        def.name = def.component.name.replace(/Component$/, "");
    }
    if (!def.name) {
        throw "Can't determine a name for the route";
    }

    def.text = def.text || def.name;
    def.path = def.path || "/" + def.name.toLowerCase();
    if (routes) {
        routes.push({ name: def.name, text: def.text });
    }

    if (def.provider) {
        return new AsyncRoute({
            loader: loadAsync(def.provider),
            name: def.name,
            path: def.path,
        });
    } else {
        // Don't actually need the 'new Route()' wrapper
        return new Route({
            component: def.component,
            name: def.name,
            path: def.path,
        });
    }
}

function loadAsync(provider: IComponentProvider): Type {
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

