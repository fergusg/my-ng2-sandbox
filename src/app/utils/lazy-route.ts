declare var System: any; // SystemJS imported globally
import {Route} from "angular2/router";
import {componentProxyFactory} from "./component-proxy-factory";
import {IComponentProvider} from "./component-provider";

interface ILazyRoute {
    src: IComponentProvider; // Path to module
    name: string;  // Route name
    path?: string; // Route path. Defaults to "/<lowercase(name)>"
}

function lazyRoute(def: ILazyRoute): Route {
    "use strict";
    return new Route({
        path: def.path || `/${def.name.toLowerCase()}`,
        component: componentProxyFactory({
            path: def.src.path,
            name: def.src.name,
        }),
        name: def.name,
    });
}

export {lazyRoute};
