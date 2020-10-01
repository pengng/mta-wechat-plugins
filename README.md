# mta-wechat-plugins
腾讯移动分析(MTA)-微信小程序uniapp框架插件

### 使用

```shell script
npm install mta-wechat-plugins --save
```

```javascript
import MTAWechatPlugins from 'mta-wechat-plugins'

Vue.use(MTAWechatPlugins, {
	"appID":"xxx",
	"eventID":"xxx",
	"autoReport": true,
	"statParam": true,
	"ignoreParams": [],
	"statPullDownFresh":true,
	"statShareApp":true,
	"statReachBottom":true
})
```
