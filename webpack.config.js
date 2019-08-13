const path = require('path');

module.exports = [
  // {
  //   entry: './src/index.ts',
  //   module: {
  //     rules: [
  //       {
  //         test: /\.tsx?$/,
  //         use: 'ts-loader',
  //         exclude: /node_modules/
  //       }
  //     ]
  //   },
  //   resolve: {
  //     extensions: ['.tsx', '.ts', '.js']
  //   },
  //   output: {
  //     filename: 'order-es2015.js',
  //     path: path.resolve(__dirname, 'dist')
  //   },
  //   devServer: {
  //     contentBase: path.join(__dirname, 'dist'),
  //     compress: true,
  //     port: 9000
  //   }
  // }
  {
    entry: './src/index.js',
    output: {
      filename: 'order-es5.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',

            options: {
              plugins: ['@babel/plugin-proposal-class-properties'],
              presets: [
                '@babel/preset-react',
                ['@babel/preset-env',
                  {
                    targets: {
                      browsers: [
                        /**
                         *  Browser List: https://bit.ly/2FvLWtW
                         *  `defaults` setting gives us IE11 and others at ~86% coverage
                         */
                        'defaults'
                      ]
                    },
                    useBuiltIns: 'usage',
                    corejs: 3,
                    modules: false
                  }]
              ]
            }
          }
        }
      ]
    }
  },
  {
    entry: './src/index.js',
    output: {
      filename: 'order-es2015.js',
      path: path.resolve(__dirname, 'dist')
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: ['@babel/plugin-proposal-class-properties'],
              presets: [
                '@babel/preset-react',
                ['@babel/preset-env',
                  {
                    targets: {
                      browsers: [
                        /**
                         *  Browser List: https://bit.ly/2Yjs58M
                         */
                        'Edge >= 16',
                        'Firefox >= 60',
                        'Chrome >= 61',
                        'Safari >= 11',
                        'Opera >= 48'
                      ]
                    },
                    useBuiltIns: 'usage',
                    corejs: 3,
                    modules: false
                  }]
              ]
            }
          }
        }
      ]
    }
  }
];
