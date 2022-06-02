const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	mode: 'development',
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@styles': path.resolve(__dirname, 'src/styles/'),
			'@assets': path.resolve(__dirname, 'src/assets/'),
			'@components': path.resolve(__dirname, 'src/components/'),
			'@pages': path.resolve(__dirname, 'src/pages/'),
			'@services': path.resolve(__dirname, 'src/services/'),
			'@routes': path.resolve(__dirname, 'src/routes/')
		},
		fallback: {
			"fs": false,
			"tls": false,
			"net": false,
			"path": false,
			"zlib": false,
			"http": false,
			"https": false,
			"stream": false,
			"crypto": false,
			"querystring": false,
			"url": false,
			"buffer": false,
			"util": false
		  } 
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
			{
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
				type: 'asset'
            }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
	],
	devServer: {
        historyApiFallback: true,
		port: 3000
    }
}