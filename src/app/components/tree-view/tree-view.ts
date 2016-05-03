import {Component, Input} from "@angular/core";
import TreeView from "./tree-view-detail";
import Directory from "./directory";

@Component({
    directives: [TreeView],
    template: `
        <h1>Recursive TreeView</h1>
        <tree-view [directories]="directories"></tree-view>
    `,
})
export class TreeViewComponent {
    @Input() public directories: Array<Directory>;

    constructor() {
        const fall2014a: Directory = new Directory(
            "Fall 2014 (a)",
            ["image1.jpg", "image2.jpg", "image3.jpg"]
        );
        const fall2014b: Directory = new Directory(
            "Fall 2014 (b)",
            ["image1.jpg", "image2.jpg", "image3.jpg"]
        );
        const fall2014: Directory = new Directory(
            "Fall 2014",
            ["image1.jpg", "image2.jpg", "image3.jpg"],
            [fall2014a, fall2014b]
        );
        const summer2014: Directory = new Directory(
            "Summer 2014",
            ["image10.jpg", "image20.jpg", "image30.jpg"]
        );
        const pics: Directory = new Directory(
            "Pictures",
            null,
            [summer2014, fall2014]
        );

        const music: Directory = new Directory("Music", ["song1.mp3", "song2.mp3"]);

        this.directories = [pics, music];
    }
}
