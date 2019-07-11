/*
* 构建
*/
const path = require('path');
const cfg = require('../package.json');
process.env.NODE_ENV = "production";
module.exports = {
  mode: 'production',
  entry: {
    main: path.resolve(__dirname, '../index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].min.js',
    library: cfg.name,
    libraryTarget: 'umd',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: 'babel-loader',
      }, {
        test: /\.css$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      }, {
        test: /\.less$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          {
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
          }, {
            loader: 'less-loader',
          }
        ],
      }, {
        test: /\.(png|jpe?g|git)(\?|$)/,
        loader: 'url-loader'
      }, {
        test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)/,
        exclude: /^node_modules$/,
        loader: 'file-loader',//?name=[name].[ext]

      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.css', '.json'],
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
    'immutable': {
      commonjs2: 'immutable',
      commonjs: 'immutable',
      amd: 'immutable',
      root: 'immutable',
    },
    'antd': {
      commonjs2: 'antd',
      commonjs: 'antd',
      amd: 'antd',
      root: 'antd',
    }
  }
}