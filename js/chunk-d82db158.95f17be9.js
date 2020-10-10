(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d82db158","chunk-2d22c53b","chunk-2d0db466","chunk-2d0a43f9"],{"0641":function(e,n){e.exports="通过给 `D2 Crud` 传入 `rowHandle` 可开启表格操作列，传入 `columnHeader` 可以自定义操作列的表头，传入 `edit` 对象可以开启编辑模式，需要传入 `edit-template` 来为编辑添加模板，通过 `ref` 调用 `D2 Crud` 的 `showDialog` 方法，并传入 `mode: 'edit'` 、`rowIndex` 属性和 `template`对象，可使用自定义模板编辑指定行，定义 `edit-title` 来修改编辑模态框的标题，向`form-options` 中传入 `labelWidth` 和 `labelPosition` 来控制表单中label的显示, `saveLoading` 则控制保存按钮的loading状态， `row-edit` 事件控制数据编辑，参数： `index` 是当前编辑行的索引， `row` 是当前编辑行的数据， `done` 用于控制编辑成功，可以在 `done()` 之前加入自己的逻辑代码，`done()`可以传入包含表单字段的对象来覆盖提交的数据，`done(false)` 可以取消编辑，通过 `ref` 调用 `D2 Crud` 的 `closeDialog` 方法可以关闭模态框。代码如下：\r\n"},"6ebc":function(e,n){},c561:function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("d2-container",[t("template",{slot:"header"},[e._v("修改数据")]),t("d2-crud-x",{ref:"d2Crud",attrs:{columns:e.columns,data:e.data,rowHandle:e.rowHandle,"edit-title":"我的修改","edit-template":e.editTemplate,"form-options":e.formOptions},on:{"dialog-open":e.handleDialogOpen,"row-edit":e.handleRowEdit,"dialog-cancel":e.handleDialogCancel}},[t("el-button",{staticStyle:{"margin-bottom":"5px"},attrs:{slot:"header"},on:{click:e.editRowWithNewTemplate},slot:"header"},[e._v("使用自定义模板编辑第三行")])],1),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("d2-markdown",{attrs:{source:e.doc}})],1),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("d2-highlight",{attrs:{code:e.code}})],1),t("d2-link-btn",{attrs:{slot:"footer",title:"文档",link:"https://greper.github.io/d2-crud-plus/d2-crud-x/"},slot:"footer"})],2)},d=[],a=(t("6ebc"),t("0641")),i=t.n(a),s=t("f380"),l={data:function(){return{doc:i.a,code:s["default"],columns:[{title:"日期",key:"date"},{title:"姓名",key:"name"},{title:"地址",key:"address"}],data:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",forbidEdit:!0,showEditButton:!0},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄",forbidEdit:!1,showEditButton:!0},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄",forbidEdit:!1,showEditButton:!1},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄",forbidEdit:!1,showEditButton:!0}],rowHandle:{columnHeader:"编辑表格",edit:{icon:"el-icon-edit",text:"点我进行编辑",size:"small",show:function(e,n){return!!n.showEditButton},disabled:function(e,n){return!!n.forbidEdit}}},editTemplate:{date:{title:"日期",value:""},name:{title:"姓名",value:""},address:{title:"地址",value:""},forbidEdit:{title:"禁用按钮",value:!1,component:{show:!1}},showEditButton:{title:"显示按钮",value:!0,component:{show:!1}}},formOptions:{labelWidth:"80px",labelPosition:"left",saveLoading:!1}}},methods:{handleDialogOpen:function(e){var n=e.mode;e.row;this.$message({message:"打开模态框，模式为："+n,type:"success"})},editRowWithNewTemplate:function(){this.$refs.d2Crud.showDialog({mode:"edit",rowIndex:2,template:{date:{title:"日期",value:""},name:{title:"姓名",value:""}}})},handleRowEdit:function(e,n){var t=this,o=e.index,d=e.row;this.formOptions.saveLoading=!0,setTimeout((function(){console.log(o),console.log(d),t.$message({message:"编辑成功",type:"success"}),n({address:"我是通过done事件传入的数据！"}),t.formOptions.saveLoading=!1}),300)},handleDialogCancel:function(e){this.$message({message:"取消编辑",type:"warning"}),e()}}},r=l,u=t("2877"),c=function(e){e.options.__source="src/business/modules/example/views/crud/demo17/index.vue"},m=c,f=Object(u["a"])(r,o,d,!1,null,null,null);"function"===typeof m&&m(f);n["default"]=f.exports},f380:function(e,n,t){"use strict";t.r(n),n["default"]="<template>\n  <div>\n    <d2-crud-x\n      ref=\"d2Crud\"\n      :columns=\"columns\"\n      :data=\"data\"\n      :rowHandle=\"rowHandle\"\n      edit-title=\"我的修改\"\n      :edit-template=\"editTemplate\"\n      :form-options=\"formOptions\"\n      @dialog-open=\"handleDialogOpen\"\n      @row-edit=\"handleRowEdit\"\n      @dialog-cancel=\"handleDialogCancel\">\n        <el-button slot=\"header\" style=\"margin-bottom: 5px\" @click=\"editRowWithNewTemplate\">使用自定义模板编辑第三行</el-button>\n      </d2-crud-x>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date'\n        },\n        {\n          title: '姓名',\n          key: 'name'\n        },\n        {\n          title: '地址',\n          key: 'address'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄',\n          forbidEdit: true,\n          showEditButton: true\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1517 弄',\n          forbidEdit: false,\n          showEditButton: true\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1519 弄',\n          forbidEdit: false,\n          showEditButton: false\n        },\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1516 弄',\n          forbidEdit: false,\n          showEditButton: true\n        }\n      ],\n      rowHandle: {\n        columnHeader: '编辑表格',\n        edit: {\n          icon: 'el-icon-edit',\n          text: '点我进行编辑',\n          size: 'small',\n          show (index, row) {\n            if (row.showEditButton) {\n              return true\n            }\n            return false\n          },\n          disabled (index, row) {\n            if (row.forbidEdit) {\n              return true\n            }\n            return false\n          }\n        }\n      },\n      editTemplate: {\n        date: {\n          title: '日期',\n          value: ''\n        },\n        name: {\n          title: '姓名',\n          value: ''\n        },\n        address: {\n          title: '地址',\n          value: ''\n        },\n        forbidEdit: {\n          title: '禁用按钮',\n          value: false,\n          component: {\n            show: false\n          }\n        },\n        showEditButton: {\n          title: '显示按钮',\n          value: true,\n          component: {\n            show: false\n          }\n        }\n      },\n      formOptions: {\n        labelWidth: '80px',\n        labelPosition: 'left',\n        saveLoading: false\n      }\n    }\n  },\n  methods: {\n    handleDialogOpen ({ mode, row }) {\n      this.$message({\n        message: '打开模态框，模式为：' + mode,\n        type: 'success'\n      })\n    },\n    editRowWithNewTemplate () {\n      this.$refs.d2Crud.showDialog({\n        mode: \"edit\",\n        rowIndex: 2,\n        template: {\n          date: {\n            title: '日期',\n            value: ''\n          },\n          name: {\n            title: '姓名',\n            value: ''\n          }\n        }\n      })\n    },\n    handleRowEdit ({ index, row }, done) {\n      this.formOptions.saveLoading = true\n      setTimeout(() => {\n        console.log(index)\n        console.log(row)\n        this.$message({\n          message: '编辑成功',\n          type: 'success'\n        })\n\n        // done可以传入一个对象来修改提交的某个字段\n        done({\n          address: '我是通过done事件传入的数据！'\n        })\n        this.formOptions.saveLoading = false\n      }, 300)\n    },\n    handleDialogCancel (done) {\n      this.$message({\n        message: '取消编辑',\n        type: 'warning'\n      })\n      done()\n    }\n  }\n}\n<\/script>"}}]);