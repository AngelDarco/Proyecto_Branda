/* eslint-disable no-undef */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    app: "./app.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      minify: true,
    }),
    new HtmlWebpackPlugin({
      template: "./html/acne.html",
      filename: "./acne.html",
      minify: true,
    }),

    new HtmlWebpackPlugin({
      template: "./html/antioxidantes.html",
      filename: "./antioxidantes.html",
      minify: true,
    }),
    new HtmlWebpackPlugin({
      template: "./html/carro.html",
      filename: "./carro.html",
      minify: true,
    }),
    new HtmlWebpackPlugin({
      template: "./html/catalogo.html",
      filename: "./catalogo.html",
      minify: true,
    }),
    new HtmlWebpackPlugin({
      template: "./html/favorites.html",
      filename: "./favorites.html",
      minify: true,
    }),
    new HtmlWebpackPlugin({
      template: "./html/hidratacion.html",
      filename: "./hidratacion.html",
      minify: true,
    }),
    new HtmlWebpackPlugin({
      template: "./html/login.html",
      filename: "./login.html",
      minify: true,
    }),
    new HtmlWebpackPlugin({
      template: "./html/maquillaje.html",
      filename: "./maquillaje.html",
      minify: true,
    }),
    new HtmlWebpackPlugin({
      template: "./html/nosotros.html",
      filename: "./nosotros.html",
      minify: true,
    }),

    new HtmlWebpackPlugin({
      template: "./html/recomendaciones.html",
      filename: "./recomendaciones.html",
      minify: true,
    }),
    new HtmlWebpackPlugin({
      template: "./html/registro.html",
      filename: "./registro.html",
      minify: true,
    }),
    new HtmlWebpackPlugin({
      template: "./html/tonicos.html",
      filename: "./tonicos.html",
      minify: true,
    }),
  ],
};
