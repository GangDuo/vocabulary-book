const path = require('path')
 
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'public_html'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
              use: {
                loader: "babel-loader",
                options: {
                  presets: [
                    [
                      "@babel/preset-env",
                      {
                        useBuiltIns: 'usage',
                        corejs: 3
                      }
                    ],
                    "@babel/preset-react"
                  ]
                }
              },
      
              // アプリのjavascriptsのパスを指定し、
              // 指定したパスでのファイルだけトランスパイルさせます。
              include: [
                path.resolve(__dirname, "src"),
              ],
              exclude: [
                /(node_modules)/,
                path.resolve(__dirname, "build"),
                path.resolve(__dirname, "public"),
                path.resolve(__dirname, "public_html"),
              ],
              // `.js` と `.jsx` というファイルのエクステンションを指定します。
              test:/\.jsx?$/,
            },
            {
                test: /\.css$/,
                use: [
                  {
                    loader: "style-loader"
                  },
                  {
                    loader: "css-loader",
                  }
                ]
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [],
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
    },
};