(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bed58b4"],{2377:function(e,t,n){},"5b7e":function(e,t,n){"use strict";n("2377")},f593:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-app"},[n("TheSidebar"),n("CWrapper",[n("TheHeader"),n("div",{staticClass:"c-body"},[n("main",{staticClass:"c-main"},[n("CContainer",{attrs:{fluid:""}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view",{key:e.$route.path})],1)],1)],1)]),n("TheFooter")],1)],1)},i=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("CSidebar",{attrs:{fixed:"",minimize:e.minimize,show:e.show},on:{"update:show":function(t){return e.$store.commit("set",["sidebarShow",t])}}},[n("CSidebarBrand",{staticClass:"d-md-down-none",attrs:{to:"/admin"}},[n("span",{staticClass:"h1"},[e._v("三葉餐廳")])]),n("CRenderFunction",{attrs:{flat:"","content-to-render":e.$options.nav}}),n("CSidebarMinimizer",{staticClass:"d-md-down-none",nativeOn:{click:function(t){return e.$store.commit("set",["sidebarMinimize",!e.minimize])}}})],1)},s=[],o=[{_name:"CSidebarNav",_children:[{_name:"CSidebarNavTitle",_children:["我的表單"]},{_name:"CSidebarNavItem",name:"新增表單",to:"/admin/new-form",icon:"cil-pencil"},{_name:"CSidebarNavItem",name:"表單列表",to:"/admin/form-list",icon:"cil-applications"},{_name:"CSidebarNavTitle",_children:["訂單作業"]},{_name:"CSidebarNavItem",name:"訂單明細",to:"/admin/show-orders",icon:"cil-magnifying-glass"},{_name:"CSidebarNavItem",name:"當日統計",to:"/admin/order-analysis",icon:"cil-magnifying-glass"},{_name:"CSidebarNavTitle",_children:["管理報表"]},{_name:"CSidebarNavItem",name:"交易明細",to:"/theme/colors",icon:"cil-drop"}]}],c={name:"TheSidebar",nav:o,computed:{show:function(){return this.$store.state.sidebarShow},minimize:function(){return this.$store.state.sidebarMinimize}}},l=c,m=n("2877"),d=Object(m["a"])(l,r,s,!1,null,null,null),u=d.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("CHeader",{attrs:{fixed:"","with-subheader":"",light:""}},[n("CToggler",{staticClass:"ml-3 d-lg-none",attrs:{"in-header":""},on:{click:function(t){return e.$store.commit("toggleSidebarMobile")}}}),n("CToggler",{staticClass:"ml-3 d-md-down-none",attrs:{"in-header":""},on:{click:function(t){return e.$store.commit("toggleSidebarDesktop")}}}),n("CHeaderNav",{staticClass:"mr-4"}),n("CSubheader",{staticClass:"px-3"},[n("CBreadcrumbRouter",{staticClass:"border-0 mb-0"})],1)],1)},h=[],C={name:"TheHeader",components:{}},f=C,p=Object(m["a"])(f,b,h,!1,null,null,null),v=p.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("CFooter",{attrs:{fixed:!1}},[n("div",[n("span",{staticClass:"ml-1"},[e._v("© "+e._s((new Date).getFullYear())+" Becky & Jimmy")])])])},w=[],S={name:"TheFooter"},g=S,T=Object(m["a"])(g,_,w,!1,null,null,null),$=T.exports,N={name:"TheContainer",components:{TheSidebar:u,TheHeader:v,TheFooter:$}},k=N,x=(n("5b7e"),Object(m["a"])(k,a,i,!1,null,"3b21ac01",null));t["default"]=x.exports}}]);
//# sourceMappingURL=chunk-7bed58b4.2b8e15d4.js.map