declare var System:any;

importScripts(
	"node_modules/es6-shim/es6-shim.js",
	"node_modules/systemjs/dist/system.src.js"
);

import "angular2/web_worker/worker.js";
System.import("app");