(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d74a"],{f824:function(n,e,t){"use strict";t.r(e),e["default"]="<template>\n  <div>\n    <d2-crud-x\n      :columns=\"columns\"\n      :data=\"data\"\n      :options=\"options\"\n      index-row\n      @current-change=\"handleCurrentChange\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date'\n        },\n        {\n          title: '姓名',\n          key: 'name'\n        },\n        {\n          title: '地址',\n          key: 'address'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄'\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1517 弄'\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1519 弄'\n        },\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1516 弄'\n        }\n      ],\n      options: {\n        highlightCurrentRow: true\n      }\n    }\n  },\n  methods: {\n    handleCurrentChange (currentRow, oldCurrentRow) {\n      console.log(currentRow)\n      console.log(oldCurrentRow)\n    }\n  }\n}\n<\/script>"}}]);