(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e1b28"],{"7c17":function(e,t,i){"use strict";i.r(t),i.d(t,"crudOptions",(function(){return s}));var a=i("5a0c"),r=i.n(a),l=i("be16");function n(e){return null==e&&(e=new Date),e.setHours(12),e.setMinutes(0),e.setSeconds(0),e}function o(e,t){e.setTime(e.getTime()+864e5*t)}var s={columns:[{title:"id",key:"id",sortable:!0,search:{disabled:!0},align:"center",width:"80",form:{addDisabled:!0,editDisabled:!0,rules:[{required:!0,message:"请输入id"}]}},{title:"添加时间",key:"createDate",sortable:!0,search:{key:"create_date",disabled:!0},align:"center",type:"datetime",width:"160",form:{addDisabled:!0,editDisabled:!0,rules:[{required:!0,message:"请输入创建时间"}]}},{title:"手机号",key:"mobileValue",sortable:!0,align:"center",search:{disabled:!1,width:"260px"},type:"phoneNumber",form:{editDisabled:!0,rules:[{required:!0,message:"请输入手机号"},{validator:l["mobileValidator"],message:"手机号不正确"}]},valueBuilder:function(e){e.mobileValue={phoneNumber:e.mobile,callingCode:e.telAreaCode}},valueResolve:function(e){null!=e.mobileValue&&(e.mobile=e.mobileValue.phoneNumber,e.telAreaCode=e.mobileValue.callingCode)}},{title:"客户姓名",key:"guestName",sortable:!0,search:{disabled:!1},form:{rules:[{required:!1,message:"请输入客户姓名"}]}},{title:"房间",key:"roomId",sortable:!0,search:{disabled:!1,component:{props:{clearable:!0}}},align:"center",type:"select",form:{editDisabled:!0,rules:[{required:!0,message:"请选择房间"}],props:{filterable:!0}},dict:{url:"/hotel/room/options"}},{title:"入住时间",key:"checkInRange",sortable:!0,width:260,type:"datetimerange",search:{disabled:!0},align:"center",form:{rules:[{required:!0,message:"请输入入住时间"}],component:{span:12,"time-arrow-control":!0,"default-time":["12:00:00","12:00:00"],"picker-options":{shortcuts:[{text:"今天一晚",onClick:function(e){var t=new Date,i=n();o(i,1),e.$emit("pick",[t,i])}},{text:"今天两晚",onClick:function(e){var t=new Date,i=n();o(i,2),e.$emit("pick",[t,i])}},{text:"今天三晚",onClick:function(e){var t=new Date,i=n();o(i,3),e.$emit("pick",[t,i])}},{text:"今天四晚",onClick:function(e){var t=new Date,i=n();o(i,4),e.$emit("pick",[t,i])}},{text:"明天一晚",onClick:function(e){var t=n(),i=n();o(t,1),o(i,2),e.$emit("pick",[t,i])}},{text:"明天两晚",onClick:function(e){var t=new Date,i=new Date;o(t,1),o(i,3),e.$emit("pick",[t,i])}},{text:"明天三晚",onClick:function(e){var t=new Date,i=new Date;o(t,1),o(i,3),e.$emit("pick",[t,i])}}]}}},formatter:function(e,t,i,a){return r()(e.checkInTime).format("YYYY-MM-DD HH:mm")+"至"+r()(e.checkOutTime).format("YYYY-MM-DD HH:mm")}},{title:"天数",key:"dayCount",sortable:!0,align:"center",search:{disabled:!0},form:{disabled:!0,rules:[{required:!0,message:"请输入天数"}]}},{title:"备注",key:"remark",columnName:"remark",sortable:!0,search:{name:"remark",disabled:!0},form:{rules:[{required:!1,message:"请输入备注"}]}}]}}}]);