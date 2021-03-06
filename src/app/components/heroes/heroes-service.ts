import {Http} from "@angular/http";
import {CachingService} from "../../utils/caching-service";

export default class HeroesService extends CachingService {
    constructor(http: Http) {
        super(http);
        this.src = "./heroes.json";
    }
}
