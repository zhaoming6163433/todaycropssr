var webpack = require('webpack')

module.exports = {
  /*
  ** Headers of the page 模板插值
  */
  head: {
    title: 'ssrnuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { name:'renderer',content:'webkit'}//兼容360浏览器
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  **配置初始化样式文件可放公共css
  */
  css:['~assets/css/normailze.css','element-ui/lib/theme-default/index.css'],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#50bcb6' },
  plugins: [
      { src: '~plugins/element-ui', ssr: true }
  ],
  
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor:['axios','element-ui','jquery'],//防止打包两次
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery'
      })
    ],
    loaders:[
      {
        test:/\.(png|jpe?g|gif|svg)$/,
        loader:"url-loader",
        query:{
          limit:10240,
          name:'img/[name].[hash].[ext]'
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ],
    extend (config, ctx) {
      /*if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }*/
    }
  }
}
