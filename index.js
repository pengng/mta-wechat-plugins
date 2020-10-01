import MTA from 'mta-wechat-analysis'
const MTAWechatPlugins = {}

MTAWechatPlugins.install = function (Vue, options) {
  Vue.mixin({
    onLaunch(lauchOpts) {
      options = {...options, autoReport: false, lauchOpts}
      MTA.App.init(options)
    },
    onLoad() {
      MTA.Page.init()
    }
  })

  Vue.prototype.$mta = MTA
}

export default MTAWechatPlugins
