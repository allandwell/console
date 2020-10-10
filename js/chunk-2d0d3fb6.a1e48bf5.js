(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3fb6"],{"5ea1":function(n,e,o){"use strict";o.r(e),e["default"]="<template>\n  <div>\n    <d2-crud-x\n      :columns=\"columns\"\n      :data=\"data\"\n      :rowHandle=\"rowHandle\"\n      @row-remove=\"handleRowRemove\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date'\n        },\n        {\n          title: '姓名',\n          key: 'name'\n        },\n        {\n          title: '地址',\n          key: 'address'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄',\n          forbidRemove: true,\n          showRemoveButton: true\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1517 弄',\n          forbidRemove: false,\n          showRemoveButton: true\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1519 弄',\n          forbidRemove: false,\n          showRemoveButton: false\n        },\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1516 弄',\n          forbidRemove: false,\n          showRemoveButton: true\n        }\n      ],\n      rowHandle: {\n        remove: {\n          icon: 'el-icon-delete',\n          size: 'small',\n          fixed: 'right',\n          confirm: true,\n          show (index, row) {\n            if (row.showRemoveButton) {\n              return true\n            }\n            return false\n          },\n          disabled (index, row) {\n            if (row.forbidRemove) {\n              return true\n            }\n            return false\n          }\n        }\n      }\n    }\n  },\n  methods: {\n    handleRowRemove ({ index, row }, done) {\n      setTimeout(() => {\n        console.log(index)\n        console.log(row)\n        this.$message({\n          message: '删除成功',\n          type: 'success'\n        })\n        done()\n      }, 300)\n    }\n  }\n}\n<\/script>"}}]);