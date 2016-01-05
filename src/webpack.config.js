var path = require("path");
var __dirname;
module.exports = {
    entry: {
        app: ["./app/index.ts"]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.tsx?/, loader: "webpack-typescript?target=ES5&jsx=react" },
            { test: /\.html/, loader: "html" },
        ]
    },
    resolve: {
        extensions: ["", ".ts", ".js"]
    }
};