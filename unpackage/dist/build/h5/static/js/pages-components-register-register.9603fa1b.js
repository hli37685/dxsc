(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-components-register-register"],{"0462":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.register[data-v-22ce2939]{box-sizing:border-box}.register .logo[data-v-22ce2939]{width:%?220?%;height:%?170?%;margin:0 auto;padding-top:%?80?%}.register .logo uni-image[data-v-22ce2939]{width:100%;height:100%}.register .choose[data-v-22ce2939]{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.register .choose uni-view[data-v-22ce2939]{box-sizing:border-box;-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center}.register .choose uni-view[data-v-22ce2939]:nth-child(1){color:#5e5a5a;font-size:%?40?%}.register .choose uni-view[data-v-22ce2939]:nth-child(2){font-size:%?50?%;color:#c8c7cc}.register .form-list[data-v-22ce2939]{box-sizing:border-box;margin-top:%?80?%}.register .form-list .form-item[data-v-22ce2939]{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10%;height:%?100?%;line-height:%?100?%}.register .form-list .form-item uni-image[data-v-22ce2939]{width:%?50?%;height:%?50?%;margin-right:%?24?%}.register .form-list .form-item uni-input[data-v-22ce2939]{-webkit-box-flex:1;-webkit-flex:1;flex:1;box-sizing:border-box;border-bottom:1px solid #c8c7cc}.register .form-list .form-item .QRcode[data-v-22ce2939]{margin-left:%?20?%;background:#e64340;color:#fff}.register .btn[data-v-22ce2939]{width:100%;box-sizing:border-box;position:absolute;bottom:%?110?%}.register .btn uni-button[data-v-22ce2939]{width:60%;text-align:center;font-size:%?32?%;color:#fff;border-radius:%?60?%;background:#e64340}.placeholder[data-v-22ce2939]{font-size:%?28?%;color:#c8c7cc}',""]),e.exports=t},"09d9":function(e,t,i){"use strict";i.r(t);var n=i("5eb0"),o=i("40af");for(var a in o)"default"!==a&&function(e){i.d(t,e,(function(){return o[e]}))}(a);i("0c76");var s,r=i("f0c5"),c=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"22ce2939",null,!1,n["a"],s);t["default"]=c.exports},"0c76":function(e,t,i){"use strict";var n=i("e270"),o=i.n(n);o.a},"40af":function(e,t,i){"use strict";i.r(t);var n=i("a1f3"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=o.a},"5eb0":function(e,t,i){"use strict";var n,o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"register",style:{height:e.clientHeight+"px"}},[i("v-uni-view",{staticClass:"logo"},[i("v-uni-image",{attrs:{src:"/static/images/user-logo.png",mode:""}})],1),i("v-uni-view",{staticClass:"choose"},[i("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.login()}}},[e._v("登录")]),i("v-uni-view",[e._v("注册")]),i("v-uni-view")],1),i("v-uni-view",{staticClass:"form-list"},[i("v-uni-view",{staticClass:"form-item"},[i("v-uni-image",{attrs:{src:"/static/images/arrow-user.png",mode:""}}),i("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请输入用户名","placeholder-class":"placeholder"},on:{blur:function(t){arguments[0]=t=e.$handleEvent(t),e.user()}},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),i("v-uni-view",{staticClass:"form-item"},[i("v-uni-image",{attrs:{src:"/static/images/arrow-phone.png",mode:""}}),i("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请输入手机号","placeholder-class":"placeholder"},on:{blur:function(t){arguments[0]=t=e.$handleEvent(t),e.phone()}},model:{value:e.cellphone,callback:function(t){e.cellphone=t},expression:"cellphone"}})],1),i("v-uni-view",{staticClass:"form-item"},[i("v-uni-image",{attrs:{src:"/static/images/arrow-password.png",mode:""}}),i("v-uni-input",{attrs:{type:"password",value:"",placeholder:"请输入密码","placeholder-class":"placeholder"},on:{blur:function(t){arguments[0]=t=e.$handleEvent(t),e.password()}},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1),i("v-uni-view",{staticClass:"form-item"},[i("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请输入手机验证码","placeholder-class":"placeholder"},on:{blur:function(t){arguments[0]=t=e.$handleEvent(t),e.QRcode()}},model:{value:e.vertification,callback:function(t){e.vertification=t},expression:"vertification"}}),i("v-uni-button",{staticClass:"QRcode",attrs:{size:"mini",disabled:e.disabled},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getCode()}}},[e.get?i("v-uni-text",[e._v("获取验证码")]):e._e(),e.down?i("v-uni-text",[e._v("还剩"+e._s(e.count)+"秒")]):e._e(),e.again?i("v-uni-text",[e._v("重新获取")]):e._e()],1)],1)],1),e.tabbar?i("v-uni-view",{staticClass:"btn"},[i("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.register()}}},[e._v("马上注册")])],1):e._e()],1)],1)},a=[];i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}))},a1f3:function(e,t,i){"use strict";var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var o=n(i("3b8d")),a=i("0708"),s={data:function(){return{username:"",code:"",cellphone:"",vertification:"",disabled:!1,get:!0,down:!1,again:!1,count:60,uid:0,clientHeight:"",tabbar:!0}},onLoad:function(e){var t=this;if(e.uid>0)this.uid=e.uid,uni.setStorageSync("up_uid",e.uid);else{var i=uni.getStorageSync("up_uid");null==i||void 0==i||""==i||0==i?uni.setStorageSync("up_uid",0):this.uid=i}uni.getSystemInfo({success:function(e){t.clientHeight=e.windowHeight}}),setTimeout((function(){uni.onWindowResize((function(e){e.size.windowHeight<t.clientHeight?t.tabbar=!1:t.tabbar=!0}))}),100)},methods:{login:function(){this.uid>0?uni.redirectTo({url:"../login/login?uid="+this.uid}):uni.redirectTo({url:"../login/login"})},user:function(){var e=/[\u4E00-\u9FA5\uF900-\uFA2D]/.test(this.username);(e||""==this.username)&&uni.showToast({title:"请输入合法用户名",icon:"none"})},password:function(){var e=/[\u4E00-\u9FA5\uF900-\uFA2D]/.test(this.code);(e||""==this.code)&&uni.showToast({title:"请输入合法密码",icon:"none"})},phone:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!=this.cellphone&&/^1[3456789]\d{9}$/.test(this.cellphone)){e.next=3;break}return uni.showToast({title:"请输入合法的手机号",icon:"none"}),e.abrupt("return",!1);case 3:return e.next=5,(0,a.request)({url:"index.php?s=/wap/login/checkMobileIsHas",method:"post",data:{mobile:this.cellphone}}).then((function(e){e.data&&uni.showToast({title:"手机号已被注册",icon:"none"})}));case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),QRcode:function(){""==this.vertification&&uni.navigateTo({title:"请输入合法验证码",icon:"none"})},getCode:function(){var e=this;if(""!=this.cellphone&&/^1[3456789]\d{9}$/.test(this.cellphone)){uni.showToast({title:"短信发送成功",icon:"none"}),this.disabled=!0,this.get=!1,this.down=!0,this.again=!1;var t=setInterval((function(){e.count=e.count-1,e.count<=0&&(e.disabled=!1,e.down=!1,e.again=!0,e.count=60,clearInterval(t))}),1e3);(0,a.request)({url:"/index.php?s=/wap/Login/sendSmsRegisterCode",method:"post",data:{vertification:123,mobile:this.cellphone}}).then((function(e){}))}else uni.showToast({title:"请输入合法手机号",icon:"none"})},register:function(){(0,a.request)({url:"index.php?s=/wap/Login/register",method:"post",data:{username:this.username,password:this.code,mobile:this.cellphone,vertification:this.vertification,pid:this.uid}}).then((function(e){e.data.code>0?(uni.showToast({title:"注册成功",icon:"none"}),uni.switchTab({url:"/pages/mine/mine"})):uni.showToast({title:e.data.msg,icon:"none"})}))}}};t.default=s},e270:function(e,t,i){var n=i("0462");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("8430a476",n,!0,{sourceMap:!1,shadowMode:!1})}}]);