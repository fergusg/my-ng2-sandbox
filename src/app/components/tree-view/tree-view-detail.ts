import {Component, Input} from "angular2/core";
import Directory from "./directory";

// let template = require(`./tree-view-detail.html!text`);

declare var module: any;

@Component({
    directives: [TreeView],
    selector: "tree-view",
    moduleId: module.id,
    templateUrl: "./tree-view-detail.html",
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
    ]
})
export default class TreeView {
    @Input() protected directories: Array<Directory>;
}
