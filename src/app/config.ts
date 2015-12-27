import {Injectable} from "angular2/core";

@Injectable()
export default class Config {
    get debounceTime(): number {
        return 100;
    }
}
