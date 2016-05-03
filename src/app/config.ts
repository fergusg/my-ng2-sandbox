import {Injectable} from "@angular/core";

@Injectable()
export default class Config {
    static get debounceTime(): number {
        return 100;
    }
}
