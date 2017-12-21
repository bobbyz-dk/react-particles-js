const webpack = require( 'webpack' );

const production = process.env.NODE_ENV === "production";

const plugins = production ? 
	[
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
		    debug: false,
		    minimize: true,
		    sourceMap: false,
		    output: {
		        comments: false
		    },
		    compressor: {
		        warnings: false
		    },
		    mangle: true,
            beautify: true
		}),
		new webpack.DefinePlugin({
		    'process.env': {
		        'NODE_ENV': JSON.stringify( 'production' )
		    }
		})
	] :
	[];

const typescriptLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader!ts-loader'
};

const jsonLoader = {
    test: /\.json$/,
    loader: 'json-loader'
};

const loaders = [
    typescriptLoader,
    jsonLoader
];

const config = {
    context: __dirname,
    devtool: production ? false : "source-map-loader",
    resolve: {
        extensions: [ ".ts", ".tsx", ".js" ]
    },
    entry: "./src/index.ts",
    output: {
        path: __dirname + '/lib',
        filename: "particles.js",
        library: "Particles",
        libraryTarget: 'umd',
        pathinfo: false
    },
    target: 'web',
    module: {
        loaders
    },
    externals: [
        {
            react: {
                commonjs: "react",
                commonjs2: "react",
                amd: "react",
                root: "React"
            }
        }
        
    ],
    plugins
};

module.exports = config;