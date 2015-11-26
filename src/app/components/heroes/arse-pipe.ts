import {Pipe, PipeTransform} from 'angular2/angular2';

@Pipe({
	name: 'isAnArse'
})
export default class ArsePipe implements PipeTransform {
	transform(value: string) {
		return /o$/.test(value) ? `${value} is an ARSE` : value;
	}
}