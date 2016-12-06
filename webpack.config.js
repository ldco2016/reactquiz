module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: __dirname,
		filename: 'app/js/main.js',
		publicPath: '/'
	},
	devServer: {
		inline: true,
		contentBase: __dirname,
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel',
			exclude: /(node_modules|bower_components)/,
			query: {
				presets: ['es2015', 'react']
			}
		}]
	}
};