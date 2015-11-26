declare var System: any; // SystemJS imported globally

export default function LoadComponentAsync(name: string, path: string) {
    return function() {
        return System.import(path).then((c: any) => {
            console.log(c);
            return c[name];
        });
    }
}
