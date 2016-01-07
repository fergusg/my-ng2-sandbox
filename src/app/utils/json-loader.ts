import {Observable} from "rxjs/Observable";
import {Http, Response} from "angular2/http";

function jsonLoader(http: Http, src: string): Observable<any> {
    "use strict";
    return http.get(src).map(
        (res: Response) => res.json()
    );
}

export default jsonLoader;
