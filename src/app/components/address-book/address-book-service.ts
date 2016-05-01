import {CachingService} from "../../utils/caching-service";

export default class AddressBookService extends CachingService {
    protected get src(): string {
        return "./people.json";
    }
}
