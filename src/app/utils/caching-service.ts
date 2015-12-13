import {Http, Response} from 'angular2/http'
import {Injectable} from 'angular2/angular2'
import {Observable} from 'rxjs/Observable';

@Injectable()
abstract class CachingService {
    private static CACHED: any;
    protected src: string;

    constructor(protected http: Http) {}

    private cached() {
        return CachingService.CACHED
            ? Observable.of(CachingService.CACHED)
            : null;
    }

    private load() {
        return this.http.get(this.src).map(
            (res: Response) => {
                return CachingService.CACHED = res.json();
            }
        );
    }

    public get() {
        return this.cached() || this.load();
    }
}

export default CachingService;