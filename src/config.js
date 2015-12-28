System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    "module": "commonjs",
    "emitDecoratorMetadata": true
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  meta: {
    "angular2/angular2": {
      "deps": [
        "reflect-metadata",
        "zone.js",
        "es6-shim",
        "rxjs"
      ]
    }
  },

  depCache: {
    "app/index.js": [
      "npm:reflect-metadata@0.1.2",
      "npm:zone.js@0.5.10",
      "npm:angular2@2.0.0-alpha.52/angular2",
      "npm:angular2@2.0.0-alpha.52/http",
      "npm:angular2@2.0.0-alpha.52/router",
      "app/component-helper.js",
      "app/nav-link-directive.js",
      "app/components/heroes/heroes-component.js",
      "app/components/home/home.js",
      "app/components/greeting/greeting-component.js",
      "app/components/tree-view/tree-view-demo.js",
      "app/components/address-book/address-book.js",
      "app/components/veto/veto.js",
      "app/components/sandbox/sandbox.js"
    ],
    "npm:reflect-metadata@0.1.2": [
      "npm:reflect-metadata@0.1.2/Reflect"
    ],
    "npm:es6-shim@0.33.13": [
      "npm:es6-shim@0.33.13/es6-shim"
    ],
    "app/components/heroes/heroes-component.js": [
      "npm:angular2@2.0.0-alpha.52/angular2",
      "npm:angular2@2.0.0-alpha.52/http",
      "app/components/heroes/arse-pipe.js",
      "npm:rxjs@5.0.0-alpha.14/add/operator/map"
    ],
    "npm:zone.js@0.5.10": [
      "npm:zone.js@0.5.10/lib/zone"
    ],
    "app/nav-link-directive.js": [
      "npm:angular2@2.0.0-alpha.52/angular2",
      "npm:angular2@2.0.0-alpha.52/router"
    ],
    "app/components/home/home.js": [
      "npm:angular2@2.0.0-alpha.52/angular2"
    ],
    "app/components/greeting/greeting-component.js": [
      "npm:angular2@2.0.0-alpha.52/angular2",
      "app/components/greeting/greeting.js"
    ],
    "app/components/tree-view/tree-view-demo.js": [
      "npm:angular2@2.0.0-alpha.52/angular2",
      "app/components/tree-view/tree-view.js",
      "app/components/tree-view/directory.js"
    ],
    "app/components/address-book/address-book.js": [
      "npm:angular2@2.0.0-alpha.52/angular2",
      "app/components/address-book/address-book-service.js",
      "app/components/address-book/address-book-title-service.js"
    ],
    "app/components/veto/veto.js": [
      "npm:angular2@2.0.0-alpha.52/angular2",
      "npm:angular2@2.0.0-alpha.52/router"
    ],
    "app/components/sandbox/sandbox.js": [
      "npm:angular2@2.0.0-alpha.52/angular2"
    ],
    "npm:angular2@2.0.0-alpha.52/angular2": [
      "npm:angular2@2.0.0-alpha.52/common",
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/instrumentation",
      "npm:angular2@2.0.0-alpha.52/platform/browser",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/dom_adapter",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/events/event_manager",
      "npm:angular2@2.0.0-alpha.52/upgrade",
      "npm:angular2@2.0.0-alpha.52/compiler",
      "npm:reflect-metadata@0.1.2",
      "npm:zone.js@0.5.8",
      "npm:es6-shim@0.33.13",
      "npm:rxjs@5.0.0-alpha.14"
    ],
    "npm:angular2@2.0.0-alpha.52/http": [
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/http/http",
      "npm:angular2@2.0.0-alpha.52/src/http/backends/xhr_backend",
      "npm:angular2@2.0.0-alpha.52/src/http/backends/jsonp_backend",
      "npm:angular2@2.0.0-alpha.52/src/http/backends/browser_xhr",
      "npm:angular2@2.0.0-alpha.52/src/http/backends/browser_jsonp",
      "npm:angular2@2.0.0-alpha.52/src/http/base_request_options",
      "npm:angular2@2.0.0-alpha.52/src/http/base_response_options",
      "npm:angular2@2.0.0-alpha.52/src/http/static_request",
      "npm:angular2@2.0.0-alpha.52/src/http/static_response",
      "npm:angular2@2.0.0-alpha.52/src/http/interfaces",
      "npm:angular2@2.0.0-alpha.52/src/http/headers",
      "npm:angular2@2.0.0-alpha.52/src/http/enums",
      "npm:angular2@2.0.0-alpha.52/src/http/url_search_params"
    ],
    "npm:angular2@2.0.0-alpha.52/router": [
      "npm:angular2@2.0.0-alpha.52/src/router/router",
      "npm:angular2@2.0.0-alpha.52/src/router/router_outlet",
      "npm:angular2@2.0.0-alpha.52/src/router/router_link",
      "npm:angular2@2.0.0-alpha.52/src/router/instruction",
      "npm:angular2@2.0.0-alpha.52/src/router/platform_location",
      "npm:angular2@2.0.0-alpha.52/src/router/route_registry",
      "npm:angular2@2.0.0-alpha.52/src/router/location_strategy",
      "npm:angular2@2.0.0-alpha.52/src/router/hash_location_strategy",
      "npm:angular2@2.0.0-alpha.52/src/router/path_location_strategy",
      "npm:angular2@2.0.0-alpha.52/src/router/location",
      "npm:angular2@2.0.0-alpha.52/src/router/route_config_decorator",
      "npm:angular2@2.0.0-alpha.52/src/router/route_definition",
      "npm:angular2@2.0.0-alpha.52/src/router/lifecycle_annotations",
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions"
    ],
    "npm:zone.js@0.5.10/lib/zone": [
      "npm:zone.js@0.5.10/lib/core",
      "npm:zone.js@0.5.10/lib/patch/browser"
    ],
    "app/components/greeting/greeting.js": [
      "npm:angular2@2.0.0-alpha.52/angular2"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/map": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/map"
    ],
    "app/components/heroes/arse-pipe.js": [
      "npm:angular2@2.0.0-alpha.52/angular2"
    ],
    "app/components/tree-view/tree-view.js": [
      "npm:angular2@2.0.0-alpha.52/angular2"
    ],
    "app/components/address-book/address-book-service.js": [
      "npm:angular2@2.0.0-alpha.52/http",
      "npm:angular2@2.0.0-alpha.52/angular2"
    ],
    "npm:reflect-metadata@0.1.2/Reflect": [
      "github:jspm/nodelibs-crypto@0.1.0"
    ],
    "npm:es6-shim@0.33.13/es6-shim": [
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:angular2@2.0.0-alpha.52/common": [
      "npm:angular2@2.0.0-alpha.52/src/common/pipes",
      "npm:angular2@2.0.0-alpha.52/src/common/directives",
      "npm:angular2@2.0.0-alpha.52/src/common/forms",
      "npm:angular2@2.0.0-alpha.52/src/common/common_directives"
    ],
    "npm:angular2@2.0.0-alpha.52/platform/browser": [
      "npm:angular2@2.0.0-alpha.52/src/core/angular_entrypoint",
      "npm:angular2@2.0.0-alpha.52/src/platform/browser_common",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/compiler",
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/core/reflection/reflection_capabilities",
      "npm:angular2@2.0.0-alpha.52/src/platform/browser/xhr_impl",
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:angular2@2.0.0-alpha.52/core": [
      "npm:angular2@2.0.0-alpha.52/src/core/metadata",
      "npm:angular2@2.0.0-alpha.52/src/core/util",
      "npm:angular2@2.0.0-alpha.52/src/core/dev_mode",
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/facade/facade",
      "npm:angular2@2.0.0-alpha.52/src/core/application_ref",
      "npm:angular2@2.0.0-alpha.52/src/core/application_tokens",
      "npm:angular2@2.0.0-alpha.52/src/core/zone",
      "npm:angular2@2.0.0-alpha.52/src/core/render",
      "npm:angular2@2.0.0-alpha.52/src/core/linker",
      "npm:angular2@2.0.0-alpha.52/src/core/debug/debug_element",
      "npm:angular2@2.0.0-alpha.52/src/core/testability/testability",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection",
      "npm:angular2@2.0.0-alpha.52/src/core/platform_directives_and_pipes",
      "npm:angular2@2.0.0-alpha.52/src/core/platform_common_providers",
      "npm:angular2@2.0.0-alpha.52/src/core/application_common_providers",
      "npm:angular2@2.0.0-alpha.52/src/core/reflection/reflection"
    ],
    "npm:angular2@2.0.0-alpha.52/src/platform/dom/dom_adapter": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/instrumentation": [
      "npm:angular2@2.0.0-alpha.52/src/core/profile/profile"
    ],
    "npm:angular2@2.0.0-alpha.52/upgrade": [
      "npm:angular2@2.0.0-alpha.52/src/upgrade/upgrade_adapter"
    ],
    "npm:angular2@2.0.0-alpha.52/src/platform/dom/events/event_manager": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/core/zone/ng_zone",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection"
    ],
    "npm:angular2@2.0.0-alpha.52/compiler": [
      "npm:angular2@2.0.0-alpha.52/src/compiler/url_resolver",
      "npm:angular2@2.0.0-alpha.52/src/compiler/xhr",
      "npm:angular2@2.0.0-alpha.52/src/compiler/compiler",
      "npm:angular2@2.0.0-alpha.52/src/compiler/app_root_url"
    ],
    "npm:angular2@2.0.0-alpha.52/src/http/http": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/http/interfaces",
      "npm:angular2@2.0.0-alpha.52/src/http/static_request",
      "npm:angular2@2.0.0-alpha.52/src/http/base_request_options",
      "npm:angular2@2.0.0-alpha.52/src/http/enums"
    ],
    "npm:angular2@2.0.0-alpha.52/src/http/backends/xhr_backend": [
      "npm:angular2@2.0.0-alpha.52/src/http/enums",
      "npm:angular2@2.0.0-alpha.52/src/http/static_response",
      "npm:angular2@2.0.0-alpha.52/src/http/headers",
      "npm:angular2@2.0.0-alpha.52/src/http/base_response_options",
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/http/backends/browser_xhr",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/http/http_utils"
    ],
    "npm:angular2@2.0.0-alpha.52/src/http/backends/browser_jsonp": [
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/http/base_request_options": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/http/headers",
      "npm:angular2@2.0.0-alpha.52/src/http/enums",
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/http/url_search_params",
      "npm:angular2@2.0.0-alpha.52/src/http/http_utils"
    ],
    "npm:angular2@2.0.0-alpha.52/src/http/base_response_options": [
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/http/headers",
      "npm:angular2@2.0.0-alpha.52/src/http/enums"
    ],
    "npm:angular2@2.0.0-alpha.52/src/http/static_request": [
      "npm:angular2@2.0.0-alpha.52/src/http/headers",
      "npm:angular2@2.0.0-alpha.52/src/http/http_utils",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/http/backends/jsonp_backend": [
      "npm:angular2@2.0.0-alpha.52/src/http/interfaces",
      "npm:angular2@2.0.0-alpha.52/src/http/enums",
      "npm:angular2@2.0.0-alpha.52/src/http/static_response",
      "npm:angular2@2.0.0-alpha.52/src/http/base_response_options",
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/http/backends/browser_jsonp",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/http/backends/browser_xhr": [
      "npm:angular2@2.0.0-alpha.52/core"
    ],
    "npm:angular2@2.0.0-alpha.52/src/http/static_response": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/http/http_utils"
    ],
    "npm:angular2@2.0.0-alpha.52/src/http/headers": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection"
    ],
    "npm:angular2@2.0.0-alpha.52/src/router/router_outlet": [
      "npm:angular2@2.0.0-alpha.52/src/facade/async",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/router/router",
      "npm:angular2@2.0.0-alpha.52/src/router/instruction",
      "npm:angular2@2.0.0-alpha.52/src/router/lifecycle_annotations",
      "npm:angular2@2.0.0-alpha.52/src/router/route_lifecycle_reflector"
    ],
    "npm:angular2@2.0.0-alpha.52/src/router/router": [
      "npm:angular2@2.0.0-alpha.52/src/facade/async",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/router/route_registry",
      "npm:angular2@2.0.0-alpha.52/src/router/location",
      "npm:angular2@2.0.0-alpha.52/src/router/route_lifecycle_reflector"
    ],
    "npm:angular2@2.0.0-alpha.52/src/http/url_search_params": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection"
    ],
    "npm:angular2@2.0.0-alpha.52/src/router/router_link": [
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/router/router",
      "npm:angular2@2.0.0-alpha.52/src/router/location"
    ],
    "npm:angular2@2.0.0-alpha.52/src/router/platform_location": [
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/dom_adapter",
      "npm:angular2@2.0.0-alpha.52/core"
    ],
    "npm:angular2@2.0.0-alpha.52/src/router/route_registry": [
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/facade/async",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/core/reflection/reflection",
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/router/route_config_impl",
      "npm:angular2@2.0.0-alpha.52/src/router/route_recognizer",
      "npm:angular2@2.0.0-alpha.52/src/router/component_recognizer",
      "npm:angular2@2.0.0-alpha.52/src/router/instruction",
      "npm:angular2@2.0.0-alpha.52/src/router/route_config_nomalizer",
      "npm:angular2@2.0.0-alpha.52/src/router/url_parser"
    ],
    "npm:angular2@2.0.0-alpha.52/src/router/hash_location_strategy": [
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/router/location_strategy",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/router/platform_location"
    ],
    "npm:angular2@2.0.0-alpha.52/src/router/instruction": [
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/async"
    ],
    "npm:angular2@2.0.0-alpha.52/src/router/location_strategy": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/core"
    ],
    "npm:angular2@2.0.0-alpha.52/src/router/path_location_strategy": [
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/router/location_strategy",
      "npm:angular2@2.0.0-alpha.52/src/router/platform_location"
    ],
    "npm:angular2@2.0.0-alpha.52/src/router/location": [
      "npm:angular2@2.0.0-alpha.52/src/router/location_strategy",
      "npm:angular2@2.0.0-alpha.52/src/facade/async",
      "npm:angular2@2.0.0-alpha.52/core"
    ],
    "npm:angular2@2.0.0-alpha.52/src/router/route_config_decorator": [
      "npm:angular2@2.0.0-alpha.52/src/router/route_config_impl",
      "npm:angular2@2.0.0-alpha.52/src/core/util/decorators"
    ],
    "npm:angular2@2.0.0-alpha.52/src/router/lifecycle_annotations": [
      "npm:angular2@2.0.0-alpha.52/src/core/util/decorators",
      "npm:angular2@2.0.0-alpha.52/src/router/lifecycle_annotations_impl"
    ],
    "npm:angular2@2.0.0-alpha.52/src/facade/exceptions": [
      "npm:angular2@2.0.0-alpha.52/src/facade/exception_handler"
    ],
    "npm:zone.js@0.5.10/lib/patch/browser": [
      "npm:zone.js@0.5.10/lib/patch/functions",
      "npm:zone.js@0.5.10/lib/patch/promise",
      "npm:zone.js@0.5.10/lib/patch/mutation-observer",
      "npm:zone.js@0.5.10/lib/patch/define-property",
      "npm:zone.js@0.5.10/lib/patch/register-element",
      "npm:zone.js@0.5.10/lib/patch/websocket",
      "npm:zone.js@0.5.10/lib/patch/event-target",
      "npm:zone.js@0.5.10/lib/patch/property-descriptor",
      "npm:zone.js@0.5.10/lib/patch/geolocation",
      "npm:zone.js@0.5.10/lib/patch/file-reader"
    ],
    "npm:zone.js@0.5.10/lib/core": [
      "npm:zone.js@0.5.10/lib/keys",
      "npm:zone.js@0.5.10/lib/patch/promise"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/common_directives": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/common/forms",
      "npm:angular2@2.0.0-alpha.52/src/common/directives"
    ],
    "npm:rxjs@5.0.0-alpha.14/Observable": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/util/root",
      "npm:rxjs@5.0.0-alpha.14/util/SymbolShim",
      "npm:rxjs@5.0.0-alpha.14/symbol/rxSubscriber"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/pipes": [
      "npm:angular2@2.0.0-alpha.52/src/common/pipes/async_pipe",
      "npm:angular2@2.0.0-alpha.52/src/common/pipes/uppercase_pipe",
      "npm:angular2@2.0.0-alpha.52/src/common/pipes/lowercase_pipe",
      "npm:angular2@2.0.0-alpha.52/src/common/pipes/json_pipe",
      "npm:angular2@2.0.0-alpha.52/src/common/pipes/slice_pipe",
      "npm:angular2@2.0.0-alpha.52/src/common/pipes/date_pipe",
      "npm:angular2@2.0.0-alpha.52/src/common/pipes/number_pipe",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/directives": [
      "npm:angular2@2.0.0-alpha.52/src/common/directives/ng_class",
      "npm:angular2@2.0.0-alpha.52/src/common/directives/ng_for",
      "npm:angular2@2.0.0-alpha.52/src/common/directives/ng_if",
      "npm:angular2@2.0.0-alpha.52/src/common/directives/ng_style",
      "npm:angular2@2.0.0-alpha.52/src/common/directives/ng_switch",
      "npm:angular2@2.0.0-alpha.52/src/common/directives/observable_list_diff",
      "npm:angular2@2.0.0-alpha.52/src/common/directives/core_directives"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/forms": [
      "npm:angular2@2.0.0-alpha.52/src/common/forms/model",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/abstract_control_directive",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/control_container",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/ng_control_name",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/ng_form_control",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/ng_model",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/ng_control",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/ng_control_group",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/ng_form_model",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/ng_form",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/control_value_accessor",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/default_value_accessor",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/ng_control_status",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/checkbox_value_accessor",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/select_control_value_accessor",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/validators",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/validators",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/form_builder"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/angular_entrypoint": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "github:jspm/nodelibs-process@0.1.2": [
      "github:jspm/nodelibs-process@0.1.2/index"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/map": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject"
    ],
    "npm:angular2@2.0.0-alpha.52/src/platform/browser_common": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/common",
      "npm:angular2@2.0.0-alpha.52/src/core/testability/testability",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/dom_adapter",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/events/dom_events",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/events/key_events",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/events/hammer_gestures",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/dom_tokens",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/dom_renderer",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/shared_styles_host",
      "npm:angular2@2.0.0-alpha.52/src/animate/browser_details",
      "npm:angular2@2.0.0-alpha.52/src/animate/animation_builder",
      "npm:angular2@2.0.0-alpha.52/src/platform/browser/browser_adapter",
      "npm:angular2@2.0.0-alpha.52/src/platform/browser/testability",
      "npm:angular2@2.0.0-alpha.52/src/core/profile/wtf_init",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/events/event_manager",
      "npm:angular2@2.0.0-alpha.52/src/platform/browser/title",
      "npm:angular2@2.0.0-alpha.52/platform/common_dom",
      "npm:angular2@2.0.0-alpha.52/src/platform/browser/tools/tools"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/di": [
      "npm:angular2@2.0.0-alpha.52/src/core/di/metadata",
      "npm:angular2@2.0.0-alpha.52/src/core/di/decorators",
      "npm:angular2@2.0.0-alpha.52/src/core/di/forward_ref",
      "npm:angular2@2.0.0-alpha.52/src/core/di/injector",
      "npm:angular2@2.0.0-alpha.52/src/core/di/provider",
      "npm:angular2@2.0.0-alpha.52/src/core/di/key",
      "npm:angular2@2.0.0-alpha.52/src/core/di/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/core/di/opaque_token"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/metadata": [
      "npm:angular2@2.0.0-alpha.52/src/core/metadata/di",
      "npm:angular2@2.0.0-alpha.52/src/core/metadata/directives",
      "npm:angular2@2.0.0-alpha.52/src/core/metadata/view",
      "npm:angular2@2.0.0-alpha.52/src/core/util/decorators"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/util": [
      "npm:angular2@2.0.0-alpha.52/src/core/util/decorators"
    ],
    "npm:angular2@2.0.0-alpha.52/src/facade/facade": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/async",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/facade/exception_handler"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/application_ref": [
      "npm:angular2@2.0.0-alpha.52/src/core/zone/ng_zone",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/core/application_tokens",
      "npm:angular2@2.0.0-alpha.52/src/facade/async",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/core/testability/testability",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/dynamic_component_loader",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/view_ref",
      "npm:angular2@2.0.0-alpha.52/src/core/profile/profile"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/dev_mode": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/zone": [
      "npm:angular2@2.0.0-alpha.52/src/core/zone/ng_zone"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/reflection/reflection_capabilities": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions"
    ],
    "npm:angular2@2.0.0-alpha.52/src/platform/browser/xhr_impl": [
      "npm:angular2@2.0.0-alpha.52/src/facade/promise",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/compiler/xhr"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/render": [
      "npm:angular2@2.0.0-alpha.52/src/core/render/api"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/linker": [
      "npm:angular2@2.0.0-alpha.52/src/core/linker/directive_resolver",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/view_resolver",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/compiler",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/view_manager",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/query_list",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/dynamic_component_loader",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/element_ref",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/template_ref",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/view_ref",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/view_container_ref"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/debug/debug_element": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/view",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/view_ref"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/change_detection": [
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/change_detection"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/testability/testability": [
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/core/zone/ng_zone",
      "npm:angular2@2.0.0-alpha.52/src/facade/async"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/platform_directives_and_pipes": [
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/application_tokens": [
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/reflection/reflection": [
      "npm:angular2@2.0.0-alpha.52/src/core/reflection/reflector",
      "npm:angular2@2.0.0-alpha.52/src/core/reflection/reflection_capabilities"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/profile/profile": [
      "npm:angular2@2.0.0-alpha.52/src/core/profile/wtf_impl"
    ],
    "npm:angular2@2.0.0-alpha.52/src/upgrade/upgrade_adapter": [
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/facade/async",
      "npm:angular2@2.0.0-alpha.52/platform/browser",
      "npm:angular2@2.0.0-alpha.52/src/upgrade/metadata",
      "npm:angular2@2.0.0-alpha.52/src/upgrade/util",
      "npm:angular2@2.0.0-alpha.52/src/upgrade/constants",
      "npm:angular2@2.0.0-alpha.52/src/upgrade/downgrade_ng2_adapter",
      "npm:angular2@2.0.0-alpha.52/src/upgrade/upgrade_ng1_adapter",
      "npm:angular2@2.0.0-alpha.52/src/upgrade/angular_js"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/platform_common_providers": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/core/reflection/reflection",
      "npm:angular2@2.0.0-alpha.52/src/core/testability/testability"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/zone/ng_zone": [
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/async",
      "npm:angular2@2.0.0-alpha.52/src/core/profile/profile",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:angular2@2.0.0-alpha.52/src/facade/collection": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/compiler/url_resolver": [
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/core/application_tokens"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/application_common_providers": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/core/application_tokens",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/change_detection",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/view_pool",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/view_manager",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/view_manager_utils",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/view_resolver",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/view_listener",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/proto_view_factory",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/directive_resolver",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/pipe_resolver",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/compiler",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/dynamic_component_loader"
    ],
    "npm:angular2@2.0.0-alpha.52/src/compiler/compiler": [
      "npm:angular2@2.0.0-alpha.52/src/compiler/runtime_compiler",
      "npm:angular2@2.0.0-alpha.52/src/compiler/template_compiler",
      "npm:angular2@2.0.0-alpha.52/src/compiler/directive_metadata",
      "npm:angular2@2.0.0-alpha.52/src/compiler/source_module",
      "npm:angular2@2.0.0-alpha.52/src/core/platform_directives_and_pipes",
      "npm:angular2@2.0.0-alpha.52/src/compiler/template_ast",
      "npm:angular2@2.0.0-alpha.52/src/compiler/template_parser",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/compiler/html_parser",
      "npm:angular2@2.0.0-alpha.52/src/compiler/template_normalizer",
      "npm:angular2@2.0.0-alpha.52/src/compiler/runtime_metadata",
      "npm:angular2@2.0.0-alpha.52/src/compiler/change_detector_compiler",
      "npm:angular2@2.0.0-alpha.52/src/compiler/style_compiler",
      "npm:angular2@2.0.0-alpha.52/src/compiler/command_compiler",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/change_detection",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/compiler",
      "npm:angular2@2.0.0-alpha.52/src/compiler/schema/element_schema_registry",
      "npm:angular2@2.0.0-alpha.52/src/compiler/schema/dom_element_schema_registry",
      "npm:angular2@2.0.0-alpha.52/src/compiler/url_resolver",
      "npm:angular2@2.0.0-alpha.52/src/compiler/app_root_url",
      "npm:angular2@2.0.0-alpha.52/src/compiler/anchor_based_app_root_url"
    ],
    "npm:angular2@2.0.0-alpha.52/src/http/http_utils": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/http/enums",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions"
    ],
    "npm:angular2@2.0.0-alpha.52/src/facade/async": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/promise",
      "npm:rxjs@5.0.0-alpha.14/Subject",
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/observable/fromPromise",
      "npm:rxjs@5.0.0-alpha.14/operator/toPromise"
    ],
    "npm:angular2@2.0.0-alpha.52/src/compiler/app_root_url": [
      "npm:angular2@2.0.0-alpha.52/src/core/di"
    ],
    "npm:angular2@2.0.0-alpha.52/src/router/route_lifecycle_reflector": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/router/lifecycle_annotations_impl",
      "npm:angular2@2.0.0-alpha.52/src/core/reflection/reflection"
    ],
    "npm:angular2@2.0.0-alpha.52/src/router/route_config_impl": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/router/route_config_nomalizer": [
      "npm:angular2@2.0.0-alpha.52/src/router/route_config_decorator",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions"
    ],
    "npm:angular2@2.0.0-alpha.52/src/router/url_parser": [
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions"
    ],
    "npm:angular2@2.0.0-alpha.52/src/router/component_recognizer": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/facade/async",
      "npm:angular2@2.0.0-alpha.52/src/router/route_recognizer",
      "npm:angular2@2.0.0-alpha.52/src/router/route_config_impl",
      "npm:angular2@2.0.0-alpha.52/src/router/async_route_handler",
      "npm:angular2@2.0.0-alpha.52/src/router/sync_route_handler"
    ],
    "npm:angular2@2.0.0-alpha.52/src/router/route_recognizer": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/facade/promise",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/router/instruction",
      "npm:angular2@2.0.0-alpha.52/src/router/path_recognizer"
    ],
    "npm:angular2@2.0.0-alpha.52/src/router/lifecycle_annotations_impl": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/facade/exception_handler": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/util/decorators": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:zone.js@0.5.10/lib/patch/register-element": [
      "npm:zone.js@0.5.10/lib/patch/define-property",
      "npm:zone.js@0.5.10/lib/utils"
    ],
    "npm:zone.js@0.5.10/lib/patch/functions": [
      "npm:zone.js@0.5.10/lib/utils"
    ],
    "npm:zone.js@0.5.10/lib/patch/promise": [
      "npm:zone.js@0.5.10/lib/utils"
    ],
    "npm:zone.js@0.5.10/lib/patch/define-property": [
      "npm:zone.js@0.5.10/lib/keys"
    ],
    "npm:zone.js@0.5.10/lib/patch/mutation-observer": [
      "npm:zone.js@0.5.10/lib/keys"
    ],
    "npm:zone.js@0.5.10/lib/patch/websocket": [
      "npm:zone.js@0.5.10/lib/utils"
    ],
    "npm:zone.js@0.5.10/lib/patch/event-target": [
      "npm:zone.js@0.5.10/lib/utils"
    ],
    "npm:zone.js@0.5.10/lib/patch/geolocation": [
      "npm:zone.js@0.5.10/lib/utils"
    ],
    "npm:zone.js@0.5.10/lib/patch/property-descriptor": [
      "npm:zone.js@0.5.10/lib/patch/websocket",
      "npm:zone.js@0.5.10/lib/utils",
      "npm:zone.js@0.5.10/lib/keys"
    ],
    "npm:zone.js@0.5.10/lib/patch/file-reader": [
      "npm:zone.js@0.5.10/lib/utils"
    ],
    "npm:rxjs@5.0.0-alpha.14/util/SymbolShim": [
      "npm:rxjs@5.0.0-alpha.14/util/root"
    ],
    "npm:rxjs@5.0.0-alpha.14/symbol/rxSubscriber": [
      "npm:rxjs@5.0.0-alpha.14/util/SymbolShim"
    ],
    "npm:rxjs@5.0.0-alpha.14/Subscriber": [
      "npm:rxjs@5.0.0-alpha.14/util/noop",
      "npm:rxjs@5.0.0-alpha.14/util/throwError",
      "npm:rxjs@5.0.0-alpha.14/util/tryOrOnError",
      "npm:rxjs@5.0.0-alpha.14/Subscription",
      "npm:rxjs@5.0.0-alpha.14/symbol/rxSubscriber"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/pipes/async_pipe": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/async",
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/common/pipes/invalid_pipe_argument_exception"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/pipes/uppercase_pipe": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/common/pipes/invalid_pipe_argument_exception"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/pipes/json_pipe": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/core"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/pipes/slice_pipe": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/common/pipes/invalid_pipe_argument_exception"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/pipes/lowercase_pipe": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/common/pipes/invalid_pipe_argument_exception"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/pipes/date_pipe": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/intl",
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/common/pipes/invalid_pipe_argument_exception"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/pipes/number_pipe": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/facade/intl",
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/common/pipes/invalid_pipe_argument_exception"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/directives/ng_class": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/directives/ng_for": [
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/directives/ng_style": [
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/directives/ng_switch": [
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/directives/core_directives": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/common/directives/ng_class",
      "npm:angular2@2.0.0-alpha.52/src/common/directives/ng_for",
      "npm:angular2@2.0.0-alpha.52/src/common/directives/ng_if",
      "npm:angular2@2.0.0-alpha.52/src/common/directives/ng_style",
      "npm:angular2@2.0.0-alpha.52/src/common/directives/ng_switch"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/directives/ng_if": [
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/forms/model": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/async",
      "npm:angular2@2.0.0-alpha.52/src/facade/promise",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/abstract_control_directive": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/ng_form_control": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/facade/async",
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/ng_control",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/validators",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/control_value_accessor",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/shared"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/ng_control_name": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/async",
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/control_container",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/ng_control",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/control_value_accessor",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/shared",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/validators"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/control_container": [
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/abstract_control_directive"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/ng_model": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/async",
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/control_value_accessor",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/ng_control",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/model",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/validators",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/shared"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/ng_control": [
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/abstract_control_directive",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/ng_control_group": [
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/control_container",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/shared",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/validators"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/ng_form_model": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/facade/async",
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/control_container",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/shared",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/validators"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/ng_control_status": [
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/ng_control",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/default_value_accessor": [
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/control_value_accessor",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/control_value_accessor": [
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/ng_form": [
      "npm:angular2@2.0.0-alpha.52/src/facade/async",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/control_container",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/model",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/shared",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/validators"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/checkbox_value_accessor": [
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/control_value_accessor",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/select_control_value_accessor": [
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/facade/async",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/control_value_accessor",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/validators": [
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/validators"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/forms/form_builder": [
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/model"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/forms/directives": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/ng_control_name",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/ng_form_control",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/ng_model",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/ng_control_group",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/ng_form_model",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/ng_form",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/default_value_accessor",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/checkbox_value_accessor",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/number_value_accessor",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/ng_control_status",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/select_control_value_accessor",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/validators",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/ng_control"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/forms/validators": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/promise",
      "npm:angular2@2.0.0-alpha.52/src/facade/async",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/core",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "github:jspm/nodelibs-process@0.1.2/index": [
      "npm:process@0.11.2"
    ],
    "npm:rxjs@5.0.0-alpha.14/util/tryCatch": [
      "npm:rxjs@5.0.0-alpha.14/util/errorObject"
    ],
    "npm:angular2@2.0.0-alpha.52/src/platform/dom/events/dom_events": [
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/dom_adapter",
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/events/event_manager"
    ],
    "npm:angular2@2.0.0-alpha.52/src/platform/dom/events/key_events": [
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/dom_adapter",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/events/event_manager",
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:angular2@2.0.0-alpha.52/src/platform/dom/dom_tokens": [
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/platform/dom/events/hammer_gestures": [
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/events/hammer_common",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/core/di"
    ],
    "npm:angular2@2.0.0-alpha.52/src/platform/dom/dom_renderer": [
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/animate/animation_builder",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/shared_styles_host",
      "npm:angular2@2.0.0-alpha.52/src/core/profile/profile",
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/events/event_manager",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/dom_tokens",
      "npm:angular2@2.0.0-alpha.52/src/core/render/view_factory",
      "npm:angular2@2.0.0-alpha.52/src/core/render/view",
      "npm:angular2@2.0.0-alpha.52/src/core/metadata",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/dom_adapter"
    ],
    "npm:angular2@2.0.0-alpha.52/src/platform/dom/shared_styles_host": [
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/dom_adapter",
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/dom_tokens"
    ],
    "npm:angular2@2.0.0-alpha.52/src/animate/browser_details": [
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/facade/math",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/dom_adapter"
    ],
    "npm:angular2@2.0.0-alpha.52/src/animate/animation_builder": [
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/animate/css_animation_builder",
      "npm:angular2@2.0.0-alpha.52/src/animate/browser_details"
    ],
    "npm:angular2@2.0.0-alpha.52/src/platform/browser/browser_adapter": [
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/dom_adapter",
      "npm:angular2@2.0.0-alpha.52/src/platform/browser/generic_browser_adapter"
    ],
    "npm:angular2@2.0.0-alpha.52/src/platform/browser/title": [
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/dom_adapter"
    ],
    "npm:angular2@2.0.0-alpha.52/platform/common_dom": [
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/dom_adapter",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/dom_renderer",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/dom_tokens",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/shared_styles_host",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/events/dom_events",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/events/event_manager",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/debug/by",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/debug/debug_element_view_listener"
    ],
    "npm:angular2@2.0.0-alpha.52/src/platform/browser/testability": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/dom_adapter",
      "npm:angular2@2.0.0-alpha.52/core"
    ],
    "npm:angular2@2.0.0-alpha.52/src/platform/browser/tools/tools": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/platform/browser/tools/common_tools"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/di/forward_ref": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/di/injector": [
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/core/di/provider",
      "npm:angular2@2.0.0-alpha.52/src/core/di/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/core/di/key",
      "npm:angular2@2.0.0-alpha.52/src/core/di/metadata",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/di/metadata": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/di/provider": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/core/reflection/reflection",
      "npm:angular2@2.0.0-alpha.52/src/core/di/key",
      "npm:angular2@2.0.0-alpha.52/src/core/di/metadata",
      "npm:angular2@2.0.0-alpha.52/src/core/di/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/core/di/forward_ref"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/di/exceptions": [
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/di/opaque_token": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/di/decorators": [
      "npm:angular2@2.0.0-alpha.52/src/core/di/metadata",
      "npm:angular2@2.0.0-alpha.52/src/core/util/decorators"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/di/key": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/core/di/type_literal",
      "npm:angular2@2.0.0-alpha.52/src/core/di/forward_ref"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/metadata/di": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/core/di/metadata"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/linker/dynamic_component_loader": [
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/compiler",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/view_manager"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/metadata/directives": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/core/di/metadata",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/metadata/view": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/linker/view_ref": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/render/api": [
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/linker/directive_resolver": [
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/core/metadata",
      "npm:angular2@2.0.0-alpha.52/src/core/reflection/reflection"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/linker/compiler": [
      "npm:angular2@2.0.0-alpha.52/src/core/linker/proto_view_factory",
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/facade/async",
      "npm:angular2@2.0.0-alpha.52/src/core/reflection/reflection",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/template_commands"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/linker/view_manager": [
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/view",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/view_ref",
      "npm:angular2@2.0.0-alpha.52/src/core/render/api",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/view_manager_utils",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/view_pool",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/view_listener",
      "npm:angular2@2.0.0-alpha.52/src/core/profile/profile",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/proto_view_factory"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/linker/element_ref": [
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/linker/template_ref": [
      "npm:angular2@2.0.0-alpha.52/src/core/linker/view_ref"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/linker/view_resolver": [
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/core/metadata/view",
      "npm:angular2@2.0.0-alpha.52/src/core/metadata/directives",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/core/reflection/reflection"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/linker/query_list": [
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/async"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/linker/view_container_ref": [
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/view_ref"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/linker/view": [
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/change_detection",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/interfaces",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/view_ref",
      "npm:angular2@2.0.0-alpha.52/src/core/render/util"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/change_detection/change_detection": [
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/differs/iterable_differs",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/differs/default_iterable_differ",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/differs/keyvalue_differs",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/differs/default_keyvalue_differ",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/parser/ast",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/parser/lexer",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/parser/parser",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/parser/locals",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/interfaces",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/constants",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/proto_change_detector",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/jit_proto_change_detector",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/binding_record",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/directive_record",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/dynamic_change_detector",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/change_detector_ref",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/change_detection_util"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/profile/wtf_impl": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/reflection/reflector": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection"
    ],
    "npm:angular2@2.0.0-alpha.52/src/upgrade/metadata": [
      "npm:angular2@2.0.0-alpha.52/core"
    ],
    "npm:angular2@2.0.0-alpha.52/src/upgrade/upgrade_ng1_adapter": [
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/upgrade/constants",
      "npm:angular2@2.0.0-alpha.52/src/upgrade/util",
      "npm:angular2@2.0.0-alpha.52/src/upgrade/angular_js"
    ],
    "npm:angular2@2.0.0-alpha.52/src/upgrade/downgrade_ng2_adapter": [
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/upgrade/constants"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/linker/view_pool": [
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/linker/proto_view_factory": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/core/render/api",
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/core/pipes/pipe_provider",
      "npm:angular2@2.0.0-alpha.52/src/core/pipes/pipes",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/view",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/element_binder",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/element_injector",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/directive_resolver",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/view_resolver",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/pipe_resolver",
      "npm:angular2@2.0.0-alpha.52/src/core/metadata/view",
      "npm:angular2@2.0.0-alpha.52/src/core/platform_directives_and_pipes",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/template_commands",
      "npm:angular2@2.0.0-alpha.52/src/core/application_tokens"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/linker/view_manager_utils": [
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/element_injector",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/view",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/element_ref",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/template_ref",
      "npm:angular2@2.0.0-alpha.52/src/core/pipes/pipes"
    ],
    "npm:angular2@2.0.0-alpha.52/src/compiler/runtime_compiler": [
      "npm:angular2@2.0.0-alpha.52/src/core/linker/compiler",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/proto_view_factory",
      "npm:angular2@2.0.0-alpha.52/src/compiler/template_compiler",
      "npm:angular2@2.0.0-alpha.52/src/core/di"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/linker/view_listener": [
      "npm:angular2@2.0.0-alpha.52/src/core/di"
    ],
    "npm:angular2@2.0.0-alpha.52/src/compiler/template_compiler": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/facade/async",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/template_commands",
      "npm:angular2@2.0.0-alpha.52/src/compiler/directive_metadata",
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/compiler/source_module",
      "npm:angular2@2.0.0-alpha.52/src/compiler/change_detector_compiler",
      "npm:angular2@2.0.0-alpha.52/src/compiler/style_compiler",
      "npm:angular2@2.0.0-alpha.52/src/compiler/command_compiler",
      "npm:angular2@2.0.0-alpha.52/src/compiler/template_parser",
      "npm:angular2@2.0.0-alpha.52/src/compiler/template_normalizer",
      "npm:angular2@2.0.0-alpha.52/src/compiler/runtime_metadata",
      "npm:angular2@2.0.0-alpha.52/src/compiler/util"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/linker/pipe_resolver": [
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/core/metadata",
      "npm:angular2@2.0.0-alpha.52/src/core/reflection/reflection"
    ],
    "npm:angular2@2.0.0-alpha.52/src/compiler/template_ast": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/compiler/directive_metadata": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/change_detection",
      "npm:angular2@2.0.0-alpha.52/src/core/metadata/view",
      "npm:angular2@2.0.0-alpha.52/src/compiler/selector",
      "npm:angular2@2.0.0-alpha.52/src/compiler/util",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/interfaces"
    ],
    "npm:angular2@2.0.0-alpha.52/src/compiler/source_module": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/compiler/template_parser": [
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/change_detection",
      "npm:angular2@2.0.0-alpha.52/src/compiler/html_parser",
      "npm:angular2@2.0.0-alpha.52/src/compiler/html_tags",
      "npm:angular2@2.0.0-alpha.52/src/compiler/parse_util",
      "npm:angular2@2.0.0-alpha.52/src/compiler/template_ast",
      "npm:angular2@2.0.0-alpha.52/src/compiler/selector",
      "npm:angular2@2.0.0-alpha.52/src/compiler/schema/element_schema_registry",
      "npm:angular2@2.0.0-alpha.52/src/compiler/template_preparser",
      "npm:angular2@2.0.0-alpha.52/src/compiler/style_url_resolver",
      "npm:angular2@2.0.0-alpha.52/src/compiler/html_ast",
      "npm:angular2@2.0.0-alpha.52/src/compiler/util",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:angular2@2.0.0-alpha.52/src/compiler/html_parser": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/compiler/html_ast",
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/compiler/html_lexer",
      "npm:angular2@2.0.0-alpha.52/src/compiler/parse_util",
      "npm:angular2@2.0.0-alpha.52/src/compiler/html_tags"
    ],
    "npm:angular2@2.0.0-alpha.52/src/compiler/template_normalizer": [
      "npm:angular2@2.0.0-alpha.52/src/compiler/directive_metadata",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/facade/async",
      "npm:angular2@2.0.0-alpha.52/src/compiler/xhr",
      "npm:angular2@2.0.0-alpha.52/src/compiler/url_resolver",
      "npm:angular2@2.0.0-alpha.52/src/compiler/style_url_resolver",
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/core/metadata/view",
      "npm:angular2@2.0.0-alpha.52/src/compiler/html_ast",
      "npm:angular2@2.0.0-alpha.52/src/compiler/html_parser",
      "npm:angular2@2.0.0-alpha.52/src/compiler/template_preparser"
    ],
    "npm:angular2@2.0.0-alpha.52/src/compiler/style_compiler": [
      "npm:angular2@2.0.0-alpha.52/src/compiler/source_module",
      "npm:angular2@2.0.0-alpha.52/src/core/metadata/view",
      "npm:angular2@2.0.0-alpha.52/src/compiler/xhr",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/async",
      "npm:angular2@2.0.0-alpha.52/src/compiler/shadow_css",
      "npm:angular2@2.0.0-alpha.52/src/compiler/url_resolver",
      "npm:angular2@2.0.0-alpha.52/src/compiler/style_url_resolver",
      "npm:angular2@2.0.0-alpha.52/src/compiler/util",
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/core/render/view_factory"
    ],
    "npm:angular2@2.0.0-alpha.52/src/compiler/command_compiler": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/template_commands",
      "npm:angular2@2.0.0-alpha.52/src/compiler/template_ast",
      "npm:angular2@2.0.0-alpha.52/src/compiler/source_module",
      "npm:angular2@2.0.0-alpha.52/src/compiler/util",
      "npm:angular2@2.0.0-alpha.52/src/core/di"
    ],
    "npm:angular2@2.0.0-alpha.52/src/compiler/runtime_metadata": [
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/compiler/directive_metadata",
      "npm:angular2@2.0.0-alpha.52/src/core/metadata/directives",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/directive_resolver",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/view_resolver",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/directive_lifecycle_reflector",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/interfaces",
      "npm:angular2@2.0.0-alpha.52/src/core/reflection/reflection",
      "npm:angular2@2.0.0-alpha.52/src/core/platform_directives_and_pipes",
      "npm:angular2@2.0.0-alpha.52/src/compiler/util",
      "npm:angular2@2.0.0-alpha.52/src/compiler/url_resolver"
    ],
    "npm:angular2@2.0.0-alpha.52/src/compiler/schema/dom_element_schema_registry": [
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/dom_adapter",
      "npm:angular2@2.0.0-alpha.52/src/compiler/html_tags",
      "npm:angular2@2.0.0-alpha.52/src/compiler/schema/element_schema_registry"
    ],
    "npm:angular2@2.0.0-alpha.52/src/compiler/change_detector_compiler": [
      "npm:angular2@2.0.0-alpha.52/src/compiler/source_module",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/change_detection_jit_generator",
      "npm:angular2@2.0.0-alpha.52/src/compiler/change_definition_factory",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/change_detection",
      "npm:angular2@2.0.0-alpha.52/src/transform/template_compiler/change_detector_codegen",
      "npm:angular2@2.0.0-alpha.52/src/compiler/util",
      "npm:angular2@2.0.0-alpha.52/src/core/di"
    ],
    "npm:rxjs@5.0.0-alpha.14/Subject": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/Subscription",
      "npm:rxjs@5.0.0-alpha.14/subject/SubjectSubscription",
      "npm:rxjs@5.0.0-alpha.14/symbol/rxSubscriber"
    ],
    "npm:angular2@2.0.0-alpha.52/src/compiler/anchor_based_app_root_url": [
      "npm:angular2@2.0.0-alpha.52/src/compiler/app_root_url",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/dom_adapter",
      "npm:angular2@2.0.0-alpha.52/src/core/di"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/toPromise": [
      "npm:rxjs@5.0.0-alpha.14/util/root"
    ],
    "npm:angular2@2.0.0-alpha.52/src/router/async_route_handler": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/router/instruction"
    ],
    "npm:rxjs@5.0.0-alpha.14/observable/fromPromise": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/Subscription",
      "npm:rxjs@5.0.0-alpha.14/scheduler/queue"
    ],
    "npm:angular2@2.0.0-alpha.52/src/router/sync_route_handler": [
      "npm:angular2@2.0.0-alpha.52/src/facade/async",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/router/instruction"
    ],
    "npm:angular2@2.0.0-alpha.52/src/router/path_recognizer": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/router/url_parser"
    ],
    "npm:zone.js@0.5.10/lib/utils": [
      "npm:zone.js@0.5.10/lib/keys"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/pipes/invalid_pipe_argument_exception": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions"
    ],
    "npm:rxjs@5.0.0-alpha.14/Subscription": [
      "npm:rxjs@5.0.0-alpha.14/util/noop"
    ],
    "npm:angular2@2.0.0-alpha.52/src/platform/dom/events/hammer_common": [
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/events/event_manager",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/shared": [
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/validators",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/default_value_accessor",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/number_value_accessor",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/checkbox_value_accessor",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/select_control_value_accessor",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/normalize_validator"
    ],
    "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/number_value_accessor": [
      "npm:angular2@2.0.0-alpha.52/core",
      "npm:angular2@2.0.0-alpha.52/src/common/forms/directives/control_value_accessor",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:process@0.11.2": [
      "npm:process@0.11.2/browser"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/render/view_factory": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/core/render/view",
      "npm:angular2@2.0.0-alpha.52/src/core/metadata",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:angular2@2.0.0-alpha.52/src/facade/math": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/render/view": [
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/core/render/api"
    ],
    "npm:angular2@2.0.0-alpha.52/src/platform/dom/debug/debug_element_view_listener": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/view_listener",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/dom_adapter",
      "npm:angular2@2.0.0-alpha.52/src/core/render/api",
      "npm:angular2@2.0.0-alpha.52/src/core/debug/debug_element"
    ],
    "npm:angular2@2.0.0-alpha.52/src/platform/browser/generic_browser_adapter": [
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/dom_adapter",
      "npm:angular2@2.0.0-alpha.52/src/platform/browser/xhr_impl"
    ],
    "npm:angular2@2.0.0-alpha.52/src/animate/css_animation_builder": [
      "npm:angular2@2.0.0-alpha.52/src/animate/css_animation_options",
      "npm:angular2@2.0.0-alpha.52/src/animate/animation"
    ],
    "npm:angular2@2.0.0-alpha.52/src/platform/dom/debug/by": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/dom_adapter"
    ],
    "npm:angular2@2.0.0-alpha.52/src/platform/browser/tools/common_tools": [
      "npm:angular2@2.0.0-alpha.52/src/core/application_ref",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/browser",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/dom_adapter"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/linker/template_commands": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/core/render/api",
      "npm:angular2@2.0.0-alpha.52/src/core/metadata"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/render/util": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/change_detection/differs/iterable_differs": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/core/di"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/change_detection/differs/keyvalue_differs": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/core/di"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/change_detection/differs/default_iterable_differ": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/change_detection/differs/default_keyvalue_differ": [
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/change_detection/parser/ast": [
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/change_detection/parser/lexer": [
      "npm:angular2@2.0.0-alpha.52/src/core/di/decorators",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/change_detection/parser/parser": [
      "npm:angular2@2.0.0-alpha.52/src/core/di/decorators",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/parser/lexer",
      "npm:angular2@2.0.0-alpha.52/src/core/reflection/reflection",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/parser/ast"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/change_detection/parser/locals": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/change_detection/exceptions": [
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/change_detection/constants": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/change_detection/jit_proto_change_detector": [
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/change_detection_jit_generator"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/change_detection/binding_record": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/change_detection/proto_change_detector": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/parser/ast",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/change_detection_util",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/dynamic_change_detector",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/directive_record",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/event_binding",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/coalesce",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/proto_record"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/change_detection/directive_record": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/constants"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/change_detection/change_detector_ref": [
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/constants"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/change_detection/dynamic_change_detector": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/abstract_change_detector",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/change_detection_util",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/constants",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/proto_record"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/pipes/pipe_provider": [
      "npm:angular2@2.0.0-alpha.52/src/core/di/provider",
      "npm:angular2@2.0.0-alpha.52/src/core/di"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/linker/element_binder": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/change_detection/change_detection_util": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/constants",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/pipe_lifecycle_reflector",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/binding_record",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/directive_record"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/pipes/pipes": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/pipes"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/linker/element_injector": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/facade/async",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/core/di",
      "npm:angular2@2.0.0-alpha.52/src/core/di/injector",
      "npm:angular2@2.0.0-alpha.52/src/core/di/provider",
      "npm:angular2@2.0.0-alpha.52/src/core/metadata/di",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/view_manager",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/view_container_ref",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/element_ref",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/template_ref",
      "npm:angular2@2.0.0-alpha.52/src/core/metadata/directives",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/directive_lifecycle_reflector",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/change_detection",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/query_list",
      "npm:angular2@2.0.0-alpha.52/src/core/reflection/reflection",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/event_config",
      "npm:angular2@2.0.0-alpha.52/src/core/pipes/pipe_provider",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/interfaces"
    ],
    "npm:angular2@2.0.0-alpha.52/src/compiler/selector": [
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:angular2@2.0.0-alpha.52/src/compiler/util": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/compiler/html_tags": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/compiler/template_preparser": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/compiler/html_ast": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/compiler/shadow_css": [
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:angular2@2.0.0-alpha.52/src/compiler/style_url_resolver": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/linker/directive_lifecycle_reflector": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/interfaces"
    ],
    "npm:angular2@2.0.0-alpha.52/src/compiler/html_lexer": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/compiler/parse_util",
      "npm:angular2@2.0.0-alpha.52/src/compiler/html_tags",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/change_detection/change_detection_jit_generator": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/abstract_change_detector",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/change_detection_util",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/proto_record",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/codegen_name_util",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/codegen_logic_util",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/codegen_facade",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/constants",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/proto_change_detector"
    ],
    "npm:angular2@2.0.0-alpha.52/src/compiler/change_definition_factory": [
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/core/reflection/reflection",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/change_detection",
      "npm:angular2@2.0.0-alpha.52/src/compiler/template_ast",
      "npm:angular2@2.0.0-alpha.52/src/core/linker/interfaces"
    ],
    "npm:rxjs@5.0.0-alpha.14/scheduler/queue": [
      "npm:rxjs@5.0.0-alpha.14/scheduler/QueueScheduler"
    ],
    "npm:rxjs@5.0.0-alpha.14/subject/SubjectSubscription": [
      "npm:rxjs@5.0.0-alpha.14/Subscription",
      "npm:rxjs@5.0.0-alpha.14/Subscriber"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/change_detection/coalesce": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/proto_record"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/change_detection/abstract_change_detector": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/change_detection_util",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/change_detector_ref",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/exceptions",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/constants",
      "npm:angular2@2.0.0-alpha.52/src/core/profile/profile",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/observable_facade"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/change_detection/codegen_name_util": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection"
    ],
    "npm:angular2@2.0.0-alpha.52/src/core/change_detection/codegen_logic_util": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/codegen_facade",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/proto_record",
      "npm:angular2@2.0.0-alpha.52/src/core/change_detection/constants",
      "npm:angular2@2.0.0-alpha.52/src/facade/exceptions"
    ],
    "npm:rxjs@5.0.0-alpha.14/scheduler/QueueScheduler": [
      "npm:rxjs@5.0.0-alpha.14/scheduler/QueueAction",
      "npm:rxjs@5.0.0-alpha.14/scheduler/FutureAction"
    ],
    "npm:angular2@2.0.0-alpha.52/src/animate/animation": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang",
      "npm:angular2@2.0.0-alpha.52/src/facade/math",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/util",
      "npm:angular2@2.0.0-alpha.52/src/facade/collection",
      "npm:angular2@2.0.0-alpha.52/src/platform/dom/dom_adapter"
    ],
    "npm:rxjs@5.0.0-alpha.14/scheduler/FutureAction": [
      "npm:rxjs@5.0.0-alpha.14/scheduler/QueueAction"
    ],
    "npm:rxjs@5.0.0-alpha.14/scheduler/QueueAction": [
      "npm:rxjs@5.0.0-alpha.14/Subscription"
    ],
    "npm:angular2@2.0.0-alpha.52/src/platform/dom/util": [
      "npm:angular2@2.0.0-alpha.52/src/facade/lang"
    ],
    "npm:zone.js@0.5.8": [
      "npm:zone.js@0.5.8/lib/zone"
    ],
    "npm:rxjs@5.0.0-alpha.14": [
      "npm:rxjs@5.0.0-alpha.14/Rx"
    ],
    "github:jspm/nodelibs-crypto@0.1.0": [
      "github:jspm/nodelibs-crypto@0.1.0/index"
    ],
    "npm:zone.js@0.5.8/lib/zone": [
      "npm:zone.js@0.5.8/lib/core",
      "npm:zone.js@0.5.8/lib/patch/browser"
    ],
    "npm:rxjs@5.0.0-alpha.14/Rx": [
      "npm:rxjs@5.0.0-alpha.14/Subject",
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/add/operator/combineLatest-static",
      "npm:rxjs@5.0.0-alpha.14/add/operator/concat-static",
      "npm:rxjs@5.0.0-alpha.14/add/operator/merge-static",
      "npm:rxjs@5.0.0-alpha.14/add/observable/bindCallback",
      "npm:rxjs@5.0.0-alpha.14/add/observable/defer",
      "npm:rxjs@5.0.0-alpha.14/add/observable/empty",
      "npm:rxjs@5.0.0-alpha.14/add/observable/forkJoin",
      "npm:rxjs@5.0.0-alpha.14/add/observable/from",
      "npm:rxjs@5.0.0-alpha.14/add/observable/fromArray",
      "npm:rxjs@5.0.0-alpha.14/add/observable/fromEvent",
      "npm:rxjs@5.0.0-alpha.14/add/observable/fromEventPattern",
      "npm:rxjs@5.0.0-alpha.14/add/observable/fromPromise",
      "npm:rxjs@5.0.0-alpha.14/add/observable/interval",
      "npm:rxjs@5.0.0-alpha.14/add/observable/never",
      "npm:rxjs@5.0.0-alpha.14/add/observable/range",
      "npm:rxjs@5.0.0-alpha.14/add/observable/throw",
      "npm:rxjs@5.0.0-alpha.14/add/observable/timer",
      "npm:rxjs@5.0.0-alpha.14/add/operator/zip-static",
      "npm:rxjs@5.0.0-alpha.14/add/operator/buffer",
      "npm:rxjs@5.0.0-alpha.14/add/operator/bufferCount",
      "npm:rxjs@5.0.0-alpha.14/add/operator/bufferTime",
      "npm:rxjs@5.0.0-alpha.14/add/operator/bufferToggle",
      "npm:rxjs@5.0.0-alpha.14/add/operator/bufferWhen",
      "npm:rxjs@5.0.0-alpha.14/add/operator/catch",
      "npm:rxjs@5.0.0-alpha.14/add/operator/combineAll",
      "npm:rxjs@5.0.0-alpha.14/add/operator/combineLatest",
      "npm:rxjs@5.0.0-alpha.14/add/operator/concat",
      "npm:rxjs@5.0.0-alpha.14/add/operator/concatAll",
      "npm:rxjs@5.0.0-alpha.14/add/operator/concatMap",
      "npm:rxjs@5.0.0-alpha.14/add/operator/concatMapTo",
      "npm:rxjs@5.0.0-alpha.14/add/operator/count",
      "npm:rxjs@5.0.0-alpha.14/add/operator/dematerialize",
      "npm:rxjs@5.0.0-alpha.14/add/operator/debounce",
      "npm:rxjs@5.0.0-alpha.14/add/operator/debounceTime",
      "npm:rxjs@5.0.0-alpha.14/add/operator/defaultIfEmpty",
      "npm:rxjs@5.0.0-alpha.14/add/operator/delay",
      "npm:rxjs@5.0.0-alpha.14/add/operator/distinctUntilChanged",
      "npm:rxjs@5.0.0-alpha.14/add/operator/do",
      "npm:rxjs@5.0.0-alpha.14/add/operator/expand",
      "npm:rxjs@5.0.0-alpha.14/add/operator/filter",
      "npm:rxjs@5.0.0-alpha.14/add/operator/finally",
      "npm:rxjs@5.0.0-alpha.14/add/operator/first",
      "npm:rxjs@5.0.0-alpha.14/add/operator/groupBy",
      "npm:rxjs@5.0.0-alpha.14/add/operator/ignoreElements",
      "npm:rxjs@5.0.0-alpha.14/add/operator/every",
      "npm:rxjs@5.0.0-alpha.14/add/operator/last",
      "npm:rxjs@5.0.0-alpha.14/add/operator/map",
      "npm:rxjs@5.0.0-alpha.14/add/operator/mapTo",
      "npm:rxjs@5.0.0-alpha.14/add/operator/materialize",
      "npm:rxjs@5.0.0-alpha.14/add/operator/merge",
      "npm:rxjs@5.0.0-alpha.14/add/operator/mergeAll",
      "npm:rxjs@5.0.0-alpha.14/add/operator/mergeMap",
      "npm:rxjs@5.0.0-alpha.14/add/operator/mergeMapTo",
      "npm:rxjs@5.0.0-alpha.14/add/operator/multicast",
      "npm:rxjs@5.0.0-alpha.14/add/operator/observeOn",
      "npm:rxjs@5.0.0-alpha.14/add/operator/partition",
      "npm:rxjs@5.0.0-alpha.14/add/operator/publish",
      "npm:rxjs@5.0.0-alpha.14/add/operator/publishBehavior",
      "npm:rxjs@5.0.0-alpha.14/add/operator/publishReplay",
      "npm:rxjs@5.0.0-alpha.14/add/operator/publishLast",
      "npm:rxjs@5.0.0-alpha.14/add/operator/reduce",
      "npm:rxjs@5.0.0-alpha.14/add/operator/repeat",
      "npm:rxjs@5.0.0-alpha.14/add/operator/retry",
      "npm:rxjs@5.0.0-alpha.14/add/operator/retryWhen",
      "npm:rxjs@5.0.0-alpha.14/add/operator/sample",
      "npm:rxjs@5.0.0-alpha.14/add/operator/sampleTime",
      "npm:rxjs@5.0.0-alpha.14/add/operator/scan",
      "npm:rxjs@5.0.0-alpha.14/add/operator/share",
      "npm:rxjs@5.0.0-alpha.14/add/operator/single",
      "npm:rxjs@5.0.0-alpha.14/add/operator/skip",
      "npm:rxjs@5.0.0-alpha.14/add/operator/skipUntil",
      "npm:rxjs@5.0.0-alpha.14/add/operator/skipWhile",
      "npm:rxjs@5.0.0-alpha.14/add/operator/startWith",
      "npm:rxjs@5.0.0-alpha.14/add/operator/subscribeOn",
      "npm:rxjs@5.0.0-alpha.14/add/operator/switch",
      "npm:rxjs@5.0.0-alpha.14/add/operator/switchMap",
      "npm:rxjs@5.0.0-alpha.14/add/operator/switchMapTo",
      "npm:rxjs@5.0.0-alpha.14/add/operator/take",
      "npm:rxjs@5.0.0-alpha.14/add/operator/takeUntil",
      "npm:rxjs@5.0.0-alpha.14/add/operator/takeWhile",
      "npm:rxjs@5.0.0-alpha.14/add/operator/throttle",
      "npm:rxjs@5.0.0-alpha.14/add/operator/throttleTime",
      "npm:rxjs@5.0.0-alpha.14/add/operator/timeout",
      "npm:rxjs@5.0.0-alpha.14/add/operator/timeoutWith",
      "npm:rxjs@5.0.0-alpha.14/add/operator/toArray",
      "npm:rxjs@5.0.0-alpha.14/add/operator/toPromise",
      "npm:rxjs@5.0.0-alpha.14/add/operator/window",
      "npm:rxjs@5.0.0-alpha.14/add/operator/windowCount",
      "npm:rxjs@5.0.0-alpha.14/add/operator/windowTime",
      "npm:rxjs@5.0.0-alpha.14/add/operator/windowToggle",
      "npm:rxjs@5.0.0-alpha.14/add/operator/windowWhen",
      "npm:rxjs@5.0.0-alpha.14/add/operator/withLatestFrom",
      "npm:rxjs@5.0.0-alpha.14/add/operator/zip",
      "npm:rxjs@5.0.0-alpha.14/add/operator/zipAll",
      "npm:rxjs@5.0.0-alpha.14/Subscription",
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/subject/AsyncSubject",
      "npm:rxjs@5.0.0-alpha.14/subject/ReplaySubject",
      "npm:rxjs@5.0.0-alpha.14/subject/BehaviorSubject",
      "npm:rxjs@5.0.0-alpha.14/observable/ConnectableObservable",
      "npm:rxjs@5.0.0-alpha.14/Notification",
      "npm:rxjs@5.0.0-alpha.14/util/EmptyError",
      "npm:rxjs@5.0.0-alpha.14/util/ArgumentOutOfRangeError",
      "npm:rxjs@5.0.0-alpha.14/util/ObjectUnsubscribedError",
      "npm:rxjs@5.0.0-alpha.14/scheduler/asap",
      "npm:rxjs@5.0.0-alpha.14/scheduler/queue",
      "npm:rxjs@5.0.0-alpha.14/symbol/rxSubscriber"
    ],
    "github:jspm/nodelibs-crypto@0.1.0/index": [
      "npm:crypto-browserify@3.11.0"
    ],
    "npm:zone.js@0.5.8/lib/core": [
      "npm:zone.js@0.5.8/lib/keys",
      "npm:zone.js@0.5.8/lib/patch/promise"
    ],
    "npm:zone.js@0.5.8/lib/patch/browser": [
      "npm:zone.js@0.5.8/lib/patch/functions",
      "npm:zone.js@0.5.8/lib/patch/promise",
      "npm:zone.js@0.5.8/lib/patch/mutation-observer",
      "npm:zone.js@0.5.8/lib/patch/define-property",
      "npm:zone.js@0.5.8/lib/patch/register-element",
      "npm:zone.js@0.5.8/lib/patch/websocket",
      "npm:zone.js@0.5.8/lib/patch/event-target",
      "npm:zone.js@0.5.8/lib/patch/property-descriptor",
      "npm:zone.js@0.5.8/lib/patch/geolocation",
      "npm:zone.js@0.5.8/lib/patch/file-reader"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/combineLatest-static": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/combineLatest-static"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/merge-static": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/merge-static"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/observable/bindCallback": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/observable/bindCallback"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/concat-static": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/concat-static"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/observable/defer": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/observable/defer"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/observable/empty": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/observable/empty"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/observable/forkJoin": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/observable/forkJoin"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/observable/fromEventPattern": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/observable/fromEventPattern"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/observable/fromEvent": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/observable/fromEvent"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/observable/fromArray": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/observable/fromArray"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/observable/from": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/observable/from"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/observable/fromPromise": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/observable/fromPromise"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/observable/interval": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/observable/interval"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/observable/never": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/observable/never"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/observable/timer": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/observable/timer"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/observable/throw": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/observable/throw"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/observable/range": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/observable/range"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/buffer": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/buffer"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/bufferCount": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/bufferCount"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/zip-static": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/zip-static"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/bufferToggle": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/bufferToggle"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/bufferTime": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/bufferTime"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/bufferWhen": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/bufferWhen"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/combineLatest": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/combineLatest"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/concat": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/concat"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/combineAll": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/combineAll"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/concatAll": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/concatAll"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/catch": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/catch"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/concatMap": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/concatMap"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/count": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/count"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/concatMapTo": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/concatMapTo"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/debounce": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/debounce"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/dematerialize": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/dematerialize"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/debounceTime": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/debounceTime"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/defaultIfEmpty": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/defaultIfEmpty"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/delay": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/delay"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/distinctUntilChanged": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/distinctUntilChanged"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/filter": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/filter"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/expand": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/expand"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/do": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/do"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/finally": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/finally"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/groupBy": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/groupBy"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/first": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/first"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/mapTo": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/mapTo"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/last": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/last"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/materialize": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/materialize"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/ignoreElements": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/ignoreElements"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/merge": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/merge"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/mergeMap": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/mergeMap"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/mergeAll": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/mergeAll"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/every": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/every"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/multicast": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/multicast"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/mergeMapTo": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/mergeMapTo"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/observeOn": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/observeOn"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/publish": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/publish"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/partition": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/partition"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/publishReplay": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/publishReplay"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/publishLast": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/publishLast"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/publishBehavior": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/publishBehavior"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/reduce": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/reduce"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/repeat": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/repeat"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/retry": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/retry"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/sample": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/sample"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/sampleTime": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/sampleTime"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/scan": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/scan"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/share": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/share"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/single": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/single"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/retryWhen": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/retryWhen"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/skipUntil": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/skipUntil"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/skip": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/skip"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/subscribeOn": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/subscribeOn"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/skipWhile": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/skipWhile"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/startWith": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/startWith"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/switchMap": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/switchMap"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/switchMapTo": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/switchMapTo"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/switch": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/switch"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/take": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/take"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/takeUntil": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/takeUntil"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/throttle": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/throttle"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/takeWhile": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/takeWhile"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/throttleTime": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/throttleTime"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/timeout": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/timeout"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/timeoutWith": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/timeoutWith"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/toPromise": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/toPromise"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/toArray": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/toArray"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/windowCount": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/windowCount"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/window": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/window"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/windowToggle": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/windowToggle"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/windowTime": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/windowTime"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/windowWhen": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/windowWhen"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/withLatestFrom": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/withLatestFrom"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/zip": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/zip"
    ],
    "npm:rxjs@5.0.0-alpha.14/add/operator/zipAll": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/zipAll"
    ],
    "npm:rxjs@5.0.0-alpha.14/subject/AsyncSubject": [
      "npm:rxjs@5.0.0-alpha.14/Subject"
    ],
    "npm:rxjs@5.0.0-alpha.14/subject/BehaviorSubject": [
      "npm:rxjs@5.0.0-alpha.14/Subject",
      "npm:rxjs@5.0.0-alpha.14/util/throwError",
      "npm:rxjs@5.0.0-alpha.14/util/ObjectUnsubscribedError"
    ],
    "npm:rxjs@5.0.0-alpha.14/subject/ReplaySubject": [
      "npm:rxjs@5.0.0-alpha.14/Subject",
      "npm:rxjs@5.0.0-alpha.14/scheduler/queue"
    ],
    "npm:rxjs@5.0.0-alpha.14/Notification": [
      "npm:rxjs@5.0.0-alpha.14/Observable"
    ],
    "npm:rxjs@5.0.0-alpha.14/observable/ConnectableObservable": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/Subscription",
      "npm:rxjs@5.0.0-alpha.14/Subscriber"
    ],
    "npm:rxjs@5.0.0-alpha.14/scheduler/asap": [
      "npm:rxjs@5.0.0-alpha.14/scheduler/AsapScheduler"
    ],
    "npm:crypto-browserify@3.11.0": [
      "npm:crypto-browserify@3.11.0/index"
    ],
    "npm:zone.js@0.5.8/lib/patch/promise": [
      "npm:zone.js@0.5.8/lib/utils"
    ],
    "npm:zone.js@0.5.8/lib/patch/define-property": [
      "npm:zone.js@0.5.8/lib/keys"
    ],
    "npm:zone.js@0.5.8/lib/patch/register-element": [
      "npm:zone.js@0.5.8/lib/patch/define-property",
      "npm:zone.js@0.5.8/lib/utils"
    ],
    "npm:zone.js@0.5.8/lib/patch/mutation-observer": [
      "npm:zone.js@0.5.8/lib/keys"
    ],
    "npm:zone.js@0.5.8/lib/patch/functions": [
      "npm:zone.js@0.5.8/lib/utils"
    ],
    "npm:zone.js@0.5.8/lib/patch/property-descriptor": [
      "npm:zone.js@0.5.8/lib/patch/websocket",
      "npm:zone.js@0.5.8/lib/utils",
      "npm:zone.js@0.5.8/lib/keys"
    ],
    "npm:zone.js@0.5.8/lib/patch/event-target": [
      "npm:zone.js@0.5.8/lib/utils"
    ],
    "npm:zone.js@0.5.8/lib/patch/geolocation": [
      "npm:zone.js@0.5.8/lib/utils"
    ],
    "npm:zone.js@0.5.8/lib/patch/websocket": [
      "npm:zone.js@0.5.8/lib/utils"
    ],
    "npm:zone.js@0.5.8/lib/patch/file-reader": [
      "npm:zone.js@0.5.8/lib/utils"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/combineLatest-static": [
      "npm:rxjs@5.0.0-alpha.14/observable/fromArray",
      "npm:rxjs@5.0.0-alpha.14/operator/combineLatest-support",
      "npm:rxjs@5.0.0-alpha.14/util/isScheduler",
      "npm:rxjs@5.0.0-alpha.14/util/isArray"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/merge-static": [
      "npm:rxjs@5.0.0-alpha.14/observable/fromArray",
      "npm:rxjs@5.0.0-alpha.14/operator/mergeAll-support",
      "npm:rxjs@5.0.0-alpha.14/scheduler/queue",
      "npm:rxjs@5.0.0-alpha.14/util/isScheduler"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/concat-static": [
      "npm:rxjs@5.0.0-alpha.14/scheduler/queue",
      "npm:rxjs@5.0.0-alpha.14/operator/mergeAll-support",
      "npm:rxjs@5.0.0-alpha.14/observable/fromArray",
      "npm:rxjs@5.0.0-alpha.14/util/isScheduler"
    ],
    "npm:rxjs@5.0.0-alpha.14/observable/defer": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject"
    ],
    "npm:rxjs@5.0.0-alpha.14/observable/empty": [
      "npm:rxjs@5.0.0-alpha.14/Observable"
    ],
    "npm:rxjs@5.0.0-alpha.14/observable/forkJoin": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/observable/fromPromise",
      "npm:rxjs@5.0.0-alpha.14/observable/empty",
      "npm:rxjs@5.0.0-alpha.14/util/isPromise",
      "npm:rxjs@5.0.0-alpha.14/util/isArray"
    ],
    "npm:rxjs@5.0.0-alpha.14/observable/fromEvent": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject",
      "npm:rxjs@5.0.0-alpha.14/Subscription"
    ],
    "npm:rxjs@5.0.0-alpha.14/observable/fromEventPattern": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/Subscription",
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject"
    ],
    "npm:rxjs@5.0.0-alpha.14/observable/fromArray": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/observable/ScalarObservable",
      "npm:rxjs@5.0.0-alpha.14/observable/empty",
      "npm:rxjs@5.0.0-alpha.14/util/isScheduler"
    ],
    "npm:rxjs@5.0.0-alpha.14/observable/bindCallback": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject",
      "npm:rxjs@5.0.0-alpha.14/subject/AsyncSubject"
    ],
    "npm:rxjs@5.0.0-alpha.14/observable/from": [
      "npm:rxjs@5.0.0-alpha.14/observable/fromPromise",
      "npm:rxjs@5.0.0-alpha.14/observable/IteratorObservable",
      "npm:rxjs@5.0.0-alpha.14/observable/fromArray",
      "npm:rxjs@5.0.0-alpha.14/util/SymbolShim",
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/operator/observeOn-support",
      "npm:rxjs@5.0.0-alpha.14/scheduler/queue"
    ],
    "npm:rxjs@5.0.0-alpha.14/observable/interval": [
      "npm:rxjs@5.0.0-alpha.14/util/isNumeric",
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/scheduler/asap"
    ],
    "npm:rxjs@5.0.0-alpha.14/observable/timer": [
      "npm:rxjs@5.0.0-alpha.14/util/isNumeric",
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/scheduler/asap",
      "npm:rxjs@5.0.0-alpha.14/util/isScheduler",
      "npm:rxjs@5.0.0-alpha.14/util/isDate"
    ],
    "npm:rxjs@5.0.0-alpha.14/observable/throw": [
      "npm:rxjs@5.0.0-alpha.14/Observable"
    ],
    "npm:rxjs@5.0.0-alpha.14/observable/never": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/util/noop"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/buffer": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:rxjs@5.0.0-alpha.14/observable/range": [
      "npm:rxjs@5.0.0-alpha.14/Observable"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/bufferCount": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/bufferToggle": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/Subscription",
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/bufferTime": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/scheduler/asap",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/zip-static": [
      "npm:rxjs@5.0.0-alpha.14/observable/fromArray",
      "npm:rxjs@5.0.0-alpha.14/operator/zip-support"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/combineLatest": [
      "npm:rxjs@5.0.0-alpha.14/observable/fromArray",
      "npm:rxjs@5.0.0-alpha.14/operator/combineLatest-support",
      "npm:rxjs@5.0.0-alpha.14/util/isArray"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/bufferWhen": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject",
      "github:jspm/nodelibs-buffer@0.1.0",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/concat": [
      "npm:rxjs@5.0.0-alpha.14/util/isScheduler",
      "npm:rxjs@5.0.0-alpha.14/observable/fromArray",
      "npm:rxjs@5.0.0-alpha.14/operator/mergeAll-support"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/combineAll": [
      "npm:rxjs@5.0.0-alpha.14/operator/combineLatest-support"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/catch": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/concatAll": [
      "npm:rxjs@5.0.0-alpha.14/operator/mergeAll-support"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/count": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/concatMap": [
      "npm:rxjs@5.0.0-alpha.14/operator/mergeMap-support"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/concatMapTo": [
      "npm:rxjs@5.0.0-alpha.14/operator/mergeMapTo-support"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/dematerialize": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/debounce": [
      "npm:rxjs@5.0.0-alpha.14/observable/fromPromise",
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/isPromise",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/debounceTime": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/scheduler/asap"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/defaultIfEmpty": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/filter": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/delay": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/Notification",
      "npm:rxjs@5.0.0-alpha.14/scheduler/queue",
      "npm:rxjs@5.0.0-alpha.14/util/isDate"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/distinctUntilChanged": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/expand": [
      "npm:rxjs@5.0.0-alpha.14/operator/expand-support"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/do": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/util/noop",
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/finally": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/Subscription"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/first": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject",
      "npm:rxjs@5.0.0-alpha.14/util/EmptyError"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/last": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject",
      "npm:rxjs@5.0.0-alpha.14/util/EmptyError"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/groupBy": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/Subject",
      "npm:rxjs@5.0.0-alpha.14/util/Map",
      "npm:rxjs@5.0.0-alpha.14/util/FastMap",
      "npm:rxjs@5.0.0-alpha.14/operator/groupBy-support",
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/mapTo": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/materialize": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/Notification"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/ignoreElements": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/util/noop"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/merge": [
      "npm:rxjs@5.0.0-alpha.14/operator/merge-static"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/mergeMap": [
      "npm:rxjs@5.0.0-alpha.14/operator/mergeMap-support"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/multicast": [
      "npm:rxjs@5.0.0-alpha.14/observable/ConnectableObservable"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/mergeAll": [
      "npm:rxjs@5.0.0-alpha.14/operator/mergeAll-support"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/mergeMapTo": [
      "npm:rxjs@5.0.0-alpha.14/operator/mergeMapTo-support"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/observeOn": [
      "npm:rxjs@5.0.0-alpha.14/operator/observeOn-support"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/every": [
      "npm:rxjs@5.0.0-alpha.14/observable/ScalarObservable",
      "npm:rxjs@5.0.0-alpha.14/observable/fromArray",
      "npm:rxjs@5.0.0-alpha.14/observable/throw",
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/partition": [
      "npm:rxjs@5.0.0-alpha.14/util/not",
      "npm:rxjs@5.0.0-alpha.14/operator/filter"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/publish": [
      "npm:rxjs@5.0.0-alpha.14/Subject",
      "npm:rxjs@5.0.0-alpha.14/operator/multicast"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/publishLast": [
      "npm:rxjs@5.0.0-alpha.14/subject/AsyncSubject",
      "npm:rxjs@5.0.0-alpha.14/operator/multicast"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/publishReplay": [
      "npm:rxjs@5.0.0-alpha.14/subject/ReplaySubject",
      "npm:rxjs@5.0.0-alpha.14/operator/multicast"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/publishBehavior": [
      "npm:rxjs@5.0.0-alpha.14/subject/BehaviorSubject",
      "npm:rxjs@5.0.0-alpha.14/operator/multicast"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/retry": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/reduce": [
      "npm:rxjs@5.0.0-alpha.14/operator/reduce-support"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/sample": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/repeat": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/observable/empty"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/single": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject",
      "npm:rxjs@5.0.0-alpha.14/util/EmptyError"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/share": [
      "npm:rxjs@5.0.0-alpha.14/operator/multicast",
      "npm:rxjs@5.0.0-alpha.14/Subject"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/sampleTime": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/scheduler/asap"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/scan": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/retryWhen": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/Subject",
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/skipUntil": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/subscribeOn": [
      "npm:rxjs@5.0.0-alpha.14/observable/SubscribeOnObservable"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/skipWhile": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/skip": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/startWith": [
      "npm:rxjs@5.0.0-alpha.14/observable/fromArray",
      "npm:rxjs@5.0.0-alpha.14/observable/ScalarObservable",
      "npm:rxjs@5.0.0-alpha.14/observable/empty",
      "npm:rxjs@5.0.0-alpha.14/operator/concat-static",
      "npm:rxjs@5.0.0-alpha.14/util/isScheduler"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/switchMap": [
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject",
      "npm:rxjs@5.0.0-alpha.14/OuterSubscriber",
      "npm:rxjs@5.0.0-alpha.14/util/subscribeToResult"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/switch": [
      "npm:rxjs@5.0.0-alpha.14/OuterSubscriber",
      "npm:rxjs@5.0.0-alpha.14/util/subscribeToResult"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/switchMapTo": [
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject",
      "npm:rxjs@5.0.0-alpha.14/OuterSubscriber",
      "npm:rxjs@5.0.0-alpha.14/util/subscribeToResult"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/take": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/util/ArgumentOutOfRangeError",
      "npm:rxjs@5.0.0-alpha.14/observable/empty"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/throttle": [
      "npm:rxjs@5.0.0-alpha.14/observable/fromPromise",
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/isPromise",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/takeWhile": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/throttleTime": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/scheduler/asap"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/timeout": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/scheduler/queue",
      "npm:rxjs@5.0.0-alpha.14/util/isDate"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/takeUntil": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/util/noop"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/timeoutWith": [
      "npm:rxjs@5.0.0-alpha.14/scheduler/queue",
      "npm:rxjs@5.0.0-alpha.14/util/isDate",
      "npm:rxjs@5.0.0-alpha.14/OuterSubscriber",
      "npm:rxjs@5.0.0-alpha.14/util/subscribeToResult"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/toArray": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/windowCount": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/Subject"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/window": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/Subject"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/windowToggle": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/Subject",
      "npm:rxjs@5.0.0-alpha.14/Subscription",
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/windowWhen": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/Subject",
      "npm:rxjs@5.0.0-alpha.14/Subscription",
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/windowTime": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/Subject",
      "npm:rxjs@5.0.0-alpha.14/scheduler/asap"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/zip": [
      "npm:rxjs@5.0.0-alpha.14/operator/zip-static"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/withLatestFrom": [
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject",
      "npm:rxjs@5.0.0-alpha.14/OuterSubscriber",
      "npm:rxjs@5.0.0-alpha.14/util/subscribeToResult"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/zipAll": [
      "npm:rxjs@5.0.0-alpha.14/operator/zip-support"
    ],
    "npm:rxjs@5.0.0-alpha.14/scheduler/AsapScheduler": [
      "npm:rxjs@5.0.0-alpha.14/scheduler/QueueScheduler",
      "npm:rxjs@5.0.0-alpha.14/scheduler/AsapAction",
      "npm:rxjs@5.0.0-alpha.14/scheduler/QueueAction"
    ],
    "npm:crypto-browserify@3.11.0/index": [
      "npm:randombytes@2.0.1",
      "npm:create-hash@1.1.2",
      "npm:create-hmac@1.1.4",
      "npm:browserify-sign@4.0.0/algos",
      "npm:pbkdf2@3.0.4",
      "npm:browserify-cipher@1.0.0",
      "npm:diffie-hellman@5.0.0",
      "npm:browserify-sign@4.0.0",
      "npm:create-ecdh@4.0.0",
      "npm:public-encrypt@4.0.0"
    ],
    "npm:zone.js@0.5.8/lib/utils": [
      "npm:zone.js@0.5.8/lib/keys"
    ],
    "npm:rxjs@5.0.0-alpha.14/observable/ScalarObservable": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject",
      "npm:rxjs@5.0.0-alpha.14/observable/throw",
      "npm:rxjs@5.0.0-alpha.14/observable/empty"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/observeOn-support": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/Notification"
    ],
    "npm:rxjs@5.0.0-alpha.14/observable/IteratorObservable": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/util/root",
      "npm:rxjs@5.0.0-alpha.14/util/SymbolShim",
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject"
    ],
    "github:jspm/nodelibs-buffer@0.1.0": [
      "github:jspm/nodelibs-buffer@0.1.0/index"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/zip-support": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject",
      "npm:rxjs@5.0.0-alpha.14/OuterSubscriber",
      "npm:rxjs@5.0.0-alpha.14/util/subscribeToResult",
      "npm:rxjs@5.0.0-alpha.14/util/SymbolShim"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/mergeMap-support": [
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject",
      "npm:rxjs@5.0.0-alpha.14/util/subscribeToResult",
      "npm:rxjs@5.0.0-alpha.14/OuterSubscriber"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/mergeMapTo-support": [
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject",
      "npm:rxjs@5.0.0-alpha.14/OuterSubscriber",
      "npm:rxjs@5.0.0-alpha.14/util/subscribeToResult"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/expand-support": [
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject",
      "npm:rxjs@5.0.0-alpha.14/OuterSubscriber",
      "npm:rxjs@5.0.0-alpha.14/util/subscribeToResult"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/mergeAll-support": [
      "npm:rxjs@5.0.0-alpha.14/OuterSubscriber",
      "npm:rxjs@5.0.0-alpha.14/util/subscribeToResult"
    ],
    "npm:rxjs@5.0.0-alpha.14/util/Map": [
      "npm:rxjs@5.0.0-alpha.14/util/root",
      "npm:rxjs@5.0.0-alpha.14/util/MapPolyfill"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/reduce-support": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber",
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject"
    ],
    "npm:rxjs@5.0.0-alpha.14/util/subscribeToResult": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/util/SymbolShim",
      "npm:rxjs@5.0.0-alpha.14/InnerSubscriber"
    ],
    "npm:rxjs@5.0.0-alpha.14/observable/SubscribeOnObservable": [
      "npm:rxjs@5.0.0-alpha.14/Observable",
      "npm:rxjs@5.0.0-alpha.14/scheduler/asap",
      "npm:rxjs@5.0.0-alpha.14/util/isNumeric"
    ],
    "npm:rxjs@5.0.0-alpha.14/OuterSubscriber": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/groupBy-support": [
      "npm:rxjs@5.0.0-alpha.14/Subscription",
      "npm:rxjs@5.0.0-alpha.14/Observable"
    ],
    "npm:rxjs@5.0.0-alpha.14/scheduler/AsapAction": [
      "npm:rxjs@5.0.0-alpha.14/util/Immediate",
      "npm:rxjs@5.0.0-alpha.14/scheduler/QueueAction"
    ],
    "npm:rxjs@5.0.0-alpha.14/operator/combineLatest-support": [
      "npm:rxjs@5.0.0-alpha.14/util/tryCatch",
      "npm:rxjs@5.0.0-alpha.14/util/errorObject",
      "npm:rxjs@5.0.0-alpha.14/OuterSubscriber",
      "npm:rxjs@5.0.0-alpha.14/util/subscribeToResult"
    ],
    "npm:create-hmac@1.1.4": [
      "npm:create-hmac@1.1.4/browser"
    ],
    "npm:randombytes@2.0.1": [
      "npm:randombytes@2.0.1/browser"
    ],
    "npm:browserify-cipher@1.0.0": [
      "npm:browserify-cipher@1.0.0/browser"
    ],
    "npm:browserify-sign@4.0.0": [
      "npm:browserify-sign@4.0.0/browser"
    ],
    "npm:pbkdf2@3.0.4": [
      "npm:pbkdf2@3.0.4/browser"
    ],
    "npm:create-ecdh@4.0.0": [
      "npm:create-ecdh@4.0.0/browser"
    ],
    "npm:public-encrypt@4.0.0": [
      "npm:public-encrypt@4.0.0/browser"
    ],
    "npm:diffie-hellman@5.0.0": [
      "npm:diffie-hellman@5.0.0/browser"
    ],
    "npm:browserify-sign@4.0.0/algos": [
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:rxjs@5.0.0-alpha.14/InnerSubscriber": [
      "npm:rxjs@5.0.0-alpha.14/Subscriber"
    ],
    "github:jspm/nodelibs-buffer@0.1.0/index": [
      "npm:buffer@3.5.5"
    ],
    "npm:rxjs@5.0.0-alpha.14/util/Immediate": [
      "npm:rxjs@5.0.0-alpha.14/util/root",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:create-hash@1.1.2": [
      "npm:create-hash@1.1.2/browser"
    ],
    "npm:pbkdf2@3.0.4/browser": [
      "npm:create-hmac@1.1.4",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:randombytes@2.0.1/browser": [
      "github:jspm/nodelibs-buffer@0.1.0",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:public-encrypt@4.0.0/browser": [
      "npm:public-encrypt@4.0.0/publicEncrypt",
      "npm:public-encrypt@4.0.0/privateDecrypt"
    ],
    "npm:browserify-sign@4.0.0/browser": [
      "npm:browserify-sign@4.0.0/algos",
      "npm:create-hash@1.1.2",
      "npm:inherits@2.0.1",
      "npm:browserify-sign@4.0.0/sign",
      "github:jspm/nodelibs-stream@0.1.0",
      "npm:browserify-sign@4.0.0/verify",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:browserify-cipher@1.0.0/browser": [
      "npm:evp_bytestokey@1.0.0",
      "npm:browserify-aes@1.0.5/browser",
      "npm:browserify-des@1.0.0",
      "npm:browserify-des@1.0.0/modes",
      "npm:browserify-aes@1.0.5/modes"
    ],
    "npm:create-ecdh@4.0.0/browser": [
      "npm:elliptic@6.0.2",
      "npm:bn.js@4.5.1",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:create-hmac@1.1.4/browser": [
      "npm:create-hash@1.1.2/browser",
      "npm:inherits@2.0.1",
      "github:jspm/nodelibs-stream@0.1.0",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:diffie-hellman@5.0.0/browser": [
      "npm:diffie-hellman@5.0.0/lib/generatePrime",
      "npm:diffie-hellman@5.0.0/lib/primes.json!github:systemjs/plugin-json@0.1.0",
      "npm:diffie-hellman@5.0.0/lib/dh",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:create-hash@1.1.2/browser": [
      "npm:inherits@2.0.1",
      "npm:create-hash@1.1.2/md5",
      "npm:ripemd160@1.0.1",
      "npm:sha.js@2.4.4",
      "npm:cipher-base@1.0.2",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:buffer@3.5.5": [
      "npm:buffer@3.5.5/index"
    ],
    "npm:evp_bytestokey@1.0.0": [
      "npm:evp_bytestokey@1.0.0/index"
    ],
    "npm:inherits@2.0.1": [
      "npm:inherits@2.0.1/inherits_browser"
    ],
    "npm:browserify-sign@4.0.0/sign": [
      "npm:create-hmac@1.1.4",
      "npm:browserify-rsa@4.0.0",
      "npm:browserify-sign@4.0.0/curves",
      "npm:elliptic@6.0.2",
      "npm:parse-asn1@5.0.0",
      "npm:bn.js@4.5.1",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:public-encrypt@4.0.0/privateDecrypt": [
      "npm:parse-asn1@5.0.0",
      "npm:public-encrypt@4.0.0/mgf",
      "npm:public-encrypt@4.0.0/xor",
      "npm:bn.js@4.5.1",
      "npm:browserify-rsa@4.0.0",
      "npm:create-hash@1.1.2",
      "npm:public-encrypt@4.0.0/withPublic",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "github:jspm/nodelibs-stream@0.1.0": [
      "github:jspm/nodelibs-stream@0.1.0/index"
    ],
    "npm:browserify-sign@4.0.0/verify": [
      "npm:browserify-sign@4.0.0/curves",
      "npm:elliptic@6.0.2",
      "npm:parse-asn1@5.0.0",
      "npm:bn.js@4.5.1",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:browserify-des@1.0.0": [
      "npm:browserify-des@1.0.0/index"
    ],
    "npm:browserify-aes@1.0.5/browser": [
      "npm:browserify-aes@1.0.5/encrypter",
      "npm:browserify-aes@1.0.5/decrypter",
      "npm:browserify-aes@1.0.5/modes"
    ],
    "npm:bn.js@4.5.1": [
      "npm:bn.js@4.5.1/lib/bn"
    ],
    "npm:diffie-hellman@5.0.0/lib/generatePrime": [
      "npm:randombytes@2.0.1",
      "npm:bn.js@4.5.1",
      "npm:miller-rabin@4.0.0"
    ],
    "npm:diffie-hellman@5.0.0/lib/dh": [
      "npm:bn.js@4.5.1",
      "npm:miller-rabin@4.0.0",
      "npm:diffie-hellman@5.0.0/lib/generatePrime",
      "npm:randombytes@2.0.1",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:sha.js@2.4.4": [
      "npm:sha.js@2.4.4/index"
    ],
    "npm:ripemd160@1.0.1": [
      "npm:ripemd160@1.0.1/lib/ripemd160"
    ],
    "npm:elliptic@6.0.2": [
      "npm:elliptic@6.0.2/lib/elliptic"
    ],
    "npm:buffer@3.5.5/index": [
      "npm:base64-js@0.0.8",
      "npm:ieee754@1.1.6",
      "npm:isarray@1.0.0"
    ],
    "npm:cipher-base@1.0.2": [
      "npm:cipher-base@1.0.2/index"
    ],
    "npm:create-hash@1.1.2/md5": [
      "npm:create-hash@1.1.2/helpers"
    ],
    "npm:public-encrypt@4.0.0/publicEncrypt": [
      "npm:parse-asn1@5.0.0",
      "npm:randombytes@2.0.1",
      "npm:create-hash@1.1.2",
      "npm:public-encrypt@4.0.0/mgf",
      "npm:public-encrypt@4.0.0/xor",
      "npm:bn.js@4.5.1",
      "npm:public-encrypt@4.0.0/withPublic",
      "npm:browserify-rsa@4.0.0",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:evp_bytestokey@1.0.0/index": [
      "npm:create-hash@1.1.2/md5",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:public-encrypt@4.0.0/mgf": [
      "npm:create-hash@1.1.2",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:parse-asn1@5.0.0": [
      "npm:parse-asn1@5.0.0/index"
    ],
    "npm:browserify-rsa@4.0.0": [
      "npm:browserify-rsa@4.0.0/index"
    ],
    "npm:public-encrypt@4.0.0/withPublic": [
      "npm:bn.js@4.5.1",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "github:jspm/nodelibs-stream@0.1.0/index": [
      "npm:stream-browserify@1.0.0"
    ],
    "npm:browserify-des@1.0.0/index": [
      "npm:cipher-base@1.0.2",
      "npm:des.js@1.0.0",
      "npm:inherits@2.0.1",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:browserify-aes@1.0.5/encrypter": [
      "npm:browserify-aes@1.0.5/aes",
      "npm:cipher-base@1.0.2",
      "npm:inherits@2.0.1",
      "npm:browserify-aes@1.0.5/modes",
      "npm:evp_bytestokey@1.0.0",
      "npm:browserify-aes@1.0.5/streamCipher",
      "npm:browserify-aes@1.0.5/authCipher",
      "npm:browserify-aes@1.0.5/modes/ecb",
      "npm:browserify-aes@1.0.5/modes/cbc",
      "npm:browserify-aes@1.0.5/modes/cfb",
      "npm:browserify-aes@1.0.5/modes/cfb8",
      "npm:browserify-aes@1.0.5/modes/cfb1",
      "npm:browserify-aes@1.0.5/modes/ofb",
      "npm:browserify-aes@1.0.5/modes/ctr",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:browserify-aes@1.0.5/decrypter": [
      "npm:browserify-aes@1.0.5/aes",
      "npm:cipher-base@1.0.2",
      "npm:inherits@2.0.1",
      "npm:browserify-aes@1.0.5/modes",
      "npm:browserify-aes@1.0.5/streamCipher",
      "npm:browserify-aes@1.0.5/authCipher",
      "npm:evp_bytestokey@1.0.0",
      "npm:browserify-aes@1.0.5/modes/ecb",
      "npm:browserify-aes@1.0.5/modes/cbc",
      "npm:browserify-aes@1.0.5/modes/cfb",
      "npm:browserify-aes@1.0.5/modes/cfb8",
      "npm:browserify-aes@1.0.5/modes/cfb1",
      "npm:browserify-aes@1.0.5/modes/ofb",
      "npm:browserify-aes@1.0.5/modes/ctr",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:miller-rabin@4.0.0": [
      "npm:miller-rabin@4.0.0/lib/mr"
    ],
    "npm:sha.js@2.4.4/index": [
      "npm:sha.js@2.4.4/sha",
      "npm:sha.js@2.4.4/sha1",
      "npm:sha.js@2.4.4/sha224",
      "npm:sha.js@2.4.4/sha256",
      "npm:sha.js@2.4.4/sha384",
      "npm:sha.js@2.4.4/sha512"
    ],
    "npm:ripemd160@1.0.1/lib/ripemd160": [
      "github:jspm/nodelibs-buffer@0.1.0",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:base64-js@0.0.8": [
      "npm:base64-js@0.0.8/lib/b64"
    ],
    "npm:isarray@1.0.0": [
      "npm:isarray@1.0.0/index"
    ],
    "npm:cipher-base@1.0.2/index": [
      "github:jspm/nodelibs-stream@0.1.0",
      "npm:inherits@2.0.1",
      "github:jspm/nodelibs-string_decoder@0.1.0",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:elliptic@6.0.2/lib/elliptic": [
      "npm:elliptic@6.0.2/package.json!github:systemjs/plugin-json@0.1.0",
      "npm:elliptic@6.0.2/lib/elliptic/utils",
      "npm:brorand@1.0.5",
      "npm:elliptic@6.0.2/lib/elliptic/hmac-drbg",
      "npm:elliptic@6.0.2/lib/elliptic/curve/index",
      "npm:elliptic@6.0.2/lib/elliptic/curves",
      "npm:elliptic@6.0.2/lib/elliptic/ec/index",
      "npm:elliptic@6.0.2/lib/elliptic/eddsa/index"
    ],
    "npm:ieee754@1.1.6": [
      "npm:ieee754@1.1.6/index"
    ],
    "npm:create-hash@1.1.2/helpers": [
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:parse-asn1@5.0.0/index": [
      "npm:parse-asn1@5.0.0/asn1",
      "npm:parse-asn1@5.0.0/aesid.json!github:systemjs/plugin-json@0.1.0",
      "npm:parse-asn1@5.0.0/fixProc",
      "npm:browserify-aes@1.0.5",
      "npm:pbkdf2@3.0.4",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:browserify-rsa@4.0.0/index": [
      "npm:bn.js@4.5.1",
      "npm:randombytes@2.0.1",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:browserify-aes@1.0.5/authCipher": [
      "npm:browserify-aes@1.0.5/aes",
      "npm:cipher-base@1.0.2",
      "npm:inherits@2.0.1",
      "npm:browserify-aes@1.0.5/ghash",
      "npm:buffer-xor@1.0.3",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:browserify-aes@1.0.5/aes": [
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:des.js@1.0.0": [
      "npm:des.js@1.0.0/lib/des"
    ],
    "npm:browserify-aes@1.0.5/modes/cfb": [
      "npm:buffer-xor@1.0.3",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:browserify-aes@1.0.5/modes/cfb8": [
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:browserify-aes@1.0.5/streamCipher": [
      "npm:browserify-aes@1.0.5/aes",
      "npm:cipher-base@1.0.2",
      "npm:inherits@2.0.1",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:stream-browserify@1.0.0": [
      "npm:stream-browserify@1.0.0/index"
    ],
    "npm:browserify-aes@1.0.5/modes/cfb1": [
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:browserify-aes@1.0.5/modes/ctr": [
      "npm:buffer-xor@1.0.3",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:miller-rabin@4.0.0/lib/mr": [
      "npm:bn.js@4.5.1",
      "npm:brorand@1.0.5"
    ],
    "npm:browserify-aes@1.0.5/modes/ofb": [
      "npm:buffer-xor@1.0.3",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:sha.js@2.4.4/sha": [
      "npm:inherits@2.0.1",
      "npm:sha.js@2.4.4/hash",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:sha.js@2.4.4/sha224": [
      "npm:inherits@2.0.1",
      "npm:sha.js@2.4.4/sha256",
      "npm:sha.js@2.4.4/hash",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:sha.js@2.4.4/sha1": [
      "npm:inherits@2.0.1",
      "npm:sha.js@2.4.4/hash",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:sha.js@2.4.4/sha384": [
      "npm:inherits@2.0.1",
      "npm:sha.js@2.4.4/sha512",
      "npm:sha.js@2.4.4/hash",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:browserify-aes@1.0.5/modes/cbc": [
      "npm:buffer-xor@1.0.3"
    ],
    "npm:sha.js@2.4.4/sha256": [
      "npm:inherits@2.0.1",
      "npm:sha.js@2.4.4/hash",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:sha.js@2.4.4/sha512": [
      "npm:inherits@2.0.1",
      "npm:sha.js@2.4.4/hash",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:brorand@1.0.5": [
      "npm:brorand@1.0.5/index"
    ],
    "npm:elliptic@6.0.2/lib/elliptic/utils": [
      "npm:bn.js@4.5.1"
    ],
    "npm:elliptic@6.0.2/lib/elliptic/hmac-drbg": [
      "npm:hash.js@1.0.3",
      "npm:elliptic@6.0.2/lib/elliptic"
    ],
    "npm:elliptic@6.0.2/lib/elliptic/curves": [
      "npm:hash.js@1.0.3",
      "npm:elliptic@6.0.2/lib/elliptic",
      "npm:elliptic@6.0.2/lib/elliptic/precomputed/secp256k1"
    ],
    "npm:elliptic@6.0.2/lib/elliptic/ec/index": [
      "npm:bn.js@4.5.1",
      "npm:elliptic@6.0.2/lib/elliptic",
      "npm:elliptic@6.0.2/lib/elliptic/ec/key",
      "npm:elliptic@6.0.2/lib/elliptic/ec/signature"
    ],
    "github:jspm/nodelibs-string_decoder@0.1.0": [
      "github:jspm/nodelibs-string_decoder@0.1.0/index"
    ],
    "npm:elliptic@6.0.2/lib/elliptic/curve/index": [
      "npm:elliptic@6.0.2/lib/elliptic/curve/base",
      "npm:elliptic@6.0.2/lib/elliptic/curve/short",
      "npm:elliptic@6.0.2/lib/elliptic/curve/mont",
      "npm:elliptic@6.0.2/lib/elliptic/curve/edwards"
    ],
    "npm:elliptic@6.0.2/lib/elliptic/eddsa/index": [
      "npm:hash.js@1.0.3",
      "npm:elliptic@6.0.2/lib/elliptic",
      "npm:elliptic@6.0.2/lib/elliptic/eddsa/key",
      "npm:elliptic@6.0.2/lib/elliptic/eddsa/signature"
    ],
    "npm:parse-asn1@5.0.0/asn1": [
      "npm:asn1.js@4.2.1"
    ],
    "npm:browserify-aes@1.0.5": [
      "npm:browserify-aes@1.0.5/browser"
    ],
    "npm:parse-asn1@5.0.0/fixProc": [
      "npm:evp_bytestokey@1.0.0",
      "npm:browserify-aes@1.0.5",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:buffer-xor@1.0.3": [
      "npm:buffer-xor@1.0.3/index"
    ],
    "npm:browserify-aes@1.0.5/ghash": [
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:des.js@1.0.0/lib/des": [
      "npm:des.js@1.0.0/lib/des/utils",
      "npm:des.js@1.0.0/lib/des/cipher",
      "npm:des.js@1.0.0/lib/des/des",
      "npm:des.js@1.0.0/lib/des/cbc",
      "npm:des.js@1.0.0/lib/des/ede"
    ],
    "npm:stream-browserify@1.0.0/index": [
      "github:jspm/nodelibs-events@0.1.1",
      "npm:inherits@2.0.1",
      "npm:readable-stream@1.1.13/readable",
      "npm:readable-stream@1.1.13/writable",
      "npm:readable-stream@1.1.13/duplex",
      "npm:readable-stream@1.1.13/transform",
      "npm:readable-stream@1.1.13/passthrough"
    ],
    "npm:hash.js@1.0.3": [
      "npm:hash.js@1.0.3/lib/hash"
    ],
    "npm:elliptic@6.0.2/lib/elliptic/ec/signature": [
      "npm:bn.js@4.5.1",
      "npm:elliptic@6.0.2/lib/elliptic"
    ],
    "npm:sha.js@2.4.4/hash": [
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:elliptic@6.0.2/lib/elliptic/ec/key": [
      "npm:bn.js@4.5.1"
    ],
    "github:jspm/nodelibs-string_decoder@0.1.0/index": [
      "npm:string_decoder@0.10.31"
    ],
    "npm:elliptic@6.0.2/lib/elliptic/curve/base": [
      "npm:bn.js@4.5.1",
      "npm:elliptic@6.0.2/lib/elliptic"
    ],
    "npm:elliptic@6.0.2/lib/elliptic/curve/edwards": [
      "npm:elliptic@6.0.2/lib/elliptic/curve/index",
      "npm:elliptic@6.0.2/lib/elliptic",
      "npm:bn.js@4.5.1",
      "npm:inherits@2.0.1"
    ],
    "npm:elliptic@6.0.2/lib/elliptic/curve/mont": [
      "npm:elliptic@6.0.2/lib/elliptic/curve/index",
      "npm:bn.js@4.5.1",
      "npm:inherits@2.0.1",
      "npm:elliptic@6.0.2/lib/elliptic"
    ],
    "npm:elliptic@6.0.2/lib/elliptic/eddsa/signature": [
      "npm:bn.js@4.5.1",
      "npm:elliptic@6.0.2/lib/elliptic"
    ],
    "npm:elliptic@6.0.2/lib/elliptic/curve/short": [
      "npm:elliptic@6.0.2/lib/elliptic/curve/index",
      "npm:elliptic@6.0.2/lib/elliptic",
      "npm:bn.js@4.5.1",
      "npm:inherits@2.0.1"
    ],
    "npm:elliptic@6.0.2/lib/elliptic/eddsa/key": [
      "npm:elliptic@6.0.2/lib/elliptic"
    ],
    "npm:asn1.js@4.2.1": [
      "npm:asn1.js@4.2.1/lib/asn1"
    ],
    "npm:des.js@1.0.0/lib/des/des": [
      "npm:minimalistic-assert@1.0.0",
      "npm:inherits@2.0.1",
      "npm:des.js@1.0.0/lib/des"
    ],
    "npm:des.js@1.0.0/lib/des/cbc": [
      "npm:minimalistic-assert@1.0.0",
      "npm:inherits@2.0.1"
    ],
    "npm:des.js@1.0.0/lib/des/ede": [
      "npm:minimalistic-assert@1.0.0",
      "npm:inherits@2.0.1",
      "npm:des.js@1.0.0/lib/des"
    ],
    "npm:buffer-xor@1.0.3/index": [
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "github:jspm/nodelibs-events@0.1.1": [
      "github:jspm/nodelibs-events@0.1.1/index"
    ],
    "npm:readable-stream@1.1.13/duplex": [
      "npm:readable-stream@1.1.13/lib/_stream_duplex"
    ],
    "npm:readable-stream@1.1.13/readable": [
      "npm:readable-stream@1.1.13/lib/_stream_readable",
      "npm:stream-browserify@1.0.0/index",
      "npm:readable-stream@1.1.13/lib/_stream_writable",
      "npm:readable-stream@1.1.13/lib/_stream_duplex",
      "npm:readable-stream@1.1.13/lib/_stream_transform",
      "npm:readable-stream@1.1.13/lib/_stream_passthrough"
    ],
    "npm:readable-stream@1.1.13/transform": [
      "npm:readable-stream@1.1.13/lib/_stream_transform"
    ],
    "npm:readable-stream@1.1.13/writable": [
      "npm:readable-stream@1.1.13/lib/_stream_writable"
    ],
    "npm:des.js@1.0.0/lib/des/cipher": [
      "npm:minimalistic-assert@1.0.0",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:hash.js@1.0.3/lib/hash": [
      "npm:hash.js@1.0.3/lib/hash/utils",
      "npm:hash.js@1.0.3/lib/hash/common",
      "npm:hash.js@1.0.3/lib/hash/sha",
      "npm:hash.js@1.0.3/lib/hash/ripemd",
      "npm:hash.js@1.0.3/lib/hash/hmac"
    ],
    "npm:readable-stream@1.1.13/passthrough": [
      "npm:readable-stream@1.1.13/lib/_stream_passthrough"
    ],
    "npm:string_decoder@0.10.31": [
      "npm:string_decoder@0.10.31/index"
    ],
    "npm:minimalistic-assert@1.0.0": [
      "npm:minimalistic-assert@1.0.0/index"
    ],
    "github:jspm/nodelibs-events@0.1.1/index": [
      "npm:events@1.0.2"
    ],
    "npm:asn1.js@4.2.1/lib/asn1": [
      "npm:bn.js@4.5.1",
      "npm:asn1.js@4.2.1/lib/asn1/api",
      "npm:asn1.js@4.2.1/lib/asn1/base/index",
      "npm:asn1.js@4.2.1/lib/asn1/constants/index",
      "npm:asn1.js@4.2.1/lib/asn1/decoders/index",
      "npm:asn1.js@4.2.1/lib/asn1/encoders/index"
    ],
    "npm:readable-stream@1.1.13/lib/_stream_transform": [
      "npm:readable-stream@1.1.13/lib/_stream_duplex",
      "npm:core-util-is@1.0.2",
      "npm:inherits@2.0.1",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:readable-stream@1.1.13/lib/_stream_duplex": [
      "npm:core-util-is@1.0.2",
      "npm:inherits@2.0.1",
      "npm:readable-stream@1.1.13/lib/_stream_readable",
      "npm:readable-stream@1.1.13/lib/_stream_writable",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:readable-stream@1.1.13/lib/_stream_writable": [
      "github:jspm/nodelibs-buffer@0.1.0",
      "npm:core-util-is@1.0.2",
      "npm:inherits@2.0.1",
      "npm:stream-browserify@1.0.0/index",
      "npm:readable-stream@1.1.13/lib/_stream_duplex",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:readable-stream@1.1.13/lib/_stream_passthrough": [
      "npm:readable-stream@1.1.13/lib/_stream_transform",
      "npm:core-util-is@1.0.2",
      "npm:inherits@2.0.1"
    ],
    "npm:readable-stream@1.1.13/lib/_stream_readable": [
      "npm:isarray@0.0.1",
      "github:jspm/nodelibs-buffer@0.1.0",
      "github:jspm/nodelibs-events@0.1.1",
      "npm:stream-browserify@1.0.0/index",
      "npm:core-util-is@1.0.2",
      "npm:inherits@2.0.1",
      "@empty",
      "npm:readable-stream@1.1.13/lib/_stream_duplex",
      "npm:string_decoder@0.10.31",
      "github:jspm/nodelibs-process@0.1.2"
    ],
    "npm:hash.js@1.0.3/lib/hash/common": [
      "npm:hash.js@1.0.3/lib/hash"
    ],
    "npm:hash.js@1.0.3/lib/hash/ripemd": [
      "npm:hash.js@1.0.3/lib/hash"
    ],
    "npm:hash.js@1.0.3/lib/hash/sha": [
      "npm:hash.js@1.0.3/lib/hash"
    ],
    "npm:hash.js@1.0.3/lib/hash/utils": [
      "npm:inherits@2.0.1"
    ],
    "npm:hash.js@1.0.3/lib/hash/hmac": [
      "npm:hash.js@1.0.3/lib/hash"
    ],
    "npm:string_decoder@0.10.31/index": [
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:events@1.0.2": [
      "npm:events@1.0.2/events"
    ],
    "npm:asn1.js@4.2.1/lib/asn1/api": [
      "npm:asn1.js@4.2.1/lib/asn1",
      "npm:inherits@2.0.1",
      "github:jspm/nodelibs-vm@0.1.0"
    ],
    "npm:asn1.js@4.2.1/lib/asn1/encoders/index": [
      "npm:asn1.js@4.2.1/lib/asn1/encoders/der",
      "npm:asn1.js@4.2.1/lib/asn1/encoders/pem"
    ],
    "npm:core-util-is@1.0.2": [
      "npm:core-util-is@1.0.2/lib/util"
    ],
    "npm:isarray@0.0.1": [
      "npm:isarray@0.0.1/index"
    ],
    "npm:asn1.js@4.2.1/lib/asn1/constants/index": [
      "npm:asn1.js@4.2.1/lib/asn1/constants/der"
    ],
    "npm:asn1.js@4.2.1/lib/asn1/base/index": [
      "npm:asn1.js@4.2.1/lib/asn1/base/reporter",
      "npm:asn1.js@4.2.1/lib/asn1/base/buffer",
      "npm:asn1.js@4.2.1/lib/asn1/base/node"
    ],
    "npm:asn1.js@4.2.1/lib/asn1/decoders/index": [
      "npm:asn1.js@4.2.1/lib/asn1/decoders/der",
      "npm:asn1.js@4.2.1/lib/asn1/decoders/pem"
    ],
    "github:jspm/nodelibs-vm@0.1.0": [
      "github:jspm/nodelibs-vm@0.1.0/index"
    ],
    "npm:core-util-is@1.0.2/lib/util": [
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:asn1.js@4.2.1/lib/asn1/encoders/der": [
      "npm:inherits@2.0.1",
      "github:jspm/nodelibs-buffer@0.1.0",
      "npm:asn1.js@4.2.1/lib/asn1"
    ],
    "npm:asn1.js@4.2.1/lib/asn1/encoders/pem": [
      "npm:inherits@2.0.1",
      "github:jspm/nodelibs-buffer@0.1.0",
      "npm:asn1.js@4.2.1/lib/asn1",
      "npm:asn1.js@4.2.1/lib/asn1/encoders/der"
    ],
    "npm:asn1.js@4.2.1/lib/asn1/base/reporter": [
      "npm:inherits@2.0.1"
    ],
    "npm:asn1.js@4.2.1/lib/asn1/constants/der": [
      "npm:asn1.js@4.2.1/lib/asn1/constants/index"
    ],
    "npm:asn1.js@4.2.1/lib/asn1/base/buffer": [
      "npm:inherits@2.0.1",
      "npm:asn1.js@4.2.1/lib/asn1/base/index",
      "github:jspm/nodelibs-buffer@0.1.0"
    ],
    "npm:asn1.js@4.2.1/lib/asn1/decoders/pem": [
      "npm:inherits@2.0.1",
      "github:jspm/nodelibs-buffer@0.1.0",
      "npm:asn1.js@4.2.1/lib/asn1",
      "npm:asn1.js@4.2.1/lib/asn1/decoders/der"
    ],
    "npm:asn1.js@4.2.1/lib/asn1/base/node": [
      "npm:asn1.js@4.2.1/lib/asn1/base/index",
      "npm:minimalistic-assert@1.0.0"
    ],
    "npm:asn1.js@4.2.1/lib/asn1/decoders/der": [
      "npm:inherits@2.0.1",
      "npm:asn1.js@4.2.1/lib/asn1"
    ],
    "github:jspm/nodelibs-vm@0.1.0/index": [
      "npm:vm-browserify@0.0.4"
    ],
    "npm:vm-browserify@0.0.4": [
      "npm:vm-browserify@0.0.4/index"
    ],
    "npm:vm-browserify@0.0.4/index": [
      "npm:indexof@0.0.1"
    ],
    "npm:indexof@0.0.1": [
      "npm:indexof@0.0.1/index"
    ]
  },

  map: {
    "angular2": "npm:angular2@2.0.0-alpha.52",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "crypto": "github:jspm/nodelibs-crypto@0.1.0",
    "es6-shim": "github:es-shims/es6-shim@0.34.0",
    "reflect-metadata": "npm:reflect-metadata@0.1.2",
    "rxjs": "npm:rxjs@5.0.0-alpha.14",
    "systemjs": "npm:systemjs@0.19.6",
    "traceur": "github:jmcriffey/bower-traceur@0.0.92",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.92",
    "typescript": "npm:typescript@1.7.3",
    "zone.js": "npm:zone.js@0.5.10",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.5"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:angular2@2.0.0-alpha.52": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "es6-promise": "npm:es6-promise@3.0.2",
      "es6-shim": "npm:es6-shim@0.33.13",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "reflect-metadata": "npm:reflect-metadata@0.1.2",
      "rxjs": "npm:rxjs@5.0.0-alpha.14",
      "zone.js": "npm:zone.js@0.5.8"
    },
    "npm:asn1.js@4.2.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.5.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:browserify-aes@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.0": {
      "bn.js": "npm:bn.js@4.5.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.5.1",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.0.2",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.5.5": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.5.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.0.2"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.4"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.0",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@5.0.0": {
      "bn.js": "npm:bn.js@4.5.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:elliptic@6.0.2": {
      "bn.js": "npm:bn.js@4.5.1",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:es6-module-loader@0.17.8": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "when": "npm:when@3.7.5"
    },
    "npm:es6-promise@3.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:es6-shim@0.33.13": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.5.1",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.2.1",
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.5.1",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:reflect-metadata@0.1.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:rxjs@5.0.0-alpha.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:systemjs@0.19.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "es6-module-loader": "npm:es6-module-loader@0.17.8",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "when": "npm:when@3.7.5"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:when@3.7.5": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:zone.js@0.5.10": {
      "es6-promise": "npm:es6-promise@3.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:zone.js@0.5.8": {
      "es6-promise": "npm:es6-promise@3.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
