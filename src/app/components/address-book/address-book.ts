import {Component} from 'angular2/core';
import {Response} from 'angular2/http'

import BookService from './address-book-service';
import TitleService from './address-book-title-service';

const __TEMPLATE = `
    <h1>Dependency Injection</h1>
    <h2>{{title}}</h2>

    <div *ngIf="!result">loading...</div>
    <table class="table" *ngIf="result">
        <tr *ngFor="#person of result.people">
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
    template: __TEMPLATE,
    providers: [BookService, TitleService],
    styles: [__CSS]
})
class AddressBook {
    public result: any;
    public title: string;

    constructor(addressBookService: BookService, addressBookTitleService: TitleService) {
        addressBookService.get().subscribe(
            (res:any) => this.result = res,
            ():any => null
        );
        this.setTitle(addressBookTitleService);
        console.log('callcount', addressBookTitleService.callCount);
    }

    setTitle(addressBookTitleService: TitleService) {
        this.title = addressBookTitleService.getTitle();
    }
}

export default AddressBook;