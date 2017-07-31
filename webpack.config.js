const {resolve} = require('path')
//const webpackValidator = require('webpack-validator')

module.exports = () => {
    return {
            context: resolve('src'),
            entry: './bootstrap.js',
            output: {
                filename: 'bundle.js'
            }
    }

}