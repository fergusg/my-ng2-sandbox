import {Http, Response} from 'angular2/http'
import {Injectable} from 'angular2/angular2'
import {Observable} from 'rxjs/Observable'; // .map() & .of() imported in index.ts

@Injectable()
export default class AddressBookService {
    private static PEOPLE: any;
    private static SRC = "./people.json";

    constructor(private http: Http) {}

    private static cached() {
        return AddressBookService.PEOPLE
            ? Observable.of(AddressBookService.PEOPLE)
            : null;
    }

    private static load(http: Http) {
        return http.get(AddressBookService.SRC).map(
            (res: Response) => {
                return AddressBookService.PEOPLE = res.json();
            }
        );
    }

    public getEntries() {
        const ABS = AddressBookService;
        return ABS.cached() || ABS.load(this.http);
    }
}