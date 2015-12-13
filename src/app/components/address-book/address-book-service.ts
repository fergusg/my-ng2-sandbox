import {Http} from 'angular2/http'
import CachingService from "../../utils/caching-service";

export default class AddressBookService extends CachingService {
    constructor(protected http: Http) {
        super(http);
        this.src = "./people.json";
    }
}