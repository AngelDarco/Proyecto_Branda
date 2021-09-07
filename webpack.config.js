

const path = require('path');

module.exports={
    output:{
        path: path.resolve(__dirname,'build')
    },
    module: {
        rules:[
            { test: /\.css$/i,
              use: ["style-loader", "css-loader"] },
            { test: /\.js$/i,
              loader: 'babel-loader', }
        ]
    }
}