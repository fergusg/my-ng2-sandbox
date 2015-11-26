import {Http, Response} from 'angular2/http'
import {Injectable} from 'angular2/angular2'

@Injectable()
export default class AddressBookService {
    constructor(private http:Http) {
    }

    public getEntries() {
        return this.http.get('./people.json').map((res:Response) => res.json());
    }
}