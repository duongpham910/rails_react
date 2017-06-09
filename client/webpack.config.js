const webpack = require("webpack");

const paths = {
  src: __dirname + "/src",
  dest: __dirname + "/../app/assets/javascripts",
};

module.exports = {
  entry: paths.src + "/root",
  output: {
    path: paths.dest,
    filename: "react-app.js",
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
   module: {
        loaders: [
            {
                test: /\.js?/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    },
  plugins: [
     new webpack.ProvidePlugin({
       React: "react",
       update: "react-addons-update",
       mui: "material-ui",
       t: "counterpart"
     })
  ],
};
