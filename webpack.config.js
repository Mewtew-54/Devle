const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        // publicPath: '/'
    },
    mode: 'development',
    devServer: {
        port: 8080,
        host: 'localhost',
        proxy: {
            "/api/**": {
                target: 'http://localhost:8080',
                router: () => 'http://localhost:3000',
                secure: false,
                changeOrigin: true
            }
        },
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'build'),
            publicPath: '/'
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: 
                    [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ]
                  }
                }
            },
            {
                test: /\.[ac]ss$/i,
                use:
                [
                    "style-loader",
                    "css-loader"
                ],
            }
        ]
    }
}