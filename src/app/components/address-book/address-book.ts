import {Component} from "angular2/core";

import BookService from "./address-book-service";

interface IPerson {
    name: string;
    address: string;
}

const __TEMPLATE: string = `
    <h1>Dependency Injection</h1>
    <h2>{{title}}</h2>

    <div *ngIf="!people">loading...</div>
    <table class="table" *ngIf="people">
        <tr *ngFor="#person of people">
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
    selector: "address-book",
    providers: [BookService],
    styles: [__CSS],
    template: __TEMPLATE,
})
class AddressBook {
    protected title: string = "My Address Book";
    private people: IPerson[];

    constructor(bookService: BookService) {
        bookService.get().subscribe(
            (res: IPerson[]): void => { this.people = res; },
            (): any => null
        );
    }
}

export {AddressBook};
