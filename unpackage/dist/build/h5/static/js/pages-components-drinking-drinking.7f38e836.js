(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-components-drinking-drinking"],{"48b1":function(t,n,i){"use strict";i.r(n);var a=i("50d6"),e=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(n,t,(function(){return a[t]}))}(o);n["default"]=e.a},"50d6":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{navList:{currentIndex:0,list:[{name:"全部"},{name:"星巴克"},{name:"美团外卖"},{name:"饿了么"},{name:"全部"},{name:"星巴克"},{name:"美团外卖"},{name:"饿了么"},{name:"全部"},{name:"星巴克"},{name:"美团外卖"},{name:"饿了么"}]}}}};n.default=a},bb03:function(t,n,i){"use strict";var a,e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("v-uni-view",{staticClass:"nav-box"},[i("v-uni-scroll-view",{attrs:{"scroll-x":"true"}},[t._l(t.navList.list,(function(n,a){return[i("v-uni-view",{key:a+"_0",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navList.currentIndex=a}}},[i("v-uni-text",{class:t.navList.currentIndex==a?"active":""},[t._v(t._s(n.name))])],1)]}))],2)],1),i("v-uni-view",{staticClass:"product-box"},[i("v-uni-view",{staticClass:"product"},[t._l(4,(function(n){return[i("v-uni-view",{key:n+"_0",staticClass:"product-item"},[i("v-uni-view",{staticClass:"product-img"}),i("v-uni-view",{staticClass:"product-main"},[i("v-uni-text",{},[t._v("樱花初绽玛奇朵(中杯)")]),i("v-uni-text",{},[t._v("浓醇咖啡交织淡雅樱花般的清香")]),i("v-uni-text",{},[t._v("7.1折")]),i("v-uni-text",{},[t._v("官方价 ￥38.00")]),i("v-uni-text",{},[t._v("会员专享价：￥26.90")])],1)],1)]}))],2)],1)],1)},o=[];i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return a}))},be59:function(t,n,i){"use strict";i.r(n);var a=i("bb03"),e=i("48b1");for(var o in e)"default"!==o&&function(t){i.d(n,t,(function(){return e[t]}))}(o);i("dca2");var r,d=i("f0c5"),c=Object(d["a"])(e["default"],a["b"],a["c"],!1,null,"9614a4ba",null,!1,a["a"],r);n["default"]=c.exports},c3c8:function(t,n,i){var a=i("ef3a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=i("4f06").default;e("98a3646e",a,!0,{sourceMap:!1,shadowMode:!1})},dca2:function(t,n,i){"use strict";var a=i("c3c8"),e=i.n(a);e.a},ef3a:function(t,n,i){var a=i("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-9614a4ba]{background:#f1f1f1}.nav-box[data-v-9614a4ba]{box-sizing:border-box;background:#fff}.nav-box uni-scroll-view[data-v-9614a4ba]{width:100%;white-space:nowrap;box-sizing:border-box;padding:0 %?20?%;line-height:%?80?%}.nav-box uni-scroll-view uni-view[data-v-9614a4ba]{display:inline-block;margin-right:%?36?%;font-size:%?28?%;color:#333}.nav-box uni-scroll-view uni-view uni-text.active[data-v-9614a4ba]{border-bottom:1px solid red;padding-bottom:%?16?%}.nav-box uni-scroll-view uni-view[data-v-9614a4ba]:last-child{margin-right:0}.product-box[data-v-9614a4ba]{box-sizing:border-box;padding:%?10?% %?20?%}.product-box .product[data-v-9614a4ba]{box-sizing:border-box}.product-box .product .product-item[data-v-9614a4ba]{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;padding:%?24?% %?20?%;margin-bottom:%?18?%}.product-box .product .product-item .product-img[data-v-9614a4ba]{-webkit-flex-shrink:0;flex-shrink:0;width:%?160?%;height:%?160?%;background:#f1f1f1;margin-right:%?28?%}.product-box .product .product-item .product-main[data-v-9614a4ba]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;font-size:%?28?%}.product-box .product .product-item .product-main uni-text[data-v-9614a4ba]:nth-child(1){color:#333}.product-box .product .product-item .product-main uni-text[data-v-9614a4ba]:nth-child(2){font-size:%?24?%;color:#999;margin-top:%?8?%}.product-box .product .product-item .product-main uni-text[data-v-9614a4ba]:nth-child(3){border:1px solid red;width:%?80?%;font-size:%?22?%;text-align:center;border-radius:%?6?%;margin-top:%?8?%;color:red}.product-box .product .product-item .product-main uni-text[data-v-9614a4ba]:nth-child(4){font-size:%?24?%;color:#333;margin-top:%?12?%}.product-box .product .product-item .product-main uni-text[data-v-9614a4ba]:nth-child(5){color:red;margin-top:%?8?%;font-size:%?24?%}body.?%PAGE?%[data-v-9614a4ba]{background:#f1f1f1}',""]),t.exports=n}}]);