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
            {
                test: /\.mp3$/,
                include: path.resolve("../client/src/js/sounds"),
                loader: "file-loader",
                options: {
                    name: "notification.mp3",
                },
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
};
