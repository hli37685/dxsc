(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-goods-list-goods-list"],{"02fe":function(e,t,n){var i=n("83a2");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=n("4f06").default;s("f6990f00",i,!0,{sourceMap:!1,shadowMode:!1})},2589:function(e,t,n){"use strict";n.r(t);var i=n("2c8b"),s=n("fe4f");for(var o in s)"default"!==o&&function(e){n.d(t,e,(function(){return s[e]}))}(o);n("549a");var a,r=n("f0c5"),c=Object(r["a"])(s["default"],i["b"],i["c"],!1,null,"39dfc9eb",null,!1,i["a"],a);t["default"]=c.exports},"2c8b":function(e,t,n){"use strict";var i,s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"news-box ",class:e.isMarginTop?"distanceActive":""},[n("v-uni-view",{staticClass:"news"},[n("v-uni-view",{staticStyle:{"box-sizing":"border-box",padding:"0 20rpx"}},[e._l(e.newsList,(function(t,i){return[n("v-uni-view",{key:i+"_0",staticClass:"news-item",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.handleClick(t.goods_id)}}},[n("v-uni-image",{attrs:{src:t.pic_cover_small}}),n("v-uni-view",{staticClass:"news-text"},[n("v-uni-view",{staticClass:"news-title"},[n("v-uni-text",[e._v(e._s(t.goods_name))])],1),n("v-uni-view",{staticClass:"news-price",staticStyle:{display:"flex","justify-content":"space-between","align-items":"center",width:"100%"}},[n("v-uni-view",{staticStyle:{flex:"4"}},[n("v-uni-text",{staticClass:"now"},[e._v("优惠价："+e._s(t.price))]),n("v-uni-text",{staticStyle:{"text-decoration":"line-through",color:"#AAAAAA","font-size":"22rpx"}},[e._v("市场价："+e._s(t.market_price))])],1),n("v-uni-text",{staticStyle:{"font-size":"20rpx",color:"#BABABA"}},[e._v("已售："+e._s(t.sales))])],1)],1)],1)]}))],2)],1)],1)],1)},o=[];n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}))},"549a":function(e,t,n){"use strict";var i=n("02fe"),s=n.n(i);s.a},"54b3":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:{newsList:{type:Array},isMarginTop:{type:Boolean}},data:function(){return{}},methods:{handleClick:function(e){uni.navigateTo({url:"/pages/common/goods-detail/goods-detail?id="+e})}}};t.default=i},"83a2":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.news-box[data-v-39dfc9eb]{box-sizing:border-box;padding-bottom:%?32?%}.news-box uni-view[data-v-39dfc9eb]{overflow:hidden;display:block;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.news-box uni-view .news-item[data-v-39dfc9eb]{box-sizing:border-box;width:49%;position:relative}.news-box uni-view .news-item uni-image[data-v-39dfc9eb]{width:100%;height:%?300?%;display:block}.news-box uni-view .news-item .news-text[data-v-39dfc9eb]{box-sizing:border-box;padding:%?20?% %?16?%;width:100%}.news-box uni-view .news-item .news-text .news-title[data-v-39dfc9eb]{font-size:%?26?%;color:#444}.news-box uni-view .news-item .news-text .news-title uni-text[data-v-39dfc9eb]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.news-box uni-view .news-item .news-text .news-price[data-v-39dfc9eb]{box-sizing:border-box}.news-box uni-view .news-item .news-text .news-price .now[data-v-39dfc9eb]{font-size:%?26?%;color:#fc3d3c;font-weight:700;margin-right:%?10?%}.news-box.distanceActive[data-v-39dfc9eb]{margin-top:%?16?%}',""]),e.exports=t},fe4f:function(e,t,n){"use strict";n.r(t);var i=n("54b3"),s=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=s.a}}]);