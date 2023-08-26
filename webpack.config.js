const path = require('path');

module.exports = {
  entry: './src/resources/js/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public/js'),
  },
  module: {
    rules: [
      {
        use: ["style-loader", "css-loader", "sass-loader"],
        test: /\.(css|sass|scss)$/,
        exclude: /node_modules/,
      },
      {
        type: "asset",
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
      }
    ],
  },
  mode: 'development',
};
