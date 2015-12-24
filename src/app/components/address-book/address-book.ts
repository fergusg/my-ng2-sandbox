import {Component} from "angular2/core";

import BookService from "./address-book-service";
import TitleService from "./address-book-title-service";

const __TEMPLATE: string = `
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

const __CSS: string = `
    td.name {
        color:green;
    }
    td.address {
        color:blue;
    }
`;

@Component({
    providers: [BookService, TitleService],
    selector: "address-book",
    styles: [__CSS],
    template: __TEMPLATE,
})
class AddressBook {
    public result: any;
    public title: string;

    constructor(bookService: BookService, titleService: TitleService) {
        bookService.get().subscribe(
            (res: any): any => this.result = res,
            (): any => null
        );
        this.setTitle(titleService);
        console.log("callcount", titleService.callCount);
    }

    public setTitle(titleService: TitleService): void {
        this.title = titleService.getTitle();
    }
}

export default AddressBook;
