(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-components-preson-status-preson-status"],{"0230":function(e,t,n){"use strict";var i=n("53d4"),a=n.n(i);a.a},4247:function(e,t,n){"use strict";var i,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"user-info"},[n("v-uni-view",{staticClass:"user-img"},[n("v-uni-image",{attrs:{src:e.baseURL+e.info.user_headimg,mode:""}})],1),n("v-uni-view",{staticClass:"user-status"},[n("v-uni-view",[n("v-uni-text",{staticStyle:{"margin-right":"24rpx","font-size":"36rpx"}},[e._v(e._s(e.info.nick_name))]),n("v-uni-text",[e._v("合伙人")])],1),n("v-uni-view",[n("v-uni-text",{staticStyle:{"margin-right":"24rpx"}},[e._v("区域")]),n("v-uni-text",[e._v(e._s(e.info.region_name))])],1)],1)],1),n("v-uni-view",{staticClass:"manage-box"},[n("v-uni-view",{staticClass:"manage"},[n("v-uni-view",{staticClass:"manage-title"},[n("v-uni-text",[e._v("经营数据")]),n("v-uni-image",{attrs:{src:"$src+/images/icon-right.png",mode:""}})],1),n("v-uni-view",{staticClass:"manage-list"},e._l(e.manageList,(function(t,i){return n("v-uni-view",{key:i,staticClass:"manage-item"},[n("v-uni-text",[e._v(e._s(t.name))]),n("v-uni-text",[e._v(e._s(t.money))])],1)})),1)],1)],1),n("v-uni-view",{staticClass:"person-box"},[n("v-uni-view",{staticClass:"person"},[n("v-uni-view",{staticClass:"person-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goStaff.apply(void 0,arguments)}}},[n("v-uni-text",[e._v("我的员工")]),n("v-uni-image",{attrs:{src:"$src+/images/icon-right.png",mode:""}})],1),n("v-uni-view",{staticClass:"person-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.bindStaff.apply(void 0,arguments)}}},[n("v-uni-text",[e._v("绑定新员工")]),n("v-uni-image",{attrs:{src:"$src+/images/icon-right.png",mode:""}})],1)],1)],1)],1)},s=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i}))},"53d4":function(e,t,n){var i=n("77cb");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("6c1b0eb5",i,!0,{sourceMap:!1,shadowMode:!1})},6863:function(e,t,n){"use strict";n.r(t);var i=n("4247"),a=n("d4c5");for(var s in a)"default"!==s&&function(e){n.d(t,e,(function(){return a[e]}))}(s);n("0230");var o,r=n("f0c5"),d=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"679d20e5",null,!1,i["a"],o);t["default"]=d.exports},"77cb":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-679d20e5]{background:#efeff4}.user-info[data-v-679d20e5]{box-sizing:border-box;background:#fed940;padding:0 %?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-bottom:%?20?%}.user-info .user-img[data-v-679d20e5]{width:%?160?%;height:%?160?%;margin-right:%?48?%}.user-info .user-img uni-image[data-v-679d20e5]{width:100%;height:100%;border-radius:50%}.user-info .user-status[data-v-679d20e5]{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.user-info .user-status uni-view[data-v-679d20e5]:nth-child(1){font-size:%?32?%}.user-info .user-status uni-view[data-v-679d20e5]:nth-child(2){font-size:%?28?%;margin-top:%?12?%}.manage-box[data-v-679d20e5]{box-sizing:border-box;background:#fed940;padding:0 %?30?%}.manage-box .manage[data-v-679d20e5]{background:#fff;border-radius:%?20?%;box-shadow:4px 4px 4px #ccc;padding-top:%?30?%;padding-bottom:%?56?%}.manage-box .manage .manage-title[data-v-679d20e5]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;color:#3c3c3c}.manage-box .manage .manage-title uni-image[data-v-679d20e5]{width:%?40?%;height:%?40?%}.manage-box .manage .manage-list[data-v-679d20e5]{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-top:%?36?%}.manage-box .manage .manage-list .manage-item[data-v-679d20e5]{width:50%;font-size:%?28?%;text-align:center;margin-bottom:%?24?%}.manage-box .manage .manage-list .manage-item uni-text[data-v-679d20e5]:nth-child(1){color:#999;margin-right:%?10?%}.person-box[data-v-679d20e5]{box-sizing:border-box;padding:0 %?30?%}.person-box .person[data-v-679d20e5]{box-sizing:border-box;background:#fff}.person-box .person .person-item[data-v-679d20e5]{box-sizing:border-box;padding:0 %?28?%;font-size:%?28?%;line-height:%?90?%;border-bottom:1px solid #f1f1f1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.person-box .person .person-item uni-image[data-v-679d20e5]{width:%?40?%;height:%?40?%}.person-box .person .person-item[data-v-679d20e5]:last-child{border-bottom:0}body.?%PAGE?%[data-v-679d20e5]{background:#efeff4}',""]),e.exports=t},d4c5:function(e,t,n){"use strict";n.r(t);var i=n("f94c"),a=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,(function(){return i[e]}))}(s);t["default"]=a.a},f94c:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("0708"),a={data:function(){return{baseURL:this.$api,info:[],manageList:[{name:"商家总额",money:"￥100.00"},{name:"上月总额",money:"￥100.00"},{name:"VIP充值",money:"￥100.00"},{name:"上月预估",money:"￥100.00"}],personList:[{name:"我的经理"},{name:"我的商家"},{name:"VIP会员"},{name:"普通会员"}],$src:this.$src}},onLoad:function(){this.getInfo()},methods:{getInfo:function(){var e=this;(0,i.request)({url:"index.php?s=/wap/member/apiParterCenter",method:"POST"}).then((function(t){1==t.data.code&&(e.info=t.data.info,e.manageList[0].money="￥"+t.data.stat.history,e.manageList[1].money="￥"+t.data.stat.last,e.manageList[2].money="￥"+t.data.stat.recharge,e.manageList[3].money="￥"+t.data.stat.predict)}))},goStaff:function(){uni.navigateTo({url:"/pages/components/my-staff/my-staff"})},bindStaff:function(){uni.navigateTo({url:"/pages/mine/invite"})}}};t.default=a}}]);