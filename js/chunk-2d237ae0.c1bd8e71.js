(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d237ae0"],{fbc1:function(e,t,n){"use strict";function a(e){return null==e||""===e}function r(...e){for(const t of e)if(null!=t&&""!==t)return!1;return!1}function i(...e){for(const t of e)if(null==t||""===t)return!0;return!1}n.r(t),n.d(t,"crudOptions",(function(){return p}));const o={isEmpty:a,isAllEmpty:r,hasEmpty:i};var d=o;function m(e){return null==e&&(e=new Date),e.setHours(12),e.setMinutes(0),e.setSeconds(0),e}function l(e,t){e.setTime(e.getTime()+864e5*t)}var c=[{text:"今天一晚",onClick:function(e){var t=new Date,n=m();l(n,1),e.$emit("pick",[t,n])}},{text:"今天两晚",onClick:function(e){var t=new Date,n=m();l(n,2),e.$emit("pick",[t,n])}},{text:"今天三晚",onClick:function(e){var t=new Date,n=m();l(n,3),e.$emit("pick",[t,n])}},{text:"今天四晚",onClick:function(e){var t=new Date,n=m();l(n,4),e.$emit("pick",[t,n])}},{text:"明天一晚",onClick:function(e){var t=m(),n=m();l(t,1),l(n,2),e.$emit("pick",[t,n])}},{text:"明天两晚",onClick:function(e){var t=new Date,n=new Date;l(t,1),l(n,3),e.$emit("pick",[t,n])}},{text:"明天三晚",onClick:function(e){var t=new Date,n=new Date;l(t,1),l(n,3),e.$emit("pick",[t,n])}}],p={formOptions:{width:"60%"},options:{height:"100%"},searchOptions:{form:{daterange:[]}},columns:[{title:"ID",key:"id",width:90,form:{disabled:!0}},{title:"时间戳",key:"timestamp",sortable:!0,type:"datetime",search:{width:185},component:{props:{elProps:{clearable:!0}}}},{title:"清空时间戳",key:"clear",sortable:!0,type:"button",form:{valueChange:function(e,t,n,a){n.timestamp=""},helper:"仅做valueChange的演示，实际清空输入框有更好的方式"}},{title:"日期时间",key:"datetime",sortable:!0,type:"datetime",form:{component:{props:{format:"yyyy-MM-dd HH:mm",valueFormat:"yyyy-MM-dd HH:mm"}}},component:{props:{format:"YYYY-MM-DD HH:mm"}}},{title:"仅日期",key:"date",sortable:!0,type:"date"},{title:"禁用日期",key:"date2",sortable:!0,type:"date",form:{component:{props:{"picker-options":{disabledDate:function(e){return e.getTime()<Date.now()}}}}}},{title:"仅时间",key:"time",sortable:!0,type:"time"},{title:"日期范围",key:"daterange",sortable:!0,type:"daterange",search:{disabled:!1,width:300},form:{component:{props:{"time-arrow-control":!1,"picker-options":{shortcuts:c}}}},valueBuilder:function(e,t){d.hasEmpty(e.daterangeStart,e.daterangeEnd)||(e.daterange=[new Date(e.daterangeStart),new Date(e.daterangeEnd)])},valueResolve:function(e,t){null!=e.daterange&&e.daterange.length>1?(e.daterangeStart=e.daterange[0].getTime(),e.daterangeEnd=e.daterange[1].getTime()):(e.daterangeStart=null,e.daterangeEnd=null)}},{title:"日期时间范围",key:"datetimerange",sortable:!0,type:"datetimerange",width:300,form:{component:{props:{"time-arrow-control":!0,"default-time":["12:00:00","12:00:00"],"picker-options":{shortcuts:c}}}},valueBuilder:function(e,t){d.hasEmpty(e.datetimerangeStart,e.datetimerangeEnd)||(e.datetimerange=[new Date(e.datetimerangeStart),new Date(e.datetimerangeEnd)])},valueResolve:function(e,t){null==e.datetimerange||d.hasEmpty(e.datetimerange)?(e.datetimerangeStart=null,e.datetimerangeEnd=null):(e.datetimerangeStart=e.datetimerange[0].getTime(),e.datetimerangeEnd=e.datetimerange[1].getTime())}}]}}}]);