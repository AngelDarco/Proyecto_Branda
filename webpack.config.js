
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
            
            { test: /\.m?js$/i,
              exclude: /(node_modules|bower_components)/,
              use:{
                loader: 'babel-loader', 
                options:{
                    presets:['@babel/preset-env']
                  }
                },
              },

            { test: /\.css$/i,
              use: ["style-loader", "css-loader"] },
            
            { test: /\.html$/i,
              loader: "html-loader"},

            /* { test: /\.php$/,
              loader:[
                'html-minify',
                'php-loader'
              ]
            } */




            ]
    }
}