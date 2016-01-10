import {Injectable} from "angular2/core";

@Injectable()
export default class Config {
    static get debounceTime(): number {
        return 100;
    }
}
