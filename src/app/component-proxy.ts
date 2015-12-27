declare var System: any; // SystemJS imported globally
import {Route} from "angular2/router";
import {componentProxyFactory} from "./component-proxy-factory";

interface IProxyRoute {
    src: string; // Path to module
    name: string;  // Route name
    path?: string; // Route path. Defaults to "/<lowercase(name)>"
    component? : string; // Which module export to use (defaults to "default")
}

function proxyRoute(def: IProxyRoute): Route {
    "use strict";
    return new Route({
        path: def.path || `/${def.name.toLowerCase()}`,
        component: componentProxyFactory({
            path: def.src,
            name: def.component,
        }),
        name: def.name,
    });
}

export {proxyRoute};
