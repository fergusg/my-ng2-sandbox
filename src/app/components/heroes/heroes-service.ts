import {Http, Response} from 'angular2/http'
import {Injectable} from 'angular2/angular2'
import {Observable} from 'rxjs/Observable';
import CachingService from "../../utils/caching-service";

export default class HeroesService extends CachingService {
    constructor(protected http: Http) {
        super(http);
        this.src = "./heroes.json";
    }
}