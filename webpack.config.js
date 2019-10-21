module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: ["./src/app.tsx"],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".scss"]
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  devServer: {
    contentBase: "./dist",
    host: "0.0.0.0",
    port: "8080",
    allowedHosts: ["*"],
    historyApiFallback: true
  }
};
