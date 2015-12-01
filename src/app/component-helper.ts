declare var System: any; // SystemJS imported globally

export default function LoadComponentAsync(path: string, name: string  = 'default') {
    // System.import returns an object with keys = exported object (class, etc)
    // "default" returns the default object
    return () => System.import(path).then((c: any) => c[name]);
}
