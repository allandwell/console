(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d780d"],{"76a9":function(e,t,i){"use strict";i.r(t),i.d(t,"crudOptions",(function(){return s}));var l=i("be16"),a=i("22ce"),s=function(e){return{options:{height:"100%"},rowHandle:{width:180,view:{thin:!0,text:null,disabled:function(){return!e.hasPermissions("usersphere:user:view")}},edit:{thin:!0,text:null,disabled:function(){return!e.hasPermissions("usersphere:user:edit")}},remove:{thin:!0,text:null,disabled:function(){return!e.hasPermissions("usersphere:user:del")}},custom:[{thin:!0,text:null,type:"warning",size:"small",emit:"authz",icon:"el-icon-s-flag",disabled:function(){return!e.hasPermissions("usersphere:user:authz")}}]},columns:[{title:"id",key:"id",width:70,form:{disabled:!0},sortable:!0},{title:"创建时间",key:"createTime",type:"datetime",width:140,form:{disabled:!0},sortable:!0},{title:"修改时间",key:"updateTime",type:"datetime",width:140,form:{disabled:!0},sortable:!0},{title:"用户名",key:"username",search:{disabled:!1},form:{editDisabled:!0,rules:[{required:!0,message:"请输入用户名"}]},sortable:!0},{title:"密码",key:"password",form:{component:{props:{showPassword:!0}},helper:"填写则修改密码"},disabled:!0,sortable:!0},{title:"昵称",key:"nickname",search:{disabled:!1},sortable:!0},{title:"手机号",key:"mobileValue",type:"phoneNumber",width:150,form:{rules:[{required:!0,message:"请输入手机号"},{validator:l["mobileValidator"],message:"手机号不正确"}]},valueBuilder:function(e){e.mobileValue={phoneNumber:e.mobile,callingCode:e.callingCode}},valueResolve:function(e){null!=e.mobileValue&&(e.mobile=e.mobileValue.phoneNumber,e.callingCode=e.mobileValue.callingCode)},search:{disabled:!1,width:"260px"},sortable:!0},{title:"头像",key:"avatar",type:"avatar-uploader",width:100,sortable:!0},{title:"性别",key:"gender",type:"radio",width:70,dict:{data:[{value:1,label:"男"},{value:2,label:"女",color:"danger"}]},sortable:!0},{title:"邮箱",key:"email",search:{disabled:!1},form:{rules:[{required:!1,message:"请输入邮箱"},{type:"email",message:"请输入正确的邮箱"}]},sortable:!0},{title:"角色",key:"roles",type:"select",width:250,dict:{url:"/permission/manager/role/list",value:"id",label:"name",getData:function(e,t){return Object(a["b"])({url:e}).then((function(e){return e.data}))}},search:{disabled:!0},form:{disabled:!0},view:{disabled:!0},sortable:!0}]}}}}]);