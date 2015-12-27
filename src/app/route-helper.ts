import {Type} from "angular2/core";

import {Route, AsyncRoute} from "angular2/router";

declare var System: any; // SystemJS imported globally

export interface IROUTE { name: string; text: string; };
export const ROUTES: Array<IROUTE> = [];

interface IRouteDef {
    component?: any;
    path?: string;
    loadFrom?: string;
    name?: string;
    text?: string;
}


export function LoadComponentAsync(path: string, name: string = "default"): Type {
    "use strict";
    // System.import returns an object with keys = exported object (class, etc)
    // "default" returns the default object
    return () => System.import(path).then((c: any) => c[name]);
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



// Can't yet find a way to include this with the class
// (makeRoute is called before the ES5 "class" is instantiated)
export function makeRoute(def: IRouteDef): any {
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

    if (def.loadFrom) {
        return new AsyncRoute({
            loader: LoadComponentAsync(def.loadFrom),
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
