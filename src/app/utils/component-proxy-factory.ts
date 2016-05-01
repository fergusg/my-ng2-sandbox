/*
   AsyncRoute is probably perfectly adequate for most circumstances, though
   this approach seems more flexible for advanced use.

   from:

   http://blog.mgechev.com/2015/09/30/lazy-loading-components-routes-services-router-angular-2/

*/

declare var System: any; // SystemJS imported globally
import {Component, ElementRef, DynamicComponentLoader, Type, Injector} from "angular2/core";

/**
 * name: (optional) module export to use
 */
interface IComponentProvider {
    path: string;
    name?: string;
}

function componentProxyFactory(
        provider: IComponentProvider,
        selector: string = "component-proxy"): Type {
    "use strict";
    @Component({
        selector,
        template: `<div id="content"></div>`,
    })
    class VirtualComponent {
        constructor(loader: DynamicComponentLoader, elem: ElementRef, injector: Injector) {
            System.import(provider.path)
                .then((m: any): void => {
                    loader.loadAsRoot(m[provider.name || "default"], "#content", injector);
                });
        }
    }
    return VirtualComponent;
}

export {componentProxyFactory, IComponentProvider};
