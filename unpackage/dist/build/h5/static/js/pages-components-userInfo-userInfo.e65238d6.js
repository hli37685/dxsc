(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-components-userInfo-userInfo"],{1361:function(t,e,i){"use strict";i.r(e);var n=i("ccb4"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"1df4":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-d5004242]{background:#f0f0f0}.cutline[data-v-d5004242]{height:%?12?%;background:#efeff4}.userInfo[data-v-d5004242]{box-sizing:border-box;background:#fff}.userInfo .item[data-v-d5004242]{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:1px solid #f6f6f6;padding:0 %?32?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.userInfo .item uni-text[data-v-d5004242]{font-size:%?28?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#5a5a5a}.userInfo .item uni-view[data-v-d5004242]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}body.?%PAGE?%[data-v-d5004242]{background:#f0f0f0}',""]),t.exports=e},4342:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"cutline"}),i("v-uni-view",{staticClass:"userInfo"},[i("v-uni-view",{staticClass:"item",staticStyle:{"line-height":"200rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeImg.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("头像")]),i("v-uni-view",[t.avatar?i("v-uni-image",{staticClass:"headimgsize",staticStyle:{width:"145rpx",height:"145rpx","border-radius":"50%","margin-right":"28rpx"},attrs:{src:t.avatar}}):i("v-uni-image",{staticStyle:{width:"30rpx",height:"30rpx"},attrs:{src:"/static/images/icon-right.png"}})],1)],1),i("v-uni-view",{staticClass:"item",staticStyle:{"line-height":"90rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeName.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("昵称")]),i("v-uni-view",[i("v-uni-text",[t._v(t._s(t.user_name))]),i("v-uni-image",{staticStyle:{width:"30rpx",height:"30rpx"},attrs:{src:"/static/images/icon-right.png"}})],1)],1),i("v-uni-view",{staticClass:"item",staticStyle:{"line-height":"90rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.reset()}}},[i("v-uni-text",[t._v("密码")]),i("v-uni-view",[i("v-uni-text",{staticStyle:{"margin-right":"28rpx"}},[t._v("修改")]),i("v-uni-image",{staticStyle:{width:"30rpx",height:"30rpx"},attrs:{src:"/static/images/icon-right.png"}})],1)],1),i("v-uni-view",{staticClass:"item",staticStyle:{"line-height":"90rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setPassword.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("支付密码")]),i("v-uni-view",[i("v-uni-text",{staticStyle:{"margin-right":"28rpx"}},[t._v("设置")]),i("v-uni-image",{staticStyle:{width:"30rpx",height:"30rpx"},attrs:{src:"/static/images/icon-right.png"}})],1)],1)],1),i("v-uni-view",{staticClass:"btn",staticStyle:{padding:"30rpx"}},[i("v-uni-button",{staticStyle:{background:"#FED940",color:"#000"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.signOut.apply(void 0,arguments)}}},[t._v("安全退出")])],1)],1)},s=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}))},"731f":function(t,e,i){"use strict";var n=i("d6ad"),a=i.n(n);a.a},b02f:function(t,e,i){"use strict";i.r(e);var n=i("4342"),a=i("1361");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("731f");var o,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"d5004242",null,!1,n["a"],o);e["default"]=c.exports},ccb4:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("0708"),a={data:function(){return{baseURL:this.$api,isLogin:!0,user_name:"未登陆",avatar:"/static/images/user-default.jpeg",phone:"",ordernum:{0:0,1:0,2:0},area:"",$api:""}},onShow:function(){this.getUserInfo()},onLoad:function(){this.$api=this.$api},methods:{reset:function(){uni.navigateTo({url:"/pages/components/reset/reset"})},getUserInfo:function(){var t=this;(0,n.request)({url:"index.php?s=/wap/member/Api_member_index",method:"POST"}).then((function(e){t.user_name=e.data.member_name,t.avatar=t.baseURL+e.data.member_img,t.phone=e.data.phone;var i=e.data.address;t.area=i.province+" "+i.city+" "+i.district}))},changeImg:function(){var t=this,e=this;uni.chooseImage({success:function(i){var n=i.tempFilePaths;t.changeimg=n[0],uni.uploadFile({url:t.$api+"index.php?s=/wap/upload/uploadFile",filePath:n[0],name:"file_upload",formData:{file_path:"upload/avator/"},success:function(i){i=JSON.parse(i.data);1==i.code?(e.avatar=t.$api+i.data,console.log(e.avatar),e.modifyFace(i.data),uni.showToast({title:i.message,icon:"none",duration:2e3})):uni.showToast({title:i.message,icon:"none",duration:2e3})}})}})},modifyFace:function(t){console.log(t),(0,n.request)({url:"index.php?s=/wap/member/apimodifyFace",method:"POST",data:{user_headimg:t}}).then((function(t){console.log(t),1==t.data.code?console.dir("保存成功"):console.dir("保存失败")}))},changeName:function(){uni.navigateTo({url:"/pages/components/change-username/change-username"})},setPassword:function(){uni.navigateTo({url:"/pages/components/setPayPassword/setPayPassword"})},signOut:function(){var t=this;uni.showModal({content:"确认安全退出吗？",success:function(e){e.confirm&&uni.removeStorage({key:"token",success:function(){t.isLogin=!1,uni.switchTab({url:"/pages/index/index"})}})}})}}};e.default=a},d6ad:function(t,e,i){var n=i("1df4");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("ecabcb86",n,!0,{sourceMap:!1,shadowMode:!1})}}]);