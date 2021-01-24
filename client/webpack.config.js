// refer setup from https://medium.com/swlh/a-complete-webpack-setup-for-react-e56a2edf78ae
const path = require("path");

module.exports = {
    entry: "/src/js/app.js",
    output: {
        path: path.resolve("../public/js"),
        filename: "bundle.js",
        chunkFilename: "vendor.js",
        publicPath: "",
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            // check the url loader module
            // {
            // 	test: /\.(png|jpe?g|gif)$/,
            // 	loader: 'url-loader?limit=10000&name=img/[name].[ext]'
            // }
        ],
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
};
