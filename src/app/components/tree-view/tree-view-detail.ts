import {Component, Input} from 'angular2/core';
import Directory from './directory';

@Component({
    selector: 'tree-view',
    inputs: ['directories: directories'],
    templateUrl: './app/components/tree-view/tree-view.html',
    directives: [TreeView],
    styles: [`
        ul {
            list-style-type: none;
        }

        .icon-button {
            cursor: pointer;
            color: red;
            font-weight: bold;
        }
    `]
})

export default class TreeView {
    @Input('directories') public directories: Array<Directory>;
}
