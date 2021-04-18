const path = require('path');

module.exports = {
    mode: 'development',
    entry: './js/app.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, '/'),
        compress: true,
        port: 9000,
        publicPath: "/public/js/",
        watchContentBase: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}