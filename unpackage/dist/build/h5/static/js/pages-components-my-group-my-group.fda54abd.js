(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-components-my-group-my-group"],{"0450":function(t,e,n){var a=n("8c12");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("35ce05df",a,!0,{sourceMap:!1,shadowMode:!1})},"04e3":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{$src:this.$src}}};e.default=a},"36f4":function(t,e,n){"use strict";n.r(e);var a=n("6aa6"),i=n("f9b7");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("9077");var r,o=n("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"75944072",null,!1,a["a"],r);e["default"]=u.exports},"6aa6":function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-image",{staticClass:"loading",attrs:{src:t.$src+"/images/loading.gif"}})],1)},s=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}))},7963:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("0708"),s=a(n("36f4")),r={data:function(){return{loading:!1,list:[],page:1,level:"",over:0}},components:{Loading:s.default},onLoad:function(t){uni.setNavigationBarTitle({title:t.name}),this.level=t.id,this.getList()},onReachBottom:function(){getList()},methods:{getList:function(){var t=this;if(1==t.over)return"";this.loading=!1,(0,i.request)({url:"index.php?s=/wap/member/getTeamMembersList",data:{level:this.level,page:this.page},method:"post"}).then((function(e){t.loading=!0,e.data.list?(t.list=e.data.list,t.page++):t.over=1}))}}};e.default=r},"7a18":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".loading[data-v-75944072]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}",""]),t.exports=e},"8c12":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-872bf64e]{background:#efeff4}.group-list[data-v-872bf64e]{box-sizing:border-box;background:#fff}.group-list .group-title[data-v-872bf64e]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?32?%;line-height:%?80?%;color:#b9b9b9}.group-list .group-title .number[data-v-872bf64e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center}.group-list .group-title .name[data-v-872bf64e]{-webkit-box-flex:1.5;-webkit-flex:1.5;flex:1.5;text-align:center}.group-list .group-title .message[data-v-872bf64e]{-webkit-box-flex:1.5;-webkit-flex:1.5;flex:1.5;text-align:center}.hidden[data-v-872bf64e]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.spcial[data-v-872bf64e]{border-bottom:1px solid #f0f0f5;position:relative}body.?%PAGE?%[data-v-872bf64e]{background:#efeff4}',""]),t.exports=e},"8fdf":function(t,e,n){"use strict";var a=n("0450"),i=n.n(a);i.a},9077:function(t,e,n){"use strict";var a=n("c6bd"),i=n.n(a);i.a},a32d:function(t,e,n){"use strict";n.r(e);var a=n("d881"),i=n("fb79");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("8fdf");var r,o=n("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"872bf64e",null,!1,a["a"],r);e["default"]=u.exports},c6bd:function(t,e,n){var a=n("7a18");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("01db84d4",a,!0,{sourceMap:!1,shadowMode:!1})},d881:function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loading?n("v-uni-view",[n("v-uni-view",{staticClass:"group-list"},[n("v-uni-view",{staticClass:"group-title"},[n("v-uni-text",{staticClass:"number",staticStyle:{flex:"1"}},[t._v("序号")]),n("v-uni-text",{staticClass:"name",staticStyle:{flex:"1.5"}},[t._v("姓名")]),n("v-uni-text",{staticClass:"message",staticStyle:{flex:"1.5"}},[t._v("信息")])],1),t._l(t.list,(function(e,a){return[n("v-uni-view",{key:a+"_0",staticClass:"group-title spcial",staticStyle:{color:"#444444"}},[n("v-uni-text",{staticClass:"number hidden"},[t._v(t._s(a+1))]),e.contacts_name?n("v-uni-text",{staticClass:"name hidden"},[t._v(t._s(e.contacts_name))]):n("v-uni-text",{staticClass:"name hidden"},[t._v(t._s(e.user_name))]),n("v-uni-text",{staticClass:"message hidden"},[t._v(t._s(e.user_tel))])],1)]}))],2)],1):n("Loading")},s=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}))},f9b7:function(t,e,n){"use strict";n.r(e);var a=n("04e3"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},fb79:function(t,e,n){"use strict";n.r(e);var a=n("7963"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a}}]);