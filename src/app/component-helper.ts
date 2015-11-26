declare var System:any; // SystemJS imported globally

export default class ComponentHelper {
    static LoadComponentAsync(name:string, path:string) {
        return System.import(path).then((c:any) => {
            console.log(c);
            return c[name];
        });
    }
}
