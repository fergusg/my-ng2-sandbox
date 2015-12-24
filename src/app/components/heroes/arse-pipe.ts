import {Pipe, PipeTransform} from "angular2/core";

@Pipe({
    name: "isAnArse"
})
export default class ArsePipe implements PipeTransform {
    public transform(value: string): string {
        return /o$/.test(value) ? `${value} is an ARSE` : value;
    }
}
