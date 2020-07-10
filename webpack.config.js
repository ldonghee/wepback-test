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
};