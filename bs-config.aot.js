module.exports = {
	port: 3100,
	server: {
		baseDir: "dist",
		routes: {
			"/node_modules": "node_modules"
		},
		//middleware: {
			// overrides the fallback middleware to use index-aot
			//1: require('connect-history-api-fallback')({ index: '/index.html' })
		//}
	}
};
