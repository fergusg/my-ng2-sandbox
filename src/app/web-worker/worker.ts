import "angular2/web_worker/ui";

import {WORKER_RENDER_PLATFORM, WORKER_RENDER_APP, WORKER_SCRIPT}
from "angular2/platform/worker_render";
import {platform, Provider} from "angular2/core";

platform([WORKER_RENDER_PLATFORM])
.application([
	WORKER_RENDER_APP,
	new Provider(WORKER_SCRIPT, {useValue: "loader.js"})]);