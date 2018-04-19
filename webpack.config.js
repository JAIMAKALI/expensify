
var path=require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports=(env)=>{
  var isProduction=env==='production';
  var CSSExtract=new ExtractTextPlugin('styles.css');
return {
    entry: './src/index.js',
    output: {
     path: path.join(__dirname,'public'),
       filename: 'bundle.js',
    },
    devServer: {
       historyApiFallback:true,
       contentBase:path.join(__dirname,'public')
    },
    devtool:isProduction?'source-map':"cheap-module-eval-source-map",
    module: {
       loaders: [
          {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['es2015', 'react'],
                plugins: ["transform-class-properties","transform-object-rest-spread"]
             }
          },
          {
              test:/\.s?css$/,
              use: CSSExtract.extract({
                use: ['css-loader', 'sass-loader']
              })
          }
        
       ]
    },
   plugins:[CSSExtract]
 }
}

