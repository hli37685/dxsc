(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-components-order-detail-order-detail"],{"015c":function(e,i,t){"use strict";t.r(i);var o=t("8bec"),a=t("ffe4");for(var s in a)"default"!==s&&function(e){t.d(i,e,(function(){return a[e]}))}(s);t("bbba");var n,r=t("f0c5"),d=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"0ba5a3c0",null,!1,o["a"],n);i["default"]=d.exports},"72f0":function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=t("0708"),a={data:function(){return{baseURL:this.$api,order:[],express_name:"",express_count:"",express_code:"",is_show_express_code:0,$src:this.$src}},onLoad:function(e){this.getInfo(e.id)},methods:{getInfo:function(e){var i=this;(0,o.request)({url:"index.php?s=/wap/order/orderDetail",data:{orderId:e}}).then((function(e){i.order=e.data.data.order,i.express_count=e.data.data.express_count,i.express_name=e.data.data.express_name,i.express_code=e.data.data.express_code,i.is_show_express_code=e.data.data.is_show_express_code}))},OrderTakeDelivery:function(e){var i=this;uni.showModal({content:"确认收到货品了吗？",success:function(t){t.confirm&&(0,o.request)({url:"index.php?s=/wap/order/OrderTakeDelivery",method:"POST",data:{order_id:e}}).then((function(e){e.data>0?(uni.showToast({title:"确认收货成功!",icon:"none"}),i.getInfo()):uni.showToast({title:"操作失败!",icon:"none"})}))}})},orderLogistics:function(e){uni.navigateTo({url:"/pages/components/logistics/logistics?id="+e})},orderPay:function(e){if(""!=e){var i=uni.getStorageSync("token");console.log(i[0]),""!=i[0]&&null!=i[0]&&0!=i[0]||(uni.showToast({title:"登录过期!请重新登录",icon:"none"}),setTimeout((function(){uni.navigateTo({url:"/pages/components/login/login"})}),1e3));var t=encodeURIComponent("https://admin.dxsc.vip/index.php?s=/wap/pay/ApiwchatPay&no="+e+"&token="+i[0]),o="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx7cffa961be69b86e&redirect_uri="+t+"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";window.location.href=o}else uni.showToast({title:"订单错误,请重新进入本页面!",icon:"none"})}}};i.default=a},"8bec":function(e,i,t){"use strict";var o,a=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",[t("v-uni-view",{staticClass:"order-number"},[t("v-uni-view",{staticClass:"number"},[t("v-uni-text",[e._v("订单号："+e._s(e.order.order_no))]),t("v-uni-text",[e._v(e._s(e.order.status_name))])],1)],1),2==e.order.shipping_type?t("v-uni-view",{staticClass:"logistic-box"},[t("v-uni-view",{staticClass:"logistic"},[t("v-uni-view",{staticClass:"type"},[t("v-uni-text",[e._v(e._s(e.order.shipping_type_name))])],1),t("v-uni-view",{staticClass:"user-info"},[t("v-uni-view",{staticClass:"user"},[t("v-uni-text",[e._v("自提点")])],1),t("v-uni-view",{staticClass:"address"},[t("v-uni-text",[e._v(e._s(e.order["order_pickup"]["province_name"])+" "+e._s(e.order["order_pickup"]["city_name"])+" "+e._s(e.order["order_pickup"]["dictrict_name"])+" "+e._s(e.order["order_pickup"]["address"]))])],1)],1)],1)],1):e._e(),1==e.order.shipping_type?t("v-uni-view",{staticClass:"logistic-box"},[t("v-uni-view",{staticClass:"logistic"},[t("v-uni-view",{staticClass:"type"},[t("v-uni-text",[e._v(e._s(e.order.shipping_type_name))])],1),t("v-uni-view",{staticClass:"user-info"},[t("v-uni-view",{staticClass:"user"},[t("v-uni-text",[e._v("收货地址")])],1),t("v-uni-view",{staticClass:"address"},[t("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between"}},[t("v-uni-text",[e._v(e._s(e.order["receiver_name"]))]),t("v-uni-text",[e._v(e._s(e.order["receiver_mobile"]))])],1),t("v-uni-view",{staticStyle:{"margin-top":"12rpx"}},[t("v-uni-text",{attrs:{decode:"true"}},[e._v(e._s(e.order["address"]))]),t("v-uni-text",[e._v(e._s(e.order["receiver_address"]))])],1)],1)],1)],1)],1):e._e(),e.express_count>0?t("v-uni-view",{staticClass:"logistic-box"},[t("v-uni-view",{staticClass:"logistic"},[t("v-uni-view",{staticClass:"type"},[t("v-uni-text",[e._v(e._s(e.express_name)+"："+e._s(e.express_code))]),t("v-uni-view",{on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.orderLogistics(e.order.order_id)}}},[t("v-uni-text",[e._v("查物流")]),t("v-uni-image",{attrs:{src:e.$src+"/images/icon-right.png",mode:""}})],1)],1),t("v-uni-view",{staticClass:"user-info"},[t("v-uni-view",{staticClass:"user"},[t("v-uni-text",[e._v(e._s(e.order.receiver_name))]),t("v-uni-text",[e._v(e._s(e.order.receiver_mobile))])],1),t("v-uni-view",{staticClass:"address"},[t("v-uni-text",{attrs:{decode:"true"}},[e._v(e._s(e.order.address))])],1)],1)],1)],1):e._e(),t("v-uni-view",{staticClass:"goods-box"},[t("v-uni-view",{staticClass:"goods"},[t("v-uni-view",{staticClass:"goods-title"},[t("v-uni-text",[e._v("2020-3-20")]),t("v-uni-text",[e._v(e._s(e.order.shipping_type_name))])],1),e._l(e.order.order_goods,(function(i,o){return[t("v-uni-view",{key:o+"_0",staticClass:"product"},[t("v-uni-view",{staticClass:"product-img"},[t("v-uni-image",{attrs:{src:e.baseURL+i.picture_info.pic_cover,mode:""}})],1),t("v-uni-view",{staticClass:"product-title"},[t("v-uni-view",{staticClass:"title"},[t("v-uni-text",[e._v(e._s(i.goods_name))])],1),t("v-uni-view",{staticClass:"params"},[t("v-uni-text",[e._v(e._s(i.sku_name))])],1)],1),t("v-uni-view",{staticClass:"product-price"},[t("v-uni-view",{staticClass:"price"},[t("v-uni-text",[e._v("￥"+e._s(i.price))])],1),t("v-uni-view",{staticClass:"number"},[t("v-uni-text",[e._v("×"+e._s(i.num))])],1)],1)],1)]})),t("v-uni-view",{staticClass:"total"},[t("v-uni-view",[t("v-uni-text",[e._v("共"+e._s(e.order.order_goods.length)+"件商品，合计：￥"+e._s(e.order.order_money)+"(含运费￥"+e._s(e.order.shipping_money)+")")])],1),t("v-uni-view",[e._l(e.order.operation,(function(i,o){return["pay"==i.no?t("v-uni-text",{key:o+"_0",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.orderPay(e.order.out_trade_no)}}},[e._v(e._s(i.name))]):e._e(),"close"==i.no?t("v-uni-text",[e._v(e._s(i.name))]):e._e(),"logistics"==i.no?t("v-uni-text",{key:o+"_2",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.orderLogistics(e.order.order_id)}}},[e._v(e._s(i.name))]):e._e(),"getdelivery"==i.no?t("v-uni-text",{key:o+"_3",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.OrderTakeDelivery(e.order.order_id)}}},[e._v(e._s(i.name))]):e._e(),"pickup"==i.no?t("v-uni-text",[e._v(e._s(i.name))]):e._e()]}))],2)],1)],2)],1),t("v-uni-view",{staticClass:"order-time"},[t("v-uni-view",{staticClass:"time"},[e.order.create_time>0?t("v-uni-view",[t("v-uni-text",[e._v("下单时间："+e._s(e.order.format_create_time))])],1):e._e(),e.order.pay_time>0?t("v-uni-view",[t("v-uni-text",[e._v("付款时间："+e._s(e.order.format_pay_time))])],1):e._e(),e.order.consign_time>0?t("v-uni-view",[t("v-uni-text",[e._v("发货时间："+e._s(e.order.format_consign_time))])],1):e._e()],1)],1)],1)},s=[];t.d(i,"b",(function(){return a})),t.d(i,"c",(function(){return s})),t.d(i,"a",(function(){return o}))},afb8:function(e,i,t){var o=t("24fb");i=o(!1),i.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-0ba5a3c0]{background:#efeff4}.order-number[data-v-0ba5a3c0]{box-sizing:border-box;padding:0 %?30?%;background:#fff}.order-number .number[data-v-0ba5a3c0]{line-height:%?90?%;box-sizing:border-box;font-size:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;color:#444}.order-number .number uni-text[data-v-0ba5a3c0]:nth-child(2){color:#aaa}.logistic-box[data-v-0ba5a3c0]{box-sizing:border-box;padding:%?30?%;margin-top:%?20?%;background:#fff}.logistic-box .logistic[data-v-0ba5a3c0]{box-sizing:border-box;font-size:%?30?%;color:#888}.logistic-box .logistic .type[data-v-0ba5a3c0]{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.logistic-box .logistic .type uni-image[data-v-0ba5a3c0]{width:%?30?%;height:%?30?%;position:relative;top:%?6?%}.logistic-box .logistic .user-info[data-v-0ba5a3c0]{box-sizing:border-box;margin-top:%?20?%}.logistic-box .logistic .user-info .user[data-v-0ba5a3c0]{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.logistic-box .logistic .user-info .address[data-v-0ba5a3c0]{box-sizing:border-box;margin-top:%?18?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.goods-box[data-v-0ba5a3c0]{box-sizing:border-box;margin-top:%?20?%;background:#fff;border-top:1px solid #e5e5e5}.goods-box .goods[data-v-0ba5a3c0]{box-sizing:border-box}.goods-box .goods .goods-title[data-v-0ba5a3c0]{box-sizing:border-box;padding:0 %?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?24?%;color:#aaa;border-bottom:1px solid #e5e5e5;line-height:%?70?%}.goods-box .goods .goods-title uni-text[data-v-0ba5a3c0]:nth-child(1){-webkit-box-flex:1;-webkit-flex:1;flex:1}.goods-box .goods .product[data-v-0ba5a3c0]{box-sizing:border-box;padding:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;border-bottom:1px solid #e5e5e5}.goods-box .goods .product .product-img[data-v-0ba5a3c0]{width:%?140?%;height:%?140?%;-webkit-flex-shrink:0;flex-shrink:0}.goods-box .goods .product .product-img uni-image[data-v-0ba5a3c0]{width:100%;height:100%}.goods-box .goods .product .product-title[data-v-0ba5a3c0]{box-sizing:border-box;padding-left:%?30?%;padding-right:%?48?%}.goods-box .goods .product .product-title .title[data-v-0ba5a3c0]{font-size:%?30?%;color:#444;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.goods-box .goods .product .product-title .params[data-v-0ba5a3c0]{font-size:%?24?%;color:#aaa}.goods-box .goods .product .product-price[data-v-0ba5a3c0]{box-sizing:border-box}.goods-box .goods .product .product-price .price[data-v-0ba5a3c0]{font-size:%?30?%;color:#000}.goods-box .goods .product .product-price .number[data-v-0ba5a3c0]{font-size:%?24?%;color:#aaa;text-align:right}.goods-box .goods .total[data-v-0ba5a3c0]{box-sizing:border-box;padding:0 %?30?%;font-size:%?24?%;border-bottom:1px solid #e5e5e5;padding-bottom:%?18?%;padding-top:%?20?%;text-align:right}.goods-box .goods .total uni-view[data-v-0ba5a3c0]:nth-child(2){box-sizing:border-box;margin-top:%?20?%;font-size:%?24?%}.goods-box .goods .total uni-view:nth-child(2) uni-text[data-v-0ba5a3c0]{display:inline-block;box-sizing:border-box;border:1px solid red;width:%?120?%;height:%?44?%;line-height:%?44?%;text-align:center}.goods-box .goods .total uni-view:nth-child(2) uni-text[data-v-0ba5a3c0]:nth-child(1){margin-right:%?14?%;border:1px solid #ddd;color:#9b9b9b}.goods-box .goods .total uni-view:nth-child(2) uni-text[data-v-0ba5a3c0]:nth-child(2){border:1px solid #b4302d;color:#b4302d}.order-time[data-v-0ba5a3c0]{box-sizing:border-box;margin-top:%?20?%;padding:%?30?%;background:#fff;color:#888;font-size:%?30?%}.order-time .time[data-v-0ba5a3c0]{box-sizing:border-box}.order-time .time uni-view[data-v-0ba5a3c0]{box-sizing:border-box;margin-top:%?6?%}.order-time .time uni-view[data-v-0ba5a3c0]:nth-child(1){margin-top:0}body.?%PAGE?%[data-v-0ba5a3c0]{background:#efeff4}',""]),e.exports=i},bbba:function(e,i,t){"use strict";var o=t("c2f8"),a=t.n(o);a.a},c2f8:function(e,i,t){var o=t("afb8");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=t("4f06").default;a("66acf57c",o,!0,{sourceMap:!1,shadowMode:!1})},ffe4:function(e,i,t){"use strict";t.r(i);var o=t("72f0"),a=t.n(o);for(var s in o)"default"!==s&&function(e){t.d(i,e,(function(){return o[e]}))}(s);i["default"]=a.a}}]);