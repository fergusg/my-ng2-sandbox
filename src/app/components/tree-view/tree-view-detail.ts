import {Component, Input} from "angular2/core";
import Directory from "./directory";

//declare var System: any;
let template: any = require(`./tree-view.html!text`);

@Component({
    directives: [TreeView],
    selector: "tree-view",
    styles: [`
        ul {
            list-style-type: none;
        }

        .icon-button {
            cursor: pointer;
            color: red;
            font-weight: bold;
        }
    `,
    ],
    template: template,
})
export default class TreeView {
    @Input() protected directories: Array<Directory>;
}
