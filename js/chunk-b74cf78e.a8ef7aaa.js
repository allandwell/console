(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b74cf78e","chunk-739b6b6f","chunk-2d0e4c20"],{5698:function(e,t,n){"use strict";n.r(t),n.d(t,"GetList",(function(){return c})),n.d(t,"AddObj",(function(){return a})),n.d(t,"UpdateObj",(function(){return u})),n.d(t,"DelObj",(function(){return s})),n.d(t,"GetCascadeData",(function(){return o}));var r=n("f58c");function c(e){return Object(r["a"])({url:"/deepData/page",method:"get",data:e})}function a(e){return Object(r["a"])({url:"/deepData/add",method:"post",data:e})}function u(e){return Object(r["a"])({url:"/deepData/update",method:"post",data:e})}function s(e){return Object(r["a"])({url:"/deepData/delete",method:"post",data:{id:e}})}function o(){return Object(r["a"])({url:"/deepData/cascadeData",method:"get"})}},"581b":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("d2-container",{class:{"page-compact":e.crud.pageOptions.compact}},[n("template",{slot:"header"},[e._v(" 多级数据 "),n("span",{staticStyle:{color:"gray","font-size":"12px"}},[e._v("数据嵌套object的处理{ id: 1, user: { name: '小红' , gender: 2 } }，【配置点号key即可，key:'user.name'】 ")])]),n("d2-crud-x",e._g(e._b({ref:"d2Crud"},"d2-crud-x",e._crudProps,!1),e._crudListeners),[n("div",{attrs:{slot:"header"},slot:"header"},[n("crud-search",{ref:"search",attrs:{options:e.crud.searchOptions},on:{submit:e.handleSearch}}),n("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.addRow}},[n("i",{staticClass:"el-icon-plus"}),e._v(" 新增")]),n("crud-toolbar",{attrs:{search:e.crud.searchOptions.show,compact:e.crud.pageOptions.compact,columns:e.crud.columns},on:{"update:search":function(t){return e.$set(e.crud.searchOptions,"show",t)},"update:compact":function(t){return e.$set(e.crud.pageOptions,"compact",t)},refresh:function(t){return e.doRefresh()},"columns-filter-changed":e.handleColumnsFilterChanged}})],1)])],2)},c=[],a=n("5698"),u=n("921b"),s=n("1fbf"),o={name:"formView",mixins:[s["d2CrudPlus"].crud],data:function(){return{show:!0}},mounted:function(){console.log("dict cache：",s["d2CrudPlus"].util.dict.getCache())},methods:{getCrudOptions:function(){return Object(u["crudOptions"])(this)},pageRequest:function(e){return Object(a["GetList"])(e)},addRequest:function(e){return Object(a["AddObj"])(e)},updateRequest:function(e){return Object(a["UpdateObj"])(e)},delRequest:function(e){return Object(a["DelObj"])(e.id)}}},d=o,i=n("2877"),l=function(e){e.options.__source="src/business/modules/example/views/form/deepData/index.vue"},p=l,f=Object(i["a"])(d,r,c,!1,null,null,null);"function"===typeof p&&p(f);t["default"]=f.exports},"921b":function(e,t,n){"use strict";n.r(t),n.d(t,"crudOptions",(function(){return r}));var r=function(e){return{pageOptions:{compact:!0},options:{height:"100%"},viewOptions:{componentType:"form",disabled:!1},columns:[{title:"ID",key:"id",width:90,form:{disabled:!0}},{title:"用户名",key:"user.name",search:{},sortable:!0},{title:"性别",key:"user.gender",sortable:!0,search:{disabled:!1},type:"select",dict:{data:[{value:0,label:"未知"},{value:1,label:"男"},{value:2,label:"女"}]}},{title:"部门名称",key:"dept.name",sortable:!0,search:{disabled:!0}},{title:"部门状态",key:"dept.status",sortable:!0,search:{disabled:!0},type:"radio",dict:{url:"/dicts/OpenStatusEnum"},form:{component:{span:24}}},{title:"爱好",key:"checkbox",sortable:!0,search:{disabled:!0},type:"checkbox",dict:{url:"/dicts/OpenStatusEnum"},form:{component:{span:24}}}]}}},f58c:function(e,t,n){"use strict";var r=n("22ce"),c=r["c"];t["a"]=c}}]);