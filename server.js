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
    },
    proxy:[{path: '/api/**', target: 'http://127.0.0.1:8081/',},],
}).listen(3000, '127.0.0.1',err =>{
    if (err) {
        console.log(err)
    } else
        {
            console.log("listen on 3000")
        }
});