(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-components-logistics-logistics"],{"098e":function(t,e,i){var s=i("914e");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("4f06").default;a("ca64c16e",s,!0,{sourceMap:!1,shadowMode:!1})},"294a":function(t,e,i){"use strict";var s,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"tab-box"},[t._l(t.packet,(function(e,s){return[t.curPacket==s?i("v-uni-view",{key:s+"_0",staticClass:"item focus"},[t._v(t._s(e.packet_name))]):t._e(),t.curPacket!=s?i("v-uni-view",{key:s+"_1",staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changePacket(s)}}},[t._v(t._s(e.packet_name))]):t._e()]}))],2),i("v-uni-view",{staticClass:"goods-box"},[t._l(t.packet[t.curPacket].order_goods_list,(function(e,s){return[i("v-uni-view",{key:s+"_0",staticClass:"item"},[i("v-uni-image",{attrs:{src:t.baseURL+e.picture_info.pic_cover}})],1)]}))],2),i("v-uni-view",{staticClass:"cut-line"}),i("v-uni-view",{staticClass:"title-box"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-view",{staticClass:"title-context"},[i("v-uni-view",{staticClass:"title-express"},[i("v-uni-text",[t._v(t._s(t.packet[t.curPacket].express_name))])],1),i("v-uni-view",{staticClass:"title-service"},[i("v-uni-text",[t._v("运单编号："+t._s(t.packet[t.curPacket].express_code))])],1)],1)],1)],1),i("v-uni-view",{staticClass:"cut-line"}),i("v-uni-view",{staticClass:"express-after"},[i("v-uni-text",[t._v("物流跟踪")])],1),i("v-uni-view",{staticClass:"express-status"},[i("v-uni-view",{staticClass:"status"},[i("v-uni-view",{staticClass:"express-item"},[t._l(t.express,(function(e,s){return[i("v-uni-view",{key:s+"_0",staticClass:"item"},[i("v-uni-view",{staticStyle:{"margin-left":"30rpx"}},[i("v-uni-view",{staticClass:"message"},[i("v-uni-text",{staticClass:"circle"}),i("v-uni-text",[t._v(t._s(e.AcceptStation))])],1),i("v-uni-view",{staticClass:"time"},[i("v-uni-text",[t._v(t._s(e.AcceptTime))])],1)],1)],1)]}))],2)],1)],1)],1)},n=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return s}))},3684:function(t,e,i){"use strict";var s=i("098e"),a=i.n(s);a.a},"84a6":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i("0708"),a={data:function(){return{baseURL:this.$api,packet:[],curPacket:0,express:[]}},onLoad:function(t){var e=t.id;this.getInfo(e)},methods:{getInfo:function(t){var e=this;(0,s.request)({url:"index.php?s=/wap/order/apiOrderExpress",data:{order_id:t}}).then((function(t){e.packet=t.data.data.order.goods_packet_list,e.getExpress()}))},getExpress:function(){var t=this,e=t.packet[t.curPacket].express_id;(0,s.request)({url:"index.php?s=/wap/order/ApiGetOrderGoodsExpressMessage",data:{express_id:e},method:"POST"}).then((function(e){1==e.data.code&&(t.express=e.data.list)}))},changePacket:function(t){this.curPacket=t,this.getExpress()}}};e.default=a},"86fb":function(t,e,i){"use strict";i.r(e);var s=i("84a6"),a=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);e["default"]=a.a},"914e":function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.tab-box[data-v-95884d36]{width:100%;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex}.tab-box .item[data-v-95884d36]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin:0 %?10?%;box-sizing:initial;line-height:%?80?%;font-size:%?32?%;height:%?80?%;text-align:center;color:#888}.tab-box .focus[data-v-95884d36]{border-bottom:%?5?% solid #fed940}.goods-box[data-v-95884d36]{width:100%;overflow:hidden}.goods-box .item[data-v-95884d36]{padding:%?20?%;box-sizing:border-box;width:%?142?%;height:%?142?%;float:left;overflow:hidden}.goods-box .item uni-image[data-v-95884d36]{width:100%;height:100%}.title-box[data-v-95884d36]{box-sizing:border-box;padding:%?30?%;height:%?200?%}.title-box .title[data-v-95884d36]{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.title-box .title .title-show[data-v-95884d36]{width:%?142?%;height:%?142?%}.title-box .title .title-show uni-image[data-v-95884d36]{width:100%;height:100%}.title-box .title .title-context[data-v-95884d36]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-left:%?26?%}.title-box .title .title-context .title-status[data-v-95884d36]{color:#b53431;font-size:%?30?%}.title-box .title .title-context .title-express[data-v-95884d36]{color:#aaa;font-size:%?26?%;margin-top:%?8?%}.title-box .title .title-context .title-service[data-v-95884d36]{color:#aaa;font-size:%?26?%;margin-top:%?8?%}.cut-line[data-v-95884d36]{background:#efeff4;height:%?18?%}.express-after[data-v-95884d36]{box-sizing:border-box;line-height:%?90?%;color:#909090;font-size:%?30?%;border-bottom:1px solid #eaeaea;padding-left:%?30?%}.express-status[data-v-95884d36]{box-sizing:border-box}.express-status .status[data-v-95884d36]{box-sizing:border-box;padding:%?40?%}.express-status .status .express-item[data-v-95884d36]{box-sizing:border-box;height:%?145?%}.express-status .status .express-item .item[data-v-95884d36]{position:relative;box-sizing:border-box;padding-bottom:%?80?%;border-left:1px solid #ddd}.express-status .status .express-item .item .message[data-v-95884d36]{font-size:%?30?%;color:#9b9b9b}.express-status .status .express-item .item .message .circle[data-v-95884d36]{display:inline-block;width:%?40?%;height:%?40?%;background:#9b9b9b;border-radius:50%;position:absolute;left:%?-20?%;top:0;z-index:2}.express-status .status .express-item .item .time[data-v-95884d36]{font-size:%?24?%;color:#afafaf;margin-top:%?18?%}.express-status .status .express-item .item[data-v-95884d36]:last-child{border-left:0}.express-status .status .express-item .active[data-v-95884d36]{color:#b4302d!important}.express-status .status .express-item .bgActive[data-v-95884d36]{color:#b4302d!important}',""]),t.exports=e},b960:function(t,e,i){"use strict";i.r(e);var s=i("294a"),a=i("86fb");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("3684");var o,r=i("f0c5"),d=Object(r["a"])(a["default"],s["b"],s["c"],!1,null,"95884d36",null,!1,s["a"],o);e["default"]=d.exports}}]);