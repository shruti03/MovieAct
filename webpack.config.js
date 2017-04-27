const path = require('path');

module.exports = {
    context: path.join(__dirname, 'public'),
    entry: [
        './js/Main.js',
    ],
    output: {
        path: path.join(__dirname, 'www'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }, ],
    },
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules'),
        ],
    },
};