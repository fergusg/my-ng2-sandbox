import {Component, CORE_DIRECTIVES, Input} from 'angular2/angular2';
import Directory from './directory';

@Component({
    selector: 'tree-view',
    inputs: ['directories: directories'],
    templateUrl: './app/components/tree-view/tree-view.html',
    directives: [TreeView, CORE_DIRECTIVES],
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
