const webpack = require("webpack");

module.exports = {
	entry: "./app.js",
	output: {
		filename: "bundle.js",
		path: __dirname + "/dist",
		publicPath: "/test/"
	},
	resolve: {
		extensions: [" ", ".js", ".jsx"]
	},
	devtool:"inline-source-map",
	devServer:{
		hot:true,
		inline:true,
		port:8090
	},
	module: {
		loaders: [
			{ test: /\.js$/, loaders: ["babel-loader"], exclude: /node_modules/ },
			{ test: /\.css$/, loader: "css-loader" },
			{ test: /\.less$/, loader: "css-loader!less-loader" },
			{ test: /\.eot(\?v=d+\.\d+\.d+)?$/, loader: "file-loader" },
			{ test: /\.(woff|woff2)$/, loader: "url-loader?prefix=font/&limit=5000" },
			{ test: /\.ttf(\?v=d+\.\d+\.d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
			{ test: /\.svg(\?v=d+\.\d+\.d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" }
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	]
};