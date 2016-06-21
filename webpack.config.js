const path = require('path');

module.exports = {
    "entry": [
        './src/index.js'
    ],
    "output": {
        "path": path.join(__dirname, 'build'),
        "filename": "bundle.js"
    },
    devtool: "source-map",
    "module": {
        "loaders": [
            {
                "test": /.js?$/,
                "loader": 'babel-loader',
                "exclude": /node_modules/
            },
            {
                "test": /\.scss$/,
                "loaders": ["style", "css?sourceMap", "sass?sourceMap"]
            },
            {
                test: /\.json$/,
                loader: 'json',
            }
        ]
    },
    devServer: {
        contentBase: './build',
        headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Credentials": "true"}
    }
};