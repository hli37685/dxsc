(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-components-watching-tv-watching-tv"],{"09e9":function(t,i,n){"use strict";var e=n("82ef"),a=n.n(e);a.a},"430c":function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,n("ac6a");var e=n("0708"),a={data:function(){return{goodList:[],$src:this.$src}},methods:{videoPay:function(t){uni.navigateTo({url:"/pages/components/video-pay/video-pay?id="+t})},getDataList:function(){var t=this;uni.showToast({title:"数据加载中",icon:"loading"}),(0,e.request)({url:"index.php?s=/wap/index/getMedia"}).then((function(i){uni.hideToast(),i.data.list.forEach((function(i){return i.media_logo=t.$api+i.media_logo})),t.goodList=i.data.list}))}},onLoad:function(){this.getDataList()}};i.default=a},"5ce4":function(t,i,n){"use strict";n.r(i);var e=n("430c"),a=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(i,t,(function(){return e[t]}))}(o);i["default"]=a.a},7728:function(t,i,n){"use strict";n.r(i);var e=n("d099"),a=n("5ce4");for(var o in a)"default"!==o&&function(t){n.d(i,t,(function(){return a[t]}))}(o);n("09e9");var d,s=n("f0c5"),c=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"218cd8a6",null,!1,e["a"],d);i["default"]=c.exports},"82ef":function(t,i,n){var e=n("dd1b");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("0e1b2720",e,!0,{sourceMap:!1,shadowMode:!1})},d099:function(t,i,n){"use strict";var e,a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("v-uni-view",{staticClass:"banner"},[n("v-uni-image",{attrs:{src:t.$src+"/images/video.jpg",mode:""}})],1),n("v-uni-view",{staticClass:"discount-box"},[n("v-uni-view",{staticClass:"discount"},[t._l(t.goodList,(function(i,e){return[n("v-uni-view",{key:e+"_0",staticClass:"discount-item"},[n("v-uni-view",{staticClass:"discount-img"},[n("v-uni-image",{staticStyle:{width:"100%",height:"100%","border-radius":"50%"},attrs:{src:i.media_logo,mode:""}})],1),n("v-uni-view",{staticClass:"discount-main"},[n("v-uni-text",{staticStyle:{"font-size":"24rpx",color:"#666","margin-bottom":"8rpx"}},[t._v(t._s(i.media_name))]),n("v-uni-view",{staticStyle:{"margin-bottom":"8rpx","font-weight":"700"}},[n("v-uni-text",[t._v("限时")]),n("v-uni-text",{staticStyle:{color:"#E64340"}},[t._v("5")]),n("v-uni-text",[t._v("折起")])],1),n("v-uni-button",{attrs:{type:"warn"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.videoPay(i.id)}}},[t._v("立即充值")])],1)],1)]}))],2)],1)],1)},o=[];n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return o})),n.d(i,"a",(function(){return e}))},dd1b:function(t,i,n){var e=n("24fb");i=e(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-218cd8a6]{background:#f1f1f1}.banner[data-v-218cd8a6]{box-sizing:border-box;height:%?400?%}.banner uni-image[data-v-218cd8a6]{width:100%;height:100%}.discount-box[data-v-218cd8a6]{box-sizing:border-box}.discount-box .discount[data-v-218cd8a6]{box-sizing:border-box;padding:0 %?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.discount-box .discount .discount-item[data-v-218cd8a6]{box-sizing:border-box;width:49.5%;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?% 0;border-radius:%?12?%;margin-bottom:%?12?%;padding-left:%?12?%}.discount-box .discount .discount-item .discount-img[data-v-218cd8a6]{width:%?120?%;height:%?120?%;background:#f1f1f1;margin-right:%?40?%;-webkit-flex-shrink:0;flex-shrink:0;border-radius:50%}.discount-box .discount .discount-item .discount-img uni-image[data-v-218cd8a6]{width:100%;height:100%;border-radius:50%}.discount-box .discount .discount-item .discount-main[data-v-218cd8a6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;font-size:%?28?%}.discount-box .discount .discount-item .discount-main uni-button[data-v-218cd8a6]{font-size:%?20?%;border-radius:%?24?%}body.?%PAGE?%[data-v-218cd8a6]{background:#f1f1f1}',""]),t.exports=i}}]);