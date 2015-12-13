import {Http, Response} from 'angular2/http'
import {Injectable} from 'angular2/angular2'
import {Observable} from 'rxjs/Observable';

@Injectable()
abstract class CachingService {
    protected static CACHE = new Map<string, any>();
    protected src: string;

    constructor(protected http: Http) {}

    private cached() {
        let r = CachingService.CACHE.get(this.src);
        return r ? Observable.of(r) : null;
    }

    private load() {
        return this.http.get(this.src).map(
            (res: Response) => {
                let r = res.json();
                CachingService.CACHE.set(this.src, r);
                return r;
            }
        );
    }

    public get() {
        return this.cached() || this.load();
    }
}

export default CachingService;