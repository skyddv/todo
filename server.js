/**
 * Created by root on 5/13/17.
 */
const webpack = require('webpack');
const devserver = require('webpack-dev-server');
const config = require('./config');

new devserver(webpack(config),{
   publicPath:config.output.publicPath,
    hot:true,
    stats: {
       chunks:false
    }
}).listen(8080, '0.0.0.0',err =>{
    if (err) {
        console.log(err)
    } else
        {
            console.log("listen on 8080")
        }
});