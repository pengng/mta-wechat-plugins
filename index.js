import MTA from 'mta-wechat-analysis'
const MTAWechatPlugins = {}

MTAWechatPlugins.install = function (Vue, options) {
  let { autoReport } = options
  let mixinOpt = {
    onLaunch(lauchOpts) {
      options = {...options, lauchOpts}
      MTA.App.init(options)
    }
  }

  if (autoReport) {
    autoReport = false
    options = {...options, autoReport}
    mixinOpt = {...mixinOpt, onLoad() { MTA.Page.init() }}
  }

  Vue.mixin(mixinOpt)

  Vue.prototype.$mta = MTA
}

export default MTAWechatPlugins
