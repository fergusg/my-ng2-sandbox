import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {Response} from 'angular2/http'

import BookService from './address-book-service';
import TitleService from './address-book-title-service';

const __TEMPLATE = `
    <h1>Dependency Injection</h1>
    <h2>{{title}}</h2>

    <div *ng-if="!result">loading...</div>
    <table class="table" *ng-if="result">
        <tr *ng-for="#person of result.people">
            <td class="name">{{person.name}}</td>
            <td class="address">{{person.address}}</td>
        </tr>
    </table>
`;

const __CSS = `
    td.name {
        color:green;
    }
    td.address {
        color:blue;
    }
`;

@Component({
    selector: 'address-book',
    directives: [CORE_DIRECTIVES],
    template: __TEMPLATE,
    providers: [BookService, TitleService],
    styles: [__CSS]
})
export default class AddressBook {
    public result: Object;
    public title: String;

    constructor(addressBookService: BookService, addressBookTitleService: TitleService) {
        addressBookService.getEntries().subscribe(
            (res: Response) => this.result = res,
            () => null
        );
        this.setTitle(addressBookTitleService);
        console.log('callcount', addressBookTitleService.callCount);
    }

    setTitle(addressBookTitleService: TitleService) {
        this.title = addressBookTitleService.getTitle();
    }
}

