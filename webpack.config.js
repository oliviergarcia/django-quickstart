const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: './scss/app.scss',
    output: {
        path: path.resolve(__dirname, 'backend/static'),
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            //MiniCssExtractPlugin.loader, 
            {
                loader: 'file-loader',
                options: {
                    name: './css/[name].css',
                }
            },
            {
                loader: 'extract-loader'
            },
            {
                loader: 'css-loader'
            },
            {
                loader: 'postcss-loader'
            },
            {
                loader: 'sass-loader'
            }
          ],
        },
      ],
    },
    optimization: {
      minimizer: [
        // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
        // `...`,
        new CssMinimizerPlugin(),
      ],
    },
    plugins: [new MiniCssExtractPlugin()],
  };