import {Component, Input} from "angular2/core";
import Directory from "./directory";

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
    templateUrl: "./app/components/tree-view/tree-view.html",
})
export default class TreeView {
    @Input() protected directories: Array<Directory>;
}
