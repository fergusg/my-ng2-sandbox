import {Component, ElementRef, DynamicComponentLoader, Type} from "angular2/core";

declare var System: any; // SystemJS imported globally

export default function LoadComponentAsync(path: string, name: string = "default"): Type {
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

// http://blog.mgechev.com/2015/09/30/lazy-loading-components-routes-services-router-angular-2/

interface IComponentProvider {
    path: string;
    provide: {
        (module: any): Type,
    };
}

export function componentProxyFactory(provider: IComponentProvider): Type {
    @Component({
        selector: "component-proxy",
        template: `<div #content></div>`,
    })
    class VirtualComponent {
        constructor(
            loader: DynamicComponentLoader,
            el: ElementRef
        ) {
            System.import(provider.path)
                .then((m: Type): void => {
                    loader.loadIntoLocation(provider.provide(m), el, "content");
                });
        }
    }
    return VirtualComponent;
}
