(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84ee29ae","chunk-73b1a3ab","chunk-2d0b8e54"],{3144:function(t,e,n){"use strict";n.r(e),n.d(e,"crudOptions",(function(){return r}));var r={options:{height:"100%",rowKey:"id"},selectionRow:{align:"center",width:46},pagination:{layout:"slot, prev, pager , next , jumper , -> , total "},columns:[{title:"ID",key:"id",width:90,form:{disabled:!0}},{title:"创建时间",key:"createDate",type:"datetime",width:200,search:{}},{title:"text",key:"text"}]}},"63ba":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("d2-container",{class:{"page-compact":t.crud.pageOptions.compact}},[n("template",{slot:"header"},[t._v(" 批量删除 "),n("example-helper",{attrs:{title:"自定义组件帮助说明"}},[n("div",[t._v(" 右下角查看源码 ")])])],1),n("d2-crud-x",t._g(t._b({ref:"d2Crud"},"d2-crud-x",t._crudProps,!1),t._crudListeners),[n("div",{attrs:{slot:"header"},slot:"header"},[n("crud-search",{ref:"search",attrs:{options:t.crud.searchOptions},on:{submit:t.handleSearch}}),n("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.addRow}},[n("i",{staticClass:"el-icon-plus"}),t._v(" 新增")]),n("crud-toolbar",t._g(t._b({},"crud-toolbar",t._crudToolbarProps,!1),t._crudToolbarListeners))],1),n("span",{staticClass:"prefix",attrs:{slot:"PaginationPrefixSlot"},slot:"PaginationPrefixSlot"},[n("el-button",{staticClass:"square",attrs:{size:"mini",title:"批量删除",icon:"el-icon-delete",disabled:!t.multipleSelection||0==t.multipleSelection.length},on:{click:t.batchDelete}})],1)])],2)},a=[],c=n("f1a2"),o=n("3144"),u=n("1fbf"),i={name:"formBatchDel",components:{},mixins:[u["d2CrudPlus"].crud],data:function(){return{}},methods:{getCrudOptions:function(){return o["crudOptions"]},pageRequest:function(t){return c["GetList"](t)},addRequest:function(t){return c["AddObj"](t)},updateRequest:function(t){return c["UpdateObj"](t)},delRequest:function(t){return c["DelObj"](t.id)},batchDelRequest:function(t){return c["BatchDel"](t)}}},s=i,d=n("2877"),l=function(t){t.options.__source="src/business/modules/example/views/form/batchDel/index.vue"},p=l,f=Object(d["a"])(s,r,a,!1,null,null,null);"function"===typeof p&&p(f);e["default"]=f.exports},f1a2:function(t,e,n){"use strict";n.r(e),n.d(e,"GetList",(function(){return a})),n.d(e,"AddObj",(function(){return c})),n.d(e,"UpdateObj",(function(){return o})),n.d(e,"DelObj",(function(){return u})),n.d(e,"BatchDel",(function(){return i}));var r=n("f58c");function a(t){return Object(r["a"])({url:"/batchDel/page",method:"get",data:t})}function c(t){return Object(r["a"])({url:"/batchDel/add",method:"post",data:t})}function o(t){return Object(r["a"])({url:"/batchDel/update",method:"post",data:t})}function u(t){return Object(r["a"])({url:"/batchDel/delete",method:"post",data:{id:t}})}function i(t){return Object(r["a"])({url:"/batchDel/batchDelete",method:"post",data:{ids:t}})}},f58c:function(t,e,n){"use strict";var r=n("22ce"),a=r["c"];e["a"]=a}}]);