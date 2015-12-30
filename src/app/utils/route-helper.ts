declare var System: any; // SystemJS imported globally

import {Type} from "angular2/core";
import {Route, AsyncRoute} from "angular2/router";

import {lazyRoute as makeLazyRoute} from "./lazy-route";
import {IComponentProvider} from "./component-proxy-factory";

export interface IROUTE { name: string; text: string; };
export const ROUTES: Array<IROUTE> = [];
export {makeRoute, makeLazyRoute};

interface IRouteDef {
    component?: any;
    path?: string;
    provider?: IComponentProvider;
    name?: string;
    text?: string;
}

// Can't yet find a way to include this with the class
// (makeRoute is called before the ES5 "class" is instantiated)
function makeRoute(def: IRouteDef): any {
    "use strict";
    if (def.component != null && def.name == null) {
        def.name = def.component.name.replace(/Component$/, "");
    }
    if (!def.name) {
        throw "Can't determine a name for the route";
    }

    def.text = def.text || def.name;
    def.path = def.path || "/" + def.name.toLowerCase();

    ROUTES.push({ name: def.name, text: def.text });

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

