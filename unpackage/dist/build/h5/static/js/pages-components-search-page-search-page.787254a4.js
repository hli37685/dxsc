(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-components-search-page-search-page"],{"0c45":function(e,t,i){"use strict";i.r(t);var a=i("db4f"),n=i("8547");for(var s in n)"default"!==s&&function(e){i.d(t,e,(function(){return n[e]}))}(s);i("bf48");var o,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"6359963d",null,!1,a["a"],o);t["default"]=c.exports},"16c3":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i("0708"),n={data:function(){return{flag:!0,text:"",searchText:"",list:[]}},components:{},onShow:function(){var e=this;uni.getStorage({key:"keywords",success:function(t){e.$store.state.keywords=t.data,e.list=t.data}})},methods:{handleSearch:function(e){this.searchText=e.detail.value},searchData:function(){var e=this;(0,a.request)({url:"index.php?s=wap/goods/goodsSearchList",method:"post",data:{sear_name:this.searchText}}).then((function(t){200==t.data.code&&(e.$store.commit("search",t.data),uni.navigateTo({url:"../goods-result/goods-result"}))}))},search:function(){""!=this.searchText?(this.$store.commit("saveKeywords",{keywords:this.searchText}),this.searchData()):uni.showToast({title:"请输入要搜索的产品",icon:"none"})},handleClick:function(e){this.searchText=e,this.searchData()}}};t.default=n},"3f2a":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-6359963d]{width:100%;height:100%;background:#efeff4}uni-page-body .classify-search[data-v-6359963d]{box-sizing:border-box;padding:0 %?30?%;border-bottom:1px solid #e5e5e5;background:#fff}uni-page-body .classify-search .search[data-v-6359963d]{box-sizing:border-box;height:%?88?%;line-height:%?88?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}uni-page-body .classify-search .search .search-input[data-v-6359963d]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box}uni-page-body .classify-search .search .search-input uni-image[data-v-6359963d]{width:%?35?%;height:%?35?%}uni-page-body .classify-search .search .search-input uni-input[data-v-6359963d]{-webkit-box-flex:1;-webkit-flex:1;flex:1;box-sizing:border-box;margin-left:%?10?%}uni-page-body .classify-search .search .search-img[data-v-6359963d]{box-sizing:border-box;border-left:1px solid #e5e5e5}uni-page-body .classify-search .search .search-img uni-text[data-v-6359963d]{margin-left:%?36?%;font-size:%?28?%;color:#9d9d9d}uni-page-body .classify-search .search .search-img uni-image[data-v-6359963d]{width:%?55?%;height:%?50?%;position:relative;margin-left:%?36?%;top:%?4?%}uni-page-body .list-box[data-v-6359963d]{box-sizing:border-box;margin-top:%?20?%;font-size:%?30?%;color:#505050;line-height:%?85?%}uni-page-body .list-box .list-item[data-v-6359963d]{box-sizing:border-box;padding:0 %?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;border-bottom:1px solid #e7e7e7}uni-page-body .list-box .list-item uni-text[data-v-6359963d]{-webkit-box-flex:1;-webkit-flex:1;flex:1}uni-page-body .list-box .list-item uni-image[data-v-6359963d]{width:%?24?%;height:%?24?%}body.?%PAGE?%[data-v-6359963d]{background:#efeff4}',""]),e.exports=t},8547:function(e,t,i){"use strict";i.r(t);var a=i("16c3"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,(function(){return a[e]}))}(s);t["default"]=n.a},"91ca":function(e,t,i){var a=i("3f2a");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("c1e396a8",a,!0,{sourceMap:!1,shadowMode:!1})},bf48:function(e,t,i){"use strict";var a=i("91ca"),n=i.n(a);n.a},db4f:function(e,t,i){"use strict";var a,n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"classify-search"},[i("v-uni-view",{staticClass:"search"},[i("v-uni-view",{staticClass:"search-input"},[i("v-uni-image",{attrs:{src:"/static/images/search.png"}}),i("v-uni-input",{attrs:{type:"text",placeholder:"输入您要搜索的宝贝..","placeholder-class":"placeholder"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.handleSearch(t)}}})],1),i("v-uni-view",{staticClass:"search-img"},[i("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}},[e._v("搜索")])],1)],1)],1),i("v-uni-view",{staticClass:"list-box"},e._l(e.list,(function(t,a){return i("v-uni-view",{key:a,staticClass:"list-item",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.handleClick(t)}}},[i("v-uni-text",[e._v(e._s(t))]),i("v-uni-image",{attrs:{src:"/static/images/icon-right.png"}})],1)})),1)],1)},s=[];i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return a}))}}]);