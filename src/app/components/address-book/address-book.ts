import {Component} from "angular2/core";

import BookService from "./address-book-service";

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
    providers: [BookService],
    selector: "address-book",
    styles: [__CSS],
    template: __TEMPLATE,
})
class AddressBook {
    protected title: string= "My Address Book";
    private result: any;

    constructor(bookService: BookService) {
        bookService.get().subscribe(
            (res: any): any => this.result = res,
            (): any => null
        );
    }
}

export default AddressBook;
