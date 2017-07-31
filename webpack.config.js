const {resolve} = require('path')
//const webpackValidator = require('webpack-validator')

module.exports = (env) => {
    return {
            context: resolve('src'),
            entry: './bootstrap.js',
            output: {
                path: resolve('dist'),
                filename: 'bundle.js',
                publicPath: '/dist/'
            },
            devtool: env.prod ? 'source-map': 'eval'//use source-map for prod and eval for dev build
    }

}