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

    public toggle(): void {
        this.expanded = !this.expanded;
    }

    public check(): void {
        this.checked = !this.checked;
        this.checkRecursive(this.checked);
    }

    private checkRecursive(state: boolean): void {
        if (this.directories) {
            this.directories.forEach((d: Directory) => {
                d.checked = state;
                d.checkRecursive(state);
            });
        }
    }
}
