const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: path.resolve(__dirname, "../src"),
  entry: "./index.ts",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../public/favicon.png"),
          to: path.resolve(__dirname, "../dist"),
        },
        {
          from: path.resolve(__dirname, "../src/assets/sounds"),
          to: path.resolve(__dirname, "../dist/assets/sounds"),
        },
        {
          from: path.resolve(__dirname, "../src/assets/icons"),
          to: path.resolve(__dirname, "../dist/assets/icons"),
        },
        {
          from: path.resolve(__dirname, "../src/assets/images"),
          to: path.resolve(__dirname, "../dist/assets/images"),
        },
      ],
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require("postcss-preset-env"),
                  require("autoprefixer"),
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(mp3|wav)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(ts)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
