(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-components-userInfo-userInfo"],{"0a60":function(e,t,n){"use strict";var i=n("6606"),a=n.n(i);a.a},1361:function(e,t,n){"use strict";n.r(t);var i=n("ccb4"),a=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,(function(){return i[e]}))}(s);t["default"]=a.a},6606:function(e,t,n){var i=n("713e");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("dd5441e6",i,!0,{sourceMap:!1,shadowMode:!1})},"713e":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-c132e368]{background:#f0f0f0}.cutline[data-v-c132e368]{height:%?12?%;background:#efeff4}.userInfo[data-v-c132e368]{box-sizing:border-box;background:#fff}.userInfo .item[data-v-c132e368]{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:1px solid #f6f6f6;padding:0 %?32?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.userInfo .item uni-text[data-v-c132e368]{font-size:%?28?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#5a5a5a}.userInfo .item uni-view[data-v-c132e368]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}body.?%PAGE?%[data-v-c132e368]{background:#f0f0f0}',""]),e.exports=t},b02f:function(e,t,n){"use strict";n.r(t);var i=n("df21"),a=n("1361");for(var s in a)"default"!==s&&function(e){n.d(t,e,(function(){return a[e]}))}(s);n("0a60");var r,o=n("f0c5"),c=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"c132e368",null,!1,i["a"],r);t["default"]=c.exports},ccb4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("0708"),a={data:function(){return{baseURL:this.$api,isLogin:!0,user_name:"未登陆",avatar:"/static/images/user-default.jpeg",phone:"",ordernum:{0:0,1:0,2:0},area:"",$api:"",$src:this.$src}},onShow:function(){this.getUserInfo()},onLoad:function(){this.$api=this.$api},methods:{reset:function(){uni.navigateTo({url:"/pages/components/reset/reset"})},getUserInfo:function(){var e=this;(0,i.request)({url:"index.php?s=/wap/member/Api_member_index",method:"POST"}).then((function(t){e.user_name=t.data.member_name,e.avatar=t.data.member_img,e.phone=t.data.phone;var n=t.data.address;e.area=n.province+" "+n.city+" "+n.district}))},changeImg:function(){var e=this,t=this;uni.chooseImage({success:function(n){var i=n.tempFilePaths;e.changeimg=i[0],uni.uploadFile({url:e.$api+"index.php?s=/wap/upload/uploadFile",filePath:i[0],name:"file_upload",formData:{file_path:"upload/avator/"},success:function(n){n=JSON.parse(n.data);1==n.code?(t.avatar=e.$api+n.data,console.log(t.avatar),t.modifyFace(n.data),uni.showToast({title:n.message,icon:"none",duration:2e3})):uni.showToast({title:n.message,icon:"none",duration:2e3})}})}})},modifyFace:function(e){console.log(e),(0,i.request)({url:"index.php?s=/wap/member/apimodifyFace",method:"POST",data:{user_headimg:e}}).then((function(e){console.log(e),1==e.data.code?console.dir("保存成功"):console.dir("保存失败")}))},changeName:function(){uni.navigateTo({url:"/pages/components/change-username/change-username"})},setPassword:function(){uni.navigateTo({url:"/pages/components/setPayPassword/setPayPassword"})},signOut:function(){var e=this;uni.showModal({content:"确认安全退出吗？",success:function(t){t.confirm&&uni.removeStorage({key:"token",success:function(){e.isLogin=!1,uni.switchTab({url:"/pages/index/index"})}})}})}}};t.default=a},df21:function(e,t,n){"use strict";var i,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"cutline"}),n("v-uni-view",{staticClass:"userInfo"},[n("v-uni-view",{staticClass:"item",staticStyle:{"line-height":"200rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changeImg.apply(void 0,arguments)}}},[n("v-uni-text",[e._v("头像")]),n("v-uni-view",[0==e.avatar?n("v-uni-image",{staticStyle:{width:"145rpx",height:"145rpx","border-radius":"50%","margin-right":"28rpx"},attrs:{src:e.$src+"/images/shop-logo.png",mode:""}}):n("v-uni-image",{staticStyle:{width:"145rpx",height:"145rpx","border-radius":"50%","margin-right":"28rpx"},attrs:{src:e.baseURL+e.avatar}})],1)],1),n("v-uni-view",{staticClass:"item",staticStyle:{"line-height":"90rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changeName.apply(void 0,arguments)}}},[n("v-uni-text",[e._v("昵称")]),n("v-uni-view",[n("v-uni-text",[e._v(e._s(e.user_name))]),n("v-uni-image",{staticStyle:{width:"30rpx",height:"30rpx"},attrs:{src:e.$src+"/images/icon-right.png"}})],1)],1),n("v-uni-view",{staticClass:"item",staticStyle:{"line-height":"90rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.reset()}}},[n("v-uni-text",[e._v("密码")]),n("v-uni-view",[n("v-uni-text",{staticStyle:{"margin-right":"28rpx"}},[e._v("修改")]),n("v-uni-image",{staticStyle:{width:"30rpx",height:"30rpx"},attrs:{src:e.$src+"/images/icon-right.png"}})],1)],1),n("v-uni-view",{staticClass:"item",staticStyle:{"line-height":"90rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.setPassword.apply(void 0,arguments)}}},[n("v-uni-text",[e._v("支付密码")]),n("v-uni-view",[n("v-uni-text",{staticStyle:{"margin-right":"28rpx"}},[e._v("设置")]),n("v-uni-image",{staticStyle:{width:"30rpx",height:"30rpx"},attrs:{src:e.$src+"/images/icon-right.png"}})],1)],1)],1),n("v-uni-view",{staticClass:"btn",staticStyle:{padding:"30rpx"}},[n("v-uni-button",{staticStyle:{background:"#FED940",color:"#000"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.signOut.apply(void 0,arguments)}}},[e._v("安全退出")])],1)],1)},s=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i}))}}]);