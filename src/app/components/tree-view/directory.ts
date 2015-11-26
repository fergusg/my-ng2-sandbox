export default class Directory {

    public expanded = true;
    public checked = false;
    public name: string;
    public files: Array<string>;
    public directories: Array<Directory>;

    constructor(
        name: string,
        files: Array<string>,
        directories: Array<Directory> = null
    ) {
        this.name = name;
        this.files = files;
        this.directories = directories;
    }

    public toggle() {
        this.expanded = !this.expanded;
    }

    public check() {
        this.checked = !this.checked;
        this.checkRecursive(this.checked);
    }

    private checkRecursive(state: boolean) {
        if (this.directories) {
            this.directories.forEach(d => {
                d.checked = state;
                d.checkRecursive(state);
            });
        }
    }
}
