import {Http} from 'angular2/http'
import CachingService from "../../utils/caching-service";

export default class HeroesService extends CachingService {
    constructor(protected http: Http) {
        super(http);
        this.src = "./heroes.json";
    }
}