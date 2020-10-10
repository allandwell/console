(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01bd953a","chunk-2d221fa9","chunk-2d0db466","chunk-2d21a9d6"],{"6ebc":function(e,n){},"937f":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("d2-container",[t("template",{slot:"header"},[e._v("表单校验")]),t("d2-crud-x",{ref:"d2Crud",attrs:{columns:e.columns,data:e.data,"add-template":e.addTemplate,"form-options":e.formOptions,"add-rules":e.addRules},on:{"row-add":e.handleRowAdd,"dialog-cancel":e.handleDialogCancel}},[t("el-button",{staticStyle:{"margin-bottom":"5px"},attrs:{slot:"header"},on:{click:e.addRow},slot:"header"},[e._v("新增")])],1),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("d2-markdown",{attrs:{source:e.doc}})],1),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("d2-highlight",{attrs:{code:e.code}})],1),t("d2-link-btn",{attrs:{slot:"footer",title:"文档",link:"https://greper.github.io/d2-crud-plus/d2-crud-x/"},slot:"footer"})],2)},d=[],s=(t("6ebc"),t("bbee")),o=t.n(s),l=t("cd3e"),r={data:function(){return{doc:o.a,code:l["default"],columns:[{title:"日期",key:"date"},{title:"姓名",key:"name"},{title:"地址",key:"address"}],data:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],addButton:{text:"点我查看表单校验",icon:"el-icon-plus",size:"small"},addTemplate:{date:{title:"日期",value:""},name:{title:"姓名",value:""},address:{title:"地址",value:""}},formOptions:{labelWidth:"80px",labelPosition:"left",saveLoading:!1},addRules:{date:[{required:!0,message:"请输入日期",trigger:"blur"}],name:[{required:!0,message:"请输入姓名",trigger:"blur"}],address:[{required:!0,message:"请输入地址",trigger:"blur"}]}}},methods:{addRow:function(){this.$refs.d2Crud.showDialog({mode:"add"})},handleRowAdd:function(e,n){var t=this;this.formOptions.saveLoading=!0,setTimeout((function(){console.log(e),t.$message({message:"保存成功",type:"success"}),n(),t.formOptions.saveLoading=!1}),300)},handleDialogCancel:function(e){this.$message({message:"取消保存",type:"warning"}),e()}}},i=r,u=t("2877"),c=function(e){e.options.__source="src/business/modules/example/views/crud/demo22/index.vue"},m=c,g=Object(u["a"])(i,a,d,!1,null,null,null);"function"===typeof m&&m(g);n["default"]=g.exports},bbee:function(e,n){e.exports="通过给 `D2 Crud` 传入 `add-rules` 或 `edit-rules` 可开启新增/修改表单校验，校验规则参见：[async-validator](https://github.com/yiminghe/async-validator)。代码如下：\r\n"},cd3e:function(e,n,t){"use strict";t.r(n),n["default"]="<template>\n  <div>\n    <d2-crud-x\n      ref=\"d2Crud\"\n      :columns=\"columns\"\n      :data=\"data\"\n      :add-template=\"addTemplate\"\n      :form-options=\"formOptions\"\n      :add-rules=\"addRules\"\n      @row-add=\"handleRowAdd\"\n      @dialog-cancel=\"handleDialogCancel\">\n      <el-button slot=\"header\" style=\"margin-bottom: 5px\" @click=\"addRow\">新增</el-button>\n    </d2-crud-x>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date'\n        },\n        {\n          title: '姓名',\n          key: 'name'\n        },\n        {\n          title: '地址',\n          key: 'address'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄'\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1517 弄'\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1519 弄'\n        },\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1516 弄'\n        }\n      ],\n      addButton: {\n        text: '点我查看表单校验',\n        icon: 'el-icon-plus',\n        size: 'small'\n      },\n      addTemplate: {\n        date: {\n          title: '日期',\n          value: ''\n        },\n        name: {\n          title: '姓名',\n          value: ''\n        },\n        address: {\n          title: '地址',\n          value: ''\n        }\n      },\n      formOptions: {\n        labelWidth: '80px',\n        labelPosition: 'left',\n        saveLoading: false\n      },\n      addRules: {\n        date: [ { required: true, message: '请输入日期', trigger: 'blur' } ],\n        name: [ { required: true, message: '请输入姓名', trigger: 'blur' } ],\n        address: [ { required: true, message: '请输入地址', trigger: 'blur' } ]\n      }\n    }\n  },\n  methods: {\n    addRow () {\n      this.$refs.d2Crud.showDialog({\n        mode: 'add'\n      })\n    },\n    handleRowAdd (row, done) {\n      this.formOptions.saveLoading = true\n      setTimeout(() => {\n        console.log(row)\n        this.$message({\n          message: '保存成功',\n          type: 'success'\n        });\n        done()\n        this.formOptions.saveLoading = false\n      }, 300);\n    },\n    handleDialogCancel (done) {\n      this.$message({\n        message: '取消保存',\n        type: 'warning'\n      });\n      done()\n    }\n  }\n}\n<\/script>"}}]);