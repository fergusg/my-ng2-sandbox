import {Component, ElementRef, DynamicComponentLoader} from "angular2/core";

declare var System: any; // SystemJS imported globally

export default function LoadComponentAsync(path: string, name: string = "default") {
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

class ComponentProvider {
    public path: string;
    public provide: {
        (module: any): any,
    };
}

export function componentProxyFactory(provider: ComponentProvider): any {
    @Component({
        selector: "component-proxy",
        template: `<span #content></span>`
    })
    class VirtualComponent {
        constructor(
            el: ElementRef,
            loader: DynamicComponentLoader
        ) {
            System.import(provider.path)
                .then((m: any): void => {
                    loader.loadIntoLocation(provider.provide(m), el, "content");
                });
        }
    }
    return VirtualComponent;
}
