const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
	mode = 'production'
}

module.exports = {
	mode: mode,
	output: {
		assetModuleFilename: "assets/[name][ext][query]",
		clean: true,
	},
	devtool: 'source-map',
	plugins: [
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: "./src/index.pug",
			filename: "index.html",
			
		}),
		new HtmlWebpackPlugin({
			template: "./src/about.pug",
			filename: "about.html",
		}),
		new HtmlWebpackPlugin({
			template: "./src/invest.pug",
			filename: "invest.html",
		}),
		new HtmlWebpackPlugin({
			template: "./src/ucode.pug",
			filename: "ucode.html",
		}),
		new HtmlWebpackPlugin({
			template: "./src/team.pug",
			filename: "team.html",
		}),
	],

	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					(mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [
									[
										"postcss-preset-env",
										{
											// Options
										},
									],
								],
							},
						},
					},
					"sass-loader",
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.pug$/,
				loader: 'pug-loader',
				exclude: /(node_modules|bower_components)/,
			},
		]
	},
}