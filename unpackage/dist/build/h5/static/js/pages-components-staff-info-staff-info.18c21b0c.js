(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-components-staff-info-staff-info"],{"014c":function(t,i,e){"use strict";var n=e("2055"),a=e.n(n);a.a},"0196":function(t,i,e){"use strict";e.r(i);var n=e("8ac9"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},2055:function(t,i,e){var n=e("8583");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("83c4a844",n,!0,{sourceMap:!1,shadowMode:!1})},"307b":function(t,i,e){"use strict";var n,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"nav-box"},[e("v-uni-view",{staticClass:"nav"},t._l(t.navList,(function(i,n){return e("v-uni-view",{key:n,staticClass:"nav-item",class:t.currentIndex==n?"active":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.changeNabIndex(n)}}},[e("v-uni-text",[t._v(t._s(i.title))]),e("v-uni-text",{staticClass:"number",staticStyle:{"text-align":"center"}},[t._v(t._s(i.number))])],1)})),1)],1),0==t.currentIndex?e("v-uni-view",[e("v-uni-view",{staticClass:"shop-list"},[t._l(t.shop,(function(i,n){return[e("v-uni-view",{key:n+"_0",staticClass:"shop-item"},[e("v-uni-view",{staticClass:"shop-img"},[e("v-uni-image",{attrs:{src:t.baseURL+i.shop_logo,mode:""}})],1),e("v-uni-view",{staticClass:"shop-context"},[e("v-uni-view",{staticClass:"shop-info"},[e("v-uni-text",{staticClass:"name"},[t._v(t._s(i.shop_name))]),e("v-uni-text",{staticClass:"hidden"},[t._v("地址："+t._s(i.shop_address))])],1),e("v-uni-view",{staticClass:"order"},[e("v-uni-text",[t._v("订单数：0")])],1),e("v-uni-view",{staticClass:"params"},[e("v-uni-text",[t._v("总营业额：0")]),e("v-uni-text",[t._v("本月营业额：0")])],1),e("v-uni-view",{staticClass:"params"},[e("v-uni-text",[t._v("总vip人数：0")]),e("v-uni-text",[t._v("当月vip人数：0")]),e("v-uni-text",[t._v("普通会员：0")])],1)],1)],1)]}))],2)],1):t._e(),1==t.currentIndex?e("v-uni-view",[e("v-uni-view",{staticClass:"vip-box"},[t._l(t.vip,(function(i,n){return[e("v-uni-view",{key:n+"_0",staticClass:"vip-list"},[e("v-uni-view",{staticClass:"vip-show"},[e("v-uni-image",{attrs:{src:t.baseURL+i.user_headimg,mode:""}})],1),e("v-uni-view",{staticClass:"vip-context"},[e("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between"}},[e("v-uni-text",[t._v(t._s(i.nick_name))]),e("v-uni-text",{staticStyle:{color:"#AAAAAA"}},[t._v("充值：0")])],1),e("v-uni-view",[e("v-uni-text",[t._v(t._s(i.user_tel))])],1)],1)],1)]}))],2)],1):t._e(),e("v-uni-view",{staticClass:"btn"},[e("v-uni-button",{staticStyle:{background:"#FEE16A"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goSet(t.uid)}}},[t._v("设置")])],1)],1)},s=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}))},8583:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 导航 */.nav-box[data-v-997d14ec]{box-sizing:border-box;padding-top:%?24?%}.nav-box .nav[data-v-997d14ec]{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.nav-box .nav .nav-item[data-v-997d14ec]{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;color:#cbcbcb}.nav-box .nav .nav-item .number[data-v-997d14ec]{text-align:center}.nav-box .nav .nav-item.active[data-v-997d14ec]{color:#fee16a;border-bottom:1px solid #fee16a}.shop-list[data-v-997d14ec]{box-sizing:border-box}.shop-list .shop-item[data-v-997d14ec]{padding:%?16?% %?40?%;box-sizing:border-box;border-bottom:1px solid #efeff4;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.shop-list .shop-item .shop-img[data-v-997d14ec]{width:%?140?%;height:%?140?%;margin-right:%?24?%;-webkit-flex-shrink:0;flex-shrink:0}.shop-list .shop-item .shop-img uni-image[data-v-997d14ec]{width:100%;height:100%}.shop-list .shop-item .shop-context[data-v-997d14ec]{font-size:%?20?%}.shop-list .shop-item .shop-context .shop-info[data-v-997d14ec]{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?20?%}.shop-list .shop-item .shop-context .shop-info .name[data-v-997d14ec]{font-size:%?26?%;margin-right:%?10?%;-webkit-flex-shrink:0;flex-shrink:0}.shop-list .shop-item .shop-context .order[data-v-997d14ec]{margin-top:%?12?%}.shop-list .shop-item .shop-context .params[data-v-997d14ec]{box-sizing:border-box}.shop-list .shop-item .shop-context .params uni-text[data-v-997d14ec]{margin-right:%?10?%}.shop-list .shop-item .shop-context .params uni-text[data-v-997d14ec]:last-child{margin-right:0}.vip-list[data-v-997d14ec]{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?12?% %?24?%;border-bottom:1px solid #f1f1f1}.vip-list .vip-show[data-v-997d14ec]{width:%?80?%;height:%?80?%;margin-right:%?24?%}.vip-list .vip-show uni-image[data-v-997d14ec]{width:100%;height:100%}.vip-list .vip-context[data-v-997d14ec]{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;font-size:%?28?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.btn[data-v-997d14ec]{box-sizing:border-box;padding:%?30?%}.hidden[data-v-997d14ec]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',""]),t.exports=i},"8ac9":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e("0708"),a={data:function(){return{baseURL:this.$api,shop:[],vip:[],uid:0,currentIndex:0,navList:[{title:"店家数",number:"0人"},{title:"VIP会员",number:"0人"}]}},onLoad:function(t){var i=t.id;this.uid=i,this.getList(i)},methods:{getList:function(t){var i=this;(0,n.request)({url:"index.php?s=/wap/member/apiGetStaffInfo",method:"POST",data:{uid:t}}).then((function(t){1==t.data.code&&(i.shop=t.data.shop,i.vip=t.data.vip,i.navList[0].number=t.data.countshop,i.navList[1].number=t.data.countvip)}))},changeNabIndex:function(t){this.currentIndex=t},goSet:function(t){uni.navigateTo({url:"/pages/components/staff-info/staff-set?id="+t})}}};i.default=a},"8d9f":function(t,i,e){"use strict";e.r(i);var n=e("307b"),a=e("0196");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("014c");var o,r=e("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"997d14ec",null,!1,n["a"],o);i["default"]=c.exports}}]);