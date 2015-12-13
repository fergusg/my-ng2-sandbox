import {Http, Response} from 'angular2/http'
import {Injectable} from 'angular2/angular2'
import {Observable} from 'rxjs/Observable';

@Injectable()
export default class HeroesService {
    private static HEROES: any;
    private static SRC = "./heroes.json";

    constructor(private http: Http) {}

    private static cached() {
        return HeroesService.HEROES
            ? Observable.of(HeroesService.HEROES)
            : null;
    }

    private static load(http: Http) {
        return http.get(HeroesService.SRC).map(
            (res: Response) => {
                return HeroesService.HEROES = res.json();
            }
        );
    }

    public getHeroes() {
        const HS = HeroesService;
        return HS.cached() || HS.load(this.http);
    }
}