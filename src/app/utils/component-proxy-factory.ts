// http://blog.mgechev.com/2015/09/30/lazy-loading-components-routes-services-router-angular-2/

declare var System: any; // SystemJS imported globally
import {Component, ElementRef, DynamicComponentLoader, Type} from "angular2/core";

import {IComponentProvider} from "./component-provider";

function componentProxyFactory(provider: IComponentProvider): Type {
    "use strict";
    @Component({
        selector: "component-proxy",
        template: `<div #content></div>`,
    })
    class VirtualComponent {
        constructor(loader: DynamicComponentLoader, elem: ElementRef) {
            const name = provider.name || "default";
            const provide = this.defaultProvide.bind(this, name);
            System.import(provider.path)
                .then((m: any): void => {
                    loader.loadIntoLocation(provide(m), elem, "content");
                });
        }

        private defaultProvide(name: string, m: any): Type {
            return m[name];
        }
    }
    return VirtualComponent;
}

export {componentProxyFactory};
