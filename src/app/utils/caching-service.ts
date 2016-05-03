import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
abstract class CachingService {
    protected static CACHE: Map<string, any> = new Map<string, any>();
    protected src: string;
    private cache: Map<string, any> = CachingService.CACHE;

    constructor(private http: Http) {
    }

    public get(fromCache: boolean = true): Observable<any> {
        if (!fromCache) {
            return this.load();
        }
        return this.cached() || this.load();
    }

    private cached(): Observable<any> {
        let r = this.cache.get(this.src);
        return r ? Observable.of(r) : null;
    }

    private load(): Observable<any> {
        return this.http.get(this.src).map(
            (res: Response) => this.cache.set(this.src, res.json()).get(this.src)
        );
    }
}

export {CachingService};
