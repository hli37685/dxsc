(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-components-wechatpay-wechatpay"],{"1ae2":function(e,n,t){"use strict";var i,a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",[t("v-uni-button",{attrs:{type:"warn"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.getWechatPay.apply(void 0,arguments)}}},[e._v("确认支付")])],1)},o=[];t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return i}))},"24ad":function(e,n,t){"use strict";var i,a=t("4ea4");t("a481");var o=a(t("bd86"));t("28a5"),t("4917"),function(a,o){i=function(){return o(a)}.call(n,t,n,e),void 0===i||(e.exports=i)}(window,(function(e,n){if(!e.jWeixin){var t,i,a={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},r=function(){var e={};for(var n in a)e[a[n]]=n;return e}(),c=e.document,s=c.title,d=navigator.userAgent.toLowerCase(),u=navigator.platform.toLowerCase(),l=!(!u.match("mac")&&!u.match("win")),p=-1!=d.indexOf("wxdebugger"),f=-1!=d.indexOf("micromessenger"),g=-1!=d.indexOf("android"),m=-1!=d.indexOf("iphone")||-1!=d.indexOf("ipad"),h=(i=d.match(/micromessenger\/(\d+\.\d+\.\d+)/)||d.match(/micromessenger\/(\d+\.\d+)/))?i[1]:"",y={initStartTime:B(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},v={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:m?1:g?2:-1,clientVersion:h,url:encodeURIComponent(location.href)},S={},w={_completes:[]},I={state:0,data:{}};O((function(){y.initEndTime=B()}));var k=!1,T=[],_=(t={config:function(n){W("config",S=n);var t=!1!==S.check;O((function(){if(t)x(a.config,{verifyJsApiList:V(S.jsApiList),verifyOpenTagList:V(S.openTagList)},function(){w._complete=function(e){y.preVerifyEndTime=B(),I.state=1,I.data=e},w.success=function(e){v.isPreVerifyOk=0},w.fail=function(e){w._fail?w._fail(e):I.state=-1};var e=w._completes;return e.push((function(){!function(){if(!(l||p||S.debug||h<"6.0.2"||v.systemType<0)){var e=new Image;v.appId=S.appId,v.initTime=y.initEndTime-y.initStartTime,v.preVerifyTime=y.preVerifyEndTime-y.preVerifyStartTime,_.getNetworkType({isInnerInvoke:!0,success:function(n){v.networkType=n.networkType;var t="https://open.weixin.qq.com/sdk/report?v="+v.version+"&o="+v.isPreVerifyOk+"&s="+v.systemType+"&c="+v.clientVersion+"&a="+v.appId+"&n="+v.networkType+"&i="+v.initTime+"&p="+v.preVerifyTime+"&u="+v.url;e.src=t}})}}()})),w.complete=function(n){for(var t=0,i=e.length;t<i;++t)e[t]();w._completes=[]},w}()),y.preVerifyStartTime=B();else{I.state=1;for(var e=w._completes,n=0,i=e.length;n<i;++n)e[n]();w._completes=[]}})),_.invoke||(_.invoke=function(n,t,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,L(t),i)},_.on=function(n,t){e.WeixinJSBridge&&WeixinJSBridge.on(n,t)})},ready:function(e){0!=I.state?e():(w._completes.push(e),!f&&S.debug&&e())},error:function(e){h<"6.0.2"||(-1==I.state?e(I.data):w._fail=e)},checkJsApi:function(e){x("checkJsApi",{jsApiList:V(e.jsApiList)},(e._complete=function(e){if(g){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=function(e){var n=e.checkResult;for(var t in n){var i=r[t];i&&(n[i]=n[t],delete n[t])}return e}(e)},e))},onMenuShareTimeline:function(e){A(a.onMenuShareTimeline,{complete:function(){x("shareTimeline",{title:e.title||s,desc:e.title||s,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){A(a.onMenuShareAppMessage,{complete:function(n){"favorite"===n.scene?x("sendAppMessage",{title:e.title||s,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):x("sendAppMessage",{title:e.title||s,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){A(a.onMenuShareQQ,{complete:function(){x("shareQQ",{title:e.title||s,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){A(a.onMenuShareWeibo,{complete:function(){x("shareWeiboApp",{title:e.title||s,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){A(a.onMenuShareQZone,{complete:function(){x("shareQZone",{title:e.title||s,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){x("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){x("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){x("startRecord",{},e)},stopRecord:function(e){x("stopRecord",{},e)},onVoiceRecordEnd:function(e){A("onVoiceRecordEnd",e)},playVoice:function(e){x("playVoice",{localId:e.localId},e)},pauseVoice:function(e){x("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){x("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){A("onVoicePlayEnd",e)},uploadVoice:function(e){x("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){x("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){x("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){x("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(g){var n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){x(a.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){x("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){x("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===k?(k=!0,x("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(k=!1,0<T.length){var n=T.shift();wx.getLocalImgData(n)}},e))):T.push(e)},getNetworkType:function(e){x("getNetworkType",{},(e._complete=function(e){e=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var t=e.subtype;if(delete e.subtype,t)e.networkType=t;else{var i=n.indexOf(":"),a=n.substring(i+1);switch(a){case"wifi":case"edge":case"wwan":e.networkType=a;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){x("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)}},(0,o.default)(t,"getLocation",(function(e){x(a.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))})),(0,o.default)(t,"hideOptionMenu",(function(e){x("hideOptionMenu",{},e)})),(0,o.default)(t,"showOptionMenu",(function(e){x("showOptionMenu",{},e)})),(0,o.default)(t,"closeWindow",(function(e){x("closeWindow",{},e=e||{})})),(0,o.default)(t,"hideMenuItems",(function(e){x("hideMenuItems",{menuList:e.menuList},e)})),(0,o.default)(t,"showMenuItems",(function(e){x("showMenuItems",{menuList:e.menuList},e)})),(0,o.default)(t,"hideAllNonBaseMenuItem",(function(e){x("hideAllNonBaseMenuItem",{},e)})),(0,o.default)(t,"showAllNonBaseMenuItem",(function(e){x("showAllNonBaseMenuItem",{},e)})),(0,o.default)(t,"scanQRCode",(function(e){x("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(m){var n=e.resultStr;if(n){var t=JSON.parse(n);e.resultStr=t&&t.scan_code&&t.scan_code.scan_result}}},e))})),(0,o.default)(t,"openAddress",(function(e){x(a.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))})),(0,o.default)(t,"openProductSpecificView",(function(e){x(a.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)})),(0,o.default)(t,"addCard",(function(e){for(var n=e.cardList,t=[],i=0,o=n.length;i<o;++i){var r=n[i],c={card_id:r.cardId,card_ext:r.cardExt};t.push(c)}x(a.addCard,{card_list:t},(e._complete=function(e){var n=e.card_list;if(n){for(var t=0,i=(n=JSON.parse(n)).length;t<i;++t){var a=n[t];a.cardId=a.card_id,a.cardExt=a.card_ext,a.isSuccess=!!a.is_succ,delete a.card_id,delete a.card_ext,delete a.is_succ}e.cardList=n,delete e.card_list}},e))})),(0,o.default)(t,"chooseCard",(function(e){x("chooseCard",{app_id:S.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))})),(0,o.default)(t,"openCard",(function(e){for(var n=e.cardList,t=[],i=0,o=n.length;i<o;++i){var r=n[i],c={card_id:r.cardId,code:r.code};t.push(c)}x(a.openCard,{card_list:t},e)})),(0,o.default)(t,"consumeAndShareCard",(function(e){x(a.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)})),(0,o.default)(t,"chooseWXPay",(function(e){x(a.chooseWXPay,b(e),e)})),(0,o.default)(t,"openEnterpriseRedPacket",(function(e){x(a.openEnterpriseRedPacket,b(e),e)})),(0,o.default)(t,"startSearchBeacons",(function(e){x(a.startSearchBeacons,{ticket:e.ticket},e)})),(0,o.default)(t,"stopSearchBeacons",(function(e){x(a.stopSearchBeacons,{},e)})),(0,o.default)(t,"onSearchBeacons",(function(e){A(a.onSearchBeacons,e)})),(0,o.default)(t,"openEnterpriseChat",(function(e){x("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)})),(0,o.default)(t,"launchMiniProgram",(function(e){x("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var n=e.split("?")[0],t=e.split("?")[1];return n+=".html",void 0!==t?n+"?"+t:n}}(e.path),envVersion:e.envVersion},e)})),(0,o.default)(t,"openBusinessView",(function(e){x("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(g){var n=e.extraData;if(n)try{e.extraData=JSON.parse(n)}catch(n){e.extraData={}}}},e))})),(0,o.default)(t,"miniProgram",{navigateBack:function(e){e=e||{},O((function(){x("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){O((function(){x("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){O((function(){x("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){O((function(){x("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){O((function(){x("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){O((function(){x("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(n){O((function(){n({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}),t),M=1,P={};return c.addEventListener("error",(function(e){if(!g){var n=e.target,t=n.tagName,i=n.src;if(("IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t)&&-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var a=n["wx-id"];if(a||(a=M++,n["wx-id"]=a),P[a])return;P[a]=!0,wx.ready((function(){wx.getLocalImgData({localId:i,success:function(e){n.src=e.localData}})}))}}}),!0),c.addEventListener("load",(function(e){if(!g){var n=e.target,t=n.tagName;if(n.src,"IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t){var i=n["wx-id"];i&&(P[i]=!1)}}}),!0),n&&(e.wx=e.jWeixin=_),_}function x(n,t,i){e.WeixinJSBridge?WeixinJSBridge.invoke(n,L(t),(function(e){C(n,e,i)})):W(n,i)}function A(n,t,i){e.WeixinJSBridge?WeixinJSBridge.on(n,(function(e){i&&i.trigger&&i.trigger(e),C(n,e,t)})):W(n,i||t)}function L(e){return(e=e||{}).appId=S.appId,e.verifyAppId=S.appId,e.verifySignType="sha1",e.verifyTimestamp=S.timestamp+"",e.verifyNonceStr=S.nonceStr,e.verifySignature=S.signature,e}function b(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function C(e,n,t){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var i=n.errMsg;i||(i=n.err_msg,delete n.err_msg,i=function(e,n){var t=e,i=r[t];i&&(t=i);var a="ok";if(n){var o=n.indexOf(":");"confirm"==(a=n.substring(o+1))&&(a="ok"),"failed"==a&&(a="fail"),-1!=a.indexOf("failed_")&&(a=a.substring(7)),-1!=a.indexOf("fail_")&&(a=a.substring(5)),"access denied"!=(a=(a=a.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=a||(a="permission denied"),"config"==t&&"function not exist"==a&&(a="ok"),""==a&&(a="fail")}return t+":"+a}(e,i),n.errMsg=i),(t=t||{})._complete&&(t._complete(n),delete t._complete),i=n.errMsg||"",S.debug&&!t.isInnerInvoke&&alert(JSON.stringify(n));var a=i.indexOf(":");switch(i.substring(a+1)){case"ok":t.success&&t.success(n);break;case"cancel":t.cancel&&t.cancel(n);break;default:t.fail&&t.fail(n)}t.complete&&t.complete(n)}function V(e){if(e){for(var n=0,t=e.length;n<t;++n){var i=e[n],o=a[i];o&&(e[n]=o)}return e}}function W(e,n){if(!(!S.debug||n&&n.isInnerInvoke)){var t=r[e];t&&(e=t),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function B(){return(new Date).getTime()}function O(n){f&&(e.WeixinJSBridge?n():c.addEventListener&&c.addEventListener("WeixinJSBridgeReady",n,!1))}}))},"5ec2":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,t("4917");var i=t("0708"),a=t("24ad"),o={isWechat:function(){var e=window.navigator.userAgent.toLowerCase();return"micromessenger"==e.match(/micromessenger/i)},initJssdkShare:function(e,n){(0,i.request)({url:"index.php?s=/wap/index/apiGetWechatPackage",data:{url:window.location.href}}).then((function(n){n.data&&(a.config({debug:!1,appId:n.data.data.appId,timestamp:n.data.data.jsTimesTamp,nonceStr:n.data.data.jsNonceStr,signature:n.data.data.jsSignature,jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","getLocation"]}),e&&e(n.data))}))},initJssdk:function(e){(0,i.request)({url:"index.php?s=/wap/index/apiGetWechatPackage",data:{url:window.location.href}}).then((function(n){n.data&&(a.config({debug:!1,appId:n.data.data.appId,timestamp:n.data.data.jsTimesTamp,nonceStr:n.data.data.jsNonceStr,signature:n.data.data.jsSignature,jsApiList:["checkJsApi","getLocation","scanQRCode","getBrandWCPayRequest","chooseWXPay"]}),e&&e(n.data))}))},initJssdkPay:function(e){(0,i.request)({url:"index.php?s=/wap/index/apiGetWechatPackage",data:{url:window.location.href}}).then((function(n){n.data&&(a.config({debug:!1,appId:n.data.data.appId,timestamp:n.data.data.jsTimesTamp,nonceStr:n.data.data.jsNonceStr,signature:n.data.data.jsSignature,jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","getLocation","chooseWXPay","getBrandWCPayRequest"]}),e&&e())}))},share:function(e,n){n=n||window.location.href,this.isWechat()&&this.initJssdkShare((function(t){a.ready((function(){var i={title:e&&e.title?e.title:t.site_name,desc:e&&e.desc?e.desc:t.site_description,link:n,imgUrl:e&&e.img?e.img:t.site_logo,success:function(e){},cancel:function(e){}};a.onMenuShareAppMessage(i),a.onMenuShareTimeline(i)}))}),n)},location:function(e){this.isWechat()?(console.info("定位"),this.initJssdk((function(n){a.ready((function(){console.info("定位ready"),a.getLocation({type:"gcj02",success:function(n){console.log(n),e(n)},fail:function(e){console.log(e)}})}))}))):console.log("不是微信客户端")},sacn:function(e){this.isWechat()?this.initJssdk((function(e){a.ready((function(){console.info("扫一扫ready"),a.scanQRCode({needResult:0,scanType:["qrCode","barCode"],success:function(e){e.resultStr}})}))})):uni.showToast({title:"请在微信里打开",icon:"none"})},wchatpay:function(e){this.initJssdk((function(){e.timeStamp;a.ready((function(n){a.chooseWXPay({appId:e.appId,nonceStr:e.nonceStr,package:e.package,signType:e.signType,paySign:e.paySign,timestamp:e.timeStamp,success:function(e){},fail:function(e){alert("失败")}})}))}))},wchatapply:function(e,n,t){this.initJssdk((function(){e.timeStamp;a.ready((function(i){a.chooseWXPay({appId:e.appId,nonceStr:e.nonceStr,package:e.package,signType:e.signType,paySign:e.paySign,timestamp:e.timeStamp,success:function(e){"chooseWXPay:ok"==e.errMsg&&n&&n()},cancel:function(e){"chooseWXPay:cancel"==e.errMsg&&t&&t()},fail:function(e){}})}))}))}};n.default=o},"651f":function(e,n,t){"use strict";var i=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t("0708"),o=i(t("5ec2")),r={data:function(){return{url:""}},onLoad:function(e){console.log(e),e.type&&1==e.type&&(this.url="/pages/mine/mine")},methods:{getWechatPay:function(){var e=this;uni.showLoading({title:"发起支付中",mask:!0}),(0,a.request)({url:"index.php?s=/wap/pay/getPaySessionInfo"}).then((function(n){uni.hideLoading();var t=JSON.parse(n.data.pay);o.default.wchatapply(t,(function(n){e.url&&""!=e.url?uni.switchTab({url:e.url}):uni.navigateTo({url:"/pages/components/order/order?status=1"})}),(function(e){uni.hideLoading(),uni.showToast({title:"支付失败",icon:"none"})}))}))}}};n.default=r},e7db:function(e,n,t){"use strict";t.r(n);var i=t("651f"),a=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);n["default"]=a.a},ffab:function(e,n,t){"use strict";t.r(n);var i=t("1ae2"),a=t("e7db");for(var o in a)"default"!==o&&function(e){t.d(n,e,(function(){return a[e]}))}(o);var r,c=t("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"0083961a",null,!1,i["a"],r);n["default"]=s.exports}}]);