const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "build")
    },
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/react"],
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath : './img'
        },
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: true
            },
          },
          "sass-loader"
        ],
      },
      
      
    ],
  },
  // plugins: [
	// 	new MiniCssExtractPlugin({
	// 		filename: 'style.css'
	// 	}),
	// 	new FixStyleOnlyEntriesPlugin(),
	// ],
}