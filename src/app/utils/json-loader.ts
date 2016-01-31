import {Observable} from "rxjs/Observable";
import {Injectable} from "angular2/core";
import {Http, Response} from "angular2/http";

@Injectable()
class JsonLoader {
    constructor(private http: Http) {
        console.log("JsonLoader");
    }

    public load(src: string): Observable<any> {
        return this.http.get(src).map(
            (res: Response): any => res.json()
        );
    }
}

export default JsonLoader;
