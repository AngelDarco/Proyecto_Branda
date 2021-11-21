
const path = require('path');

module.exports={

    devServer:{
        port: 8080,
    },

    output:{
        path: path.resolve(__dirname,'build')
    },

    module: {
        rules:[
            { test: /\.css$/i,
              use: ["style-loader", "css-loader"] },

            { test: /\.js$/i,
              loader: 'babel-loader', },
            
              { test: /\.html$/i,
              loader: "html-loader"}



              
            ]
    }
}