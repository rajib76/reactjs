const path=require('path');

var config = {
    entry: path.join(__dirname,'main.js'),
    mode: 'development',
    output:{
        path:path.join(__dirname,'dist'),
        filename:'index.js'

    },
    module:{
        rules:[{
            test:/\.js?$/,
            exclude:/node_modules/,
            loader:'babel-loader',
            options:{
                presets:['@babel/preset-env','@babel/preset-react'] 
            }
        }]
    }
}
module.exports=config;