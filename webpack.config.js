const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    output:{
        filename: 'main.js',
        path:path.resolve(__dirname,'dist'),
        clean: true,
    },
    module:{
        rules: [
        {
        test: /\.css$/i,
        use:['style-loader', 'css-loader'],
       },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html',
        }),
    ],
    devServer: {
        static: path.resolve(__dirname, 'dist'), // Serve content from 'dist'
        open: true,                              // Automatically open browser
        compress: true,                          // Enable gzip compression
        port: 8080,                              // Run on port 8080
      },
    devtool:'inline-source-map',
    mode:'development'
}