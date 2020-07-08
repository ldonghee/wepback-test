const path = require("path");

// ES6 모듈(ESM) 시스템이 아니라 노드(Common.js) 모듈 시스템
module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png)$/,
        loader: "url-loader",
        options: {
          name: "[name].[ext]?[hash]",
          publicPath: "./dist",
          limit: 7000, // 10KB 미만은 URL-LOADER 그 이상은 FILE-LOAER 처리
        },
      },
    ],
  },
};
