(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47bde794"],{"13d5":function(e,t,r){"use strict";var i=r("23e7"),n=r("d58f").left,a=r("a640"),o=r("ae40"),c=a("reduce"),l=o("reduce",{1:0});i({target:"Array",proto:!0,forced:!c||!l},{reduce:function(e){return n(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"1c15":function(e,t,r){"use strict";r.r(t),r.d(t,"crudOptions",(function(){return n}));r("a623"),r("4160"),r("d81d"),r("13d5"),r("a9e3"),r("159b");var i=r("f58c"),n={rowHandle:{width:370,custom:[{text:" 自定义",type:"warning",size:"small",emit:"customHandleBtn",icon:"el-icon-s-flag"}],fixed:"right"},pageOptions:{compact:!0},options:{hide:!0,height:"100%",highlightCurrentRow:!0,rowKey:"id",lazy:!0,load:function(e,t,r){Object(i["a"])({url:"/column/children",method:"get",data:{id:e.id}}).then((function(e){console.log("懒加载数据",e.data),r(e.data)}))},showSummary:!0,summaryMethod:function(e){var t=e.columns,r=e.data,i=[];return t.forEach((function(e,t){if(0!==t){var n=r.map((function(t){return Number(t[e.property])}));n.every((function(e){return isNaN(e)}))?i[t]="":(i[t]=n.reduce((function(e,t){var r=Number(t);return isNaN(r)?e:e+t}),0),i[t]+=" 元")}else i[t]="总价"})),i}},indexRow:{title:"序号",align:"center"},selectionRow:{align:"center",width:100},expandRow:{title:"展开",align:"center"},columns:[{title:"数据列",key:"data",sortable:!0,width:200},{title:"ID",key:"id",width:90,form:{disabled:!0}},{title:"时间",key:"time",type:"datetime",sortable:!0,width:160},{title:"地区",key:"province",sortable:!0,search:{key:"province",disabled:!1},type:"select",form:{component:{props:{filterable:!0,multiple:!0,clearable:!0}}},dict:{data:[{value:"sz",label:"深圳"},{value:"gz",label:"广州"},{value:"wh",label:"武汉"},{value:"sh",label:"上海"}]},width:300},{title:"金额(元)",key:"amount",sortable:!0}]}},a623:function(e,t,r){"use strict";var i=r("23e7"),n=r("b727").every,a=r("a640"),o=r("ae40"),c=a("every"),l=o("every");i({target:"Array",proto:!0,forced:!c||!l},{every:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},d58f:function(e,t,r){var i=r("1c0b"),n=r("7b0b"),a=r("44ad"),o=r("50c4"),c=function(e){return function(t,r,c,l){i(r);var u=n(t),d=a(u),s=o(u.length),f=e?s-1:0,h=e?-1:1;if(c<2)while(1){if(f in d){l=d[f],f+=h;break}if(f+=h,e?f<0:s<=f)throw TypeError("Reduce of empty array with no initial value")}for(;e?f>=0:s>f;f+=h)f in d&&(l=r(l,d[f],f,u));return l}};e.exports={left:c(!1),right:c(!0)}},f58c:function(e,t,r){"use strict";var i=r("22ce"),n=i["c"];t["a"]=n}}]);