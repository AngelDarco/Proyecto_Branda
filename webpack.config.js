const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
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
        ]
    },
    plugins:[
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname,'./src/index.html')
      })
    ]

};

module.exports = config;

/* module.exports={
    mode: 'development',
    entry: './src/index.js',
    devServer:{
       static:{
        directory: path.join(__dirname,'public')
      }, 
      compress: true,
      port: 4000,
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
            ]
    }
} */