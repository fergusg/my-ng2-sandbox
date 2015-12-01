import {Component, NgFor, NgIf, Input, CORE_DIRECTIVES} from 'angular2/angular2';
import TreeView from './tree-view';
import Directory from './directory';

@Component({
    template: `
        <h1>Recursive TreeView</h1>
        <tree-view [directories]="directories"></tree-view>
    `,
    directives: [CORE_DIRECTIVES, TreeView]
})
export default class TreeViewComponent {
    @Input() public directories: Array<Directory>;

    constructor() {
        const fall2014_a = new Directory(
            'Fall 2014 (a)',
            ['image1.jpg', 'image2.jpg', 'image3.jpg']
        );
        const fall2014_b = new Directory(
            'Fall 2014 (b)',
            ['image1.jpg', 'image2.jpg', 'image3.jpg']
        );
        const fall2014 = new Directory(
            'Fall 2014',
            ['image1.jpg', 'image2.jpg', 'image3.jpg'],
            [fall2014_a, fall2014_b]
        );
        const summer2014 = new Directory(
            'Summer 2014',
            ['image10.jpg', 'image20.jpg', 'image30.jpg']
        );
        const pics = new Directory(
            'Pictures',
            null,
            [summer2014, fall2014]
        );

        const music = new Directory('Music', ['song1.mp3', 'song2.mp3']);

        this.directories = [pics, music];
    }
}