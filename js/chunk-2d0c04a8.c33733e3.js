(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c04a8"],{"40c9":function(t,e,n){"use strict";n.r(e),n.d(e,"crudOptions",(function(){return o}));var o=function(t){return{options:{height:"100%"},selectionRow:!0,rowHandle:{view:{type:"text"},edit:{type:"text"},remove:{type:"text",style:{color:"red"}}},columns:[{title:"ID",key:"id",width:90,form:{disabled:!0}},{title:"行编辑",key:"status",sortable:!0,search:{},type:"select",dict:{url:"/dicts/OpenStatusEnum",data:void 0},width:"150px",form:{component:{disabled:function(t){var e=t.form;return e.switch}},valueChange:function(e,n){console.log("-----你选择了",n,t.crud.columnsMap.status.component.props.dict.dataMap[n].label)}},component:{name:"dict-select",disabled:function(t){var e=t.form;return e.switch}}},{title:"禁用",key:"switch",sortable:!0,search:{},type:"switch",width:"150px",form:{valueChange:function(t,e){console.log("-----你选择了",e)}}},{title:"blank",key:"blank"}]}}}}]);