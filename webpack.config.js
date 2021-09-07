import css from "./css/estilos.css";

module.exports={
    module: {
        rules:[
            {
                test: /\.css/i,
                use: [
                    "style-loader", "css-loader"
                     ],
            },
        ],
    }
}