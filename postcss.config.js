module.exports = {
	plugins: [
		require('postcss-import')({
			path: __dirname
		}),
		require('postcss-cssnext')({
			browsers: ['Chrome >= 31', 'Firefox >= 31', 'IE > 9', 'Safari >= 8'],
			url: false
		}),
		require('postcss-nested')
	]
};
