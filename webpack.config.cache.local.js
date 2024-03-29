var path = require('path')
const ModuleFederationPlugin = require('webpack').container
  .ModuleFederationPlugin
const httpNode = require('./webpack/http-node')

var serverConfig = {
  target: httpNode,
  entry: ['@babel/polyfill', path.resolve(__dirname, 'src/index.js')],
  output: {
    path: path.resolve(__dirname, 'cache'),
    publicPath: 'https://localhost:8001/',
    libraryTarget: 'commonjs'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js']
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'distributed-cache',
      library: { type: 'commonjs-module' },
      filename: 'remoteEntry.js',
      exposes: {
        './model-cache': './src/domain',
        './adapter-cache': './src/adapters',
        './service-cache': './src/services',
        './port-cache': './src/domain/ports',
        './event-bus': './src/services/event-bus'
      },
      shared: {
        axios: {
          eager: true
        },
        'smartystreets-javascript-sdk': {
          eager: true
        },
        kafkajs: {
          eager: true
        }
      }
    })
  ]
}

module.exports = [serverConfig]
