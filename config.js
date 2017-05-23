/**
 * Created by root on 5/13/17.
 */
var path=require('path');
var webpack=require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/dev-server',
      './app/index.js'
  ],
    output: {
      filename: 'bundle.js',
        path:path.join(__dirname,'dist'),
        publicPath:'/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                include: path.join(__dirname, 'app')
            }

        ]
    }
};