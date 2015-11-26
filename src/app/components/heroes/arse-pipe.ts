import {Pipe, PipeTransform} from 'angular2/angular2';

@Pipe({
	name: 'isAnArse'
})
export default class ArsePipe implements PipeTransform{
	transform(value: string, args: any[]) {
		if (/o$/.test(value)) {
			return `${value} is an ARSE`;
		}
		return value;
	}
}