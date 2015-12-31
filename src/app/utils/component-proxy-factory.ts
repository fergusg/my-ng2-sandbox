/*
   AsyncRoute is probably perfectly adequate for most circumstances, though
   this approach seems more flexible for advanced use.

   from:

   http://blog.mgechev.com/2015/09/30/lazy-loading-components-routes-services-router-angular-2/

*/

declare var System: any; // SystemJS imported globally
import {Component, ElementRef, DynamicComponentLoader, Type} from "angular2/core";

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
        template: `<div #content></div>`,
    })
    class VirtualComponent {
        constructor(loader: DynamicComponentLoader, elem: ElementRef) {
            System.import(provider.path)
                .then((m: any): void => {
                    loader.loadIntoLocation(m[provider.name || "default"], elem, "content");
                });
        }
    }
    return VirtualComponent;
}

export {componentProxyFactory, IComponentProvider};
