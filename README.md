# mta-wechat-plugins
腾讯移动分析(MTA)-微信小程序uniapp框架插件

### 使用方法

```shell script
npm install mta-wechat-plugins --save
```

```javascript
import MTAWechatPlugins from 'mta-wechat-plugins'

// 使用插件
Vue.use(MTAWechatPlugins, {
    "appID":"xxx",            // appID为应用ID，必须填写
    "eventID":"xxx",          // eventID为高级功能-自定义事件统计ID，配置开通后在初始化处填写
    "autoReport": true,       // 是否开启自动上报
    "statParam": true,        // 每个页面均加入参数上报
    "ignoreParams": [],       // statParam为true时，如果不想上报的参数可配置忽略
    "statPullDownFresh":true, // 使用分析-下来刷新次数/人数，必须配置了合法的eventID
    "statShareApp":true,      // 使用分析-分享次数/人数，必须配置了合法的eventID
    "statReachBottom":true    // 使用分析-页面触底次数/人数，必须配置了合法的eventID
})

// autoReport值为false时，发起上报需在每个页面page.onload调用以下方法
this.$mta.Page.init();

// 自定义事件上报，可选功能
this.$mta.Event.stat("ico_search", {"query":"特斯拉"});

// 用户画像配置，可选功能
this.$mta.Data.userInfo = {'open_id':'oiDJkdkfek-dkwien', 'phone':18718600001}
```
