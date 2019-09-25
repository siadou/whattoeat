/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 15:10:20
 * @LastEditTime: 2019-09-25 15:10:20
 * @LastEditors: your name
 */
// vue.config.js
const path = require('path')
//const fs = require('fs')
//const webpack = require('webpack')

const resolve = dir => path.join(__dirname, '.', dir)
module.exports = {
  configureWebpack: {
    //plugins: [
    //  new MyAwesomeWebpackPlugin()
    //]
  }
  ,
    chainWebpack: config => {
      config.resolve
      .alias
        .set('@', resolve('src'))
        .set('api', resolve('src/api'))
        .set('assets', resolve('src/assets'))
        .set('plugins', resolve('src/plugins'))
        .set('util', resolve('src/util'))
        .set('modules', resolve('src/modules'))
    }
}