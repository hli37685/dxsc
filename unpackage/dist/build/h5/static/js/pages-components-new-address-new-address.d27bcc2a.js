(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-components-new-address-new-address"],{"0c4d":function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=t("0708"),s={data:function(){return{province:[{province_name:"请选择"}],city:[{city_name:"请选择"}],district:[{distrcit_name:"请选择"}],provinceId:[],cityId:[],districtId:[],selectProvince:1,selectCity:0,selectDistrict:0,consigner:"",mobile:"",address:"",is_default:!1,address_id:0,address_info:[]}},onLoad:function(e){"undefined"!=typeof e.id?(this.address_id=e.id,this.getAddress(this.address_id)):this.getProvince()},methods:{bindSelectProvince:function(e){this.selectProvince=e.detail.value,this.getCity()},bindSelectCity:function(e){this.selectCity=e.detail.value,this.getDistrict()},bindSelectDistrict:function(e){this.selectDistrict=e.detail.value},getProvince:function(){var e=this,i=this.address_id,t=this.address_info;(0,n.request)({url:"index.php?s=/wap/index/getProvince",method:"POST"}).then((function(n){var s=n.data;if(console.log(t),i>0)for(var a in s)console.log(s[a].province_id+" - "+t.province),s[a].province_id==t.province&&(e.selectProvince=a);e.province=s,e.getCity()}))},getCity:function(){var e=this,i=this.address_id,t=this.address_info;(0,n.request)({url:"index.php?s=/wap/index/getCity",data:{province_id:e.province[e.selectProvince].province_id},method:"POST"}).then((function(n){var s=n.data;if(i>0)for(var a in s)console.log(s[a].province_id+" - "+t.province),s[a].city_id==t.city&&(e.selectCity=a);e.city=s,e.getDistrict()}))},getDistrict:function(){var e=this,i=this.address_id,t=this.address_info;(0,n.request)({url:"index.php?s=/wap/index/getDistrict",data:{city_id:e.city[e.selectCity].city_id},method:"POST"}).then((function(n){var s=n.data;if(i>0)for(var a in s)console.log(s[a].district_id+" - "+t.district),s[a].district_id==t.district&&(e.selectDistrict=a);e.district=s}))},getAddress:function(e){var i=this;(0,n.request)({url:"index.php?s=/wap/member/getMemberAddressDetail",method:"POST",data:{id:e}}).then((function(e){i.address_info=e.data,i.consigner=e.data.consigner,i.mobile=e.data.mobile,i.address=e.data.address,i.is_default=1==e.data.is_default,i.getProvince()}))},setDefault:function(e){console.log(this.is_default);var i=this.is_default;this.is_default=0==i},saveAddress:function(){var e=this,i={id:e.address_id,consigner:e.consigner,mobile:e.mobile,phone:e.mobile,address:e.address,province:e.province[e.selectProvince].province_id,city:e.city[e.selectCity].city_id,district:e.district[e.selectDistrict].district_id,is_default:e.is_default};(0,n.request)({url:"index.php?s=/wap/member/addMemberAddress",data:i,method:"POST"}).then((function(e){uni.showToast({title:"添加成功",icon:"success"}),uni.navigateBack({delta:1})}))}}};i.default=s},"137b":function(e,i,t){var n=t("24fb");i=n(!1),i.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-52604f10]{background:#efeff4;box-sizing:border-box;padding-bottom:%?90?%}.address-box[data-v-52604f10]{box-sizing:border-box}.address-box .address-item[data-v-52604f10]{box-sizing:border-box;padding:%?30?%;border-bottom:1px solid #e7e7e7;font-size:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;background:#fff}.address-box .address-item uni-view[data-v-52604f10]{width:%?165?%}.address-box .address-item uni-view uni-text[data-v-52604f10]{color:#000}.address-box .address-item uni-input[data-v-52604f10]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.address-box .address-item.default[data-v-52604f10]{margin-top:%?20?%}.save[data-v-52604f10]{box-sizing:border-box;position:fixed;left:0;bottom:0;width:100%;height:%?90?%;font-size:%?30?%;color:#fff;z-index:2}.save uni-button[data-v-52604f10]{width:100%;height:100%}.placeholder[data-v-52604f10]{font-size:%?30?%;color:#b7b7b7}body.?%PAGE?%[data-v-52604f10]{background:#efeff4}',""]),e.exports=i},"77bb":function(e,i,t){"use strict";var n,s=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",[t("v-uni-view",{staticClass:"address-box"},[t("v-uni-view",{staticClass:"address-item"},[t("v-uni-view",[t("v-uni-text",[e._v("收货人")])],1),t("v-uni-input",{attrs:{type:"text",placeholder:"请输入收货人姓名","placeholder-class":"placeholder"},model:{value:e.consigner,callback:function(i){e.consigner=i},expression:"consigner"}})],1),t("v-uni-view",{staticClass:"address-item"},[t("v-uni-view",[t("v-uni-text",[e._v("电话号码")])],1),t("v-uni-input",{attrs:{type:"text",placeholder:"请输入电话号码","placeholder-class":"placeholder"},model:{value:e.mobile,callback:function(i){e.mobile=i},expression:"mobile"}})],1),t("v-uni-view",{staticClass:"address-item"},[t("v-uni-view",[t("v-uni-text",[e._v("所在地区")])],1),t("v-uni-picker",{attrs:{value:e.selectProvince,range:e.province,"range-key":"province_name"},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.bindSelectProvince.apply(void 0,arguments)}}},[e.province.length>1?t("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.province[e.selectProvince].province_name))]):e._e()],1),t("v-uni-picker",{attrs:{value:e.selectCity,range:e.city,"range-key":"city_name"},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.bindSelectCity.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.city[e.selectCity].city_name))])],1),t("v-uni-picker",{attrs:{value:e.selectDistrict,range:e.district,"range-key":"district_name"},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.bindSelectDistrict.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.district[e.selectDistrict].district_name))])],1)],1),t("v-uni-view",{staticClass:"address-item"},[t("v-uni-view",[t("v-uni-text",[e._v("详细信息")])],1),t("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请输入详细地址","placeholder-class":"placeholder"},model:{value:e.address,callback:function(i){e.address=i},expression:"address"}})],1),t("v-uni-view",{staticClass:"address-item default"},[t("v-uni-view",[t("v-uni-text",[e._v("设为默认")])],1),t("v-uni-label",{staticClass:"radio"},[t("v-uni-radio",{attrs:{checked:e.is_default,color:"#FED940"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.setDefault.apply(void 0,arguments)}}})],1)],1)],1),t("v-uni-view",{staticClass:"save"},[t("v-uni-button",{staticStyle:{background:"#FED940",color:"#000"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.saveAddress()}}},[e._v("保存")])],1)],1)},a=[];t.d(i,"b",(function(){return s})),t.d(i,"c",(function(){return a})),t.d(i,"a",(function(){return n}))},"77e2":function(e,i,t){"use strict";var n=t("b3b6"),s=t.n(n);s.a},ae30:function(e,i,t){"use strict";t.r(i);var n=t("77bb"),s=t("f70a");for(var a in s)"default"!==a&&function(e){t.d(i,e,(function(){return s[e]}))}(a);t("77e2");var d,r=t("f0c5"),c=Object(r["a"])(s["default"],n["b"],n["c"],!1,null,"52604f10",null,!1,n["a"],d);i["default"]=c.exports},b3b6:function(e,i,t){var n=t("137b");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=t("4f06").default;s("582fbf8c",n,!0,{sourceMap:!1,shadowMode:!1})},f70a:function(e,i,t){"use strict";t.r(i);var n=t("0c4d"),s=t.n(n);for(var a in n)"default"!==a&&function(e){t.d(i,e,(function(){return n[e]}))}(a);i["default"]=s.a}}]);