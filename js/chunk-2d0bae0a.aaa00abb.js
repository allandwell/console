(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bae0a"],{"38a0":function(e,t,o){"use strict";o.r(t),o.d(t,"crudOptions",(function(){return p}));var p=function(e){return{options:{height:"100%"},searchOptions:{disabled:!0,show:null},columns:[{title:"ID",key:"id",width:90,form:{disabled:!0}},{title:"头像裁剪",key:"avatar",type:"avatar-cropper",form:{valueChange:function(e,t,o,p){console.log("avatar chagned",e,t)}}},{title:"支持多个",key:"multi",type:"avatar-cropper",align:"left",form:{component:{props:{limit:5}},helper:"可上传5张图片"}},{title:"其他比例",key:"aspectRatio",type:"avatar-cropper",form:{component:{props:{cropper:{aspectRatio:16/9}}},helper:"16 / 9"}},{title:"阿里云",key:"alioss",type:"avatar-cropper",form:{component:{props:{type:"alioss"}},helper:"上传到阿里云oss"}},{title:"七牛",key:"qiniu",type:"avatar-cropper",form:{component:{props:{type:"qiniu"}},helper:"上传到七牛"}},{title:"本地服务器",key:"local",type:"avatar-cropper",form:{component:{props:{uploader:{type:"form",action:"http://81.68.100.43:7070/api/upload/form/upload",name:"file"}}},helper:"上传到本地服务器"}}]}}}}]);