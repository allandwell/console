(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0bc5"],{"9e47":function(n,e,t){"use strict";t.r(e),e["default"]="<template>\n  <div>\n    <d2-crud-x\n      :columns=\"columns\"\n      :data=\"data\"\n      :rowHandle=\"rowHandle\"\n      :edit-template=\"editTemplate\"\n      :form-options=\"formOptions\"\n      @row-edit=\"handleRowEdit\"\n      @dialog-cancel=\"handleDialogCancel\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date'\n        },\n        {\n          title: '姓名',\n          key: 'name'\n        },\n        {\n          title: '地址',\n          key: 'address'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄'\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1517 弄'\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1519 弄'\n        },\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1516 弄'\n        }\n      ],\n      rowHandle: {\n        edit: {\n          icon: 'el-icon-edit',\n          text: '点我查看表单布局',\n          size: 'small',\n          fixed: 'right'\n        }\n      },\n      editTemplate: {\n        date: {\n          title: '日期',\n          value: '',\n          component: {\n            span: 12\n          }\n        },\n        name: {\n          title: '姓名',\n          value: '',\n          component: {\n            span: 12\n          }\n        },\n        address: {\n          title: '地址',\n          value: '',\n          component: {\n            span: 18\n          }\n        }\n      },\n      formOptions: {\n        labelWidth: '80px',\n        labelPosition: 'left',\n        saveLoading: false,\n        gutter: 20\n      }\n    }\n  },\n  methods: {\n    handleRowEdit ({ index, row }, done) {\n      this.formOptions.saveLoading = true\n      setTimeout(() => {\n        console.log(index)\n        console.log(row)\n        this.$message({\n          message: '编辑成功',\n          type: 'success'\n        })\n        done()\n        this.formOptions.saveLoading = false\n      }, 300)\n    },\n    handleDialogCancel (done) {\n      this.$message({\n        message: '取消编辑',\n        type: 'warning'\n      })\n      done()\n    }\n  }\n}\n<\/script>"}}]);