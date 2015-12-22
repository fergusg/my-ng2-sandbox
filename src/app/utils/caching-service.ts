import {Http, Response} from 'angular2/http'
import {Injectable} from 'angular2/core'
import {Observable} from 'rxjs/Observable';

@Injectable()
abstract class CachingService {
    protected static CACHE = new Map<string, any>();
    protected src: string;

    constructor(protected http: Http) {}

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

    public get(): Observable<any> {
        return this.cached() || this.load();
    }
}

export default CachingService;