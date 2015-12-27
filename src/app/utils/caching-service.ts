import {Http, Response} from "angular2/http";
import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Observable";

interface ICache {
    get(): Observable<any>;
}

@Injectable()
abstract class CachingService implements ICache {
    protected static CACHE: Map<string, any> = new Map<string, any>();
    protected src: string;
    protected http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    public get(): Observable<any> {
        return this.cached() || this.load();
    }

    private cached(): Observable<any> {
        let r = CachingService.CACHE.get(this.src);
        return r ? Observable.of(r) : null;
    }

    private load(): Observable<any> {
        return this.http.get(this.src).map(
            (res: Response) => {
                let r = res.json();
                CachingService.CACHE.set(this.src, r);
                return r;
            }
        );
    }
}

export {CachingService, ICache};
