const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/app/app.module.js'
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'src/index.html'
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    port: 3000,
    publicPath: "/dist/"
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.html$/,
      use: 'raw-loader'
    }

    ]
  }
};

