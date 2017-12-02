const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Uglify = require('uglifyjs-webpack-plugin');
const glob = require('glob');
const PurifyCSSPlugin = require('purfycss-webpack');
const webpack = require('webpack');
const entry = require("./webpack_config/entry_webpack");
const copyWebpackPlugin = ("copy-webpack-plugin");

module.exports={
    entry:entry,
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js'
    },
    module:{
        rules:[
            {
                test:/\.css/,
                // use:['style-loader','css-loader']
                // use:[
                //     {
                //         loader:'style-loader'
                //     },
                //     {
                //         loader:'css-loader'
                //     }
                // ]
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use:[{
                        loader:"css-loader",
                        options:{importLoders:1}
                    },'process-loader']
                })
                
            },
            {
                test:/\.(png|gif|jpg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit: 300000000,
                            outputPath:'img/'
                        }
                    }
                ]
            },
            {
                test:/\.scss$/,
                user:['style-loader','css-loader','sass-loader']
            },
            {
                test:/\.(jsx|js)$/, 
                use:{
                    loader:"babel-loader",
                    options:{
                        presrts:[
                            "es2015","react"
                        ]
                    }
                },
                exclude:/node_modules/
            }

        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template: "./src/index.html"
        }),
        new ExtractTextPlugin('css/index.css'),
        // new Uglify()

       new PurifyCSSPlugin({
           path:glob.sync(path.join(__dirname,'src/*.html')),

       }),
       new webpack.BannerPlugin('hahahha'),
       new webpack.ProvidePlugin({
           $:'jQuery'
       }),
       new webpack.optimize.CommonChunkPlugin({
           name:'jquery',
           filename:'assets/js/jquery.js',
           minChunks:2
       }),
    // new webpack.optimize.CommonChunkPlugin({
    //     name:['jquery','vue']
    //     filename:'assets/js/[name].js',
    //     minChunks:2
    // }),
    // new copyWebpackPlugin([{
    //     from:
    //     to:
    // }])

    ],
    devServer:{
        contentBase: path.resolve(__dirname,'dist'),
        host:'localhost',
        compress: true,
        port: 8081
    },
    watchOptions:{
        poll:1000,//1秒后自动打包
        aggregateTimeout:500,//0.5秒内重复保存不自动编译
        ignored:/node_modules/
    }
}
