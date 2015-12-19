import {Component, View, platform} from "angular2/core";
import {WORKER_APP_PLATFORM, WORKER_APP_APPLICATION} from "angular2/platform/worker_app";

@Component({
  selector: "hello-world"
})
@View({
  template: "<h1>Hello {{name}}</h1>"
})
export class HelloWorld {
  name: string = "Jane";
}

platform([WORKER_APP_PLATFORM])
.application([WORKER_APP_APPLICATION])
.bootstrap(HelloWorld);
