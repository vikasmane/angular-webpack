var webpack = require('webpack');

var src = __dirname + "/src";
var dist = __dirname + "/dist";

module.exports = {
    entry: src + "/app/index.js",
    output: {
        path: dist + '/app',
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
           {
                test: /\.js?/,
                include: src,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "stage-2"]
                }
           }
        ]
    }
};