(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7afaa2a5","chunk-2d0a47af","chunk-2d0db466","chunk-2d22c4e5"],{"072d":function(e,n,t){"use strict";t.r(n),n["default"]="<template>\n  <div>\n    <d2-crud-x\n      :columns=\"columns\"\n      :data=\"data\"\n      @cell-data-change=\"handleCellDataChange\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      doc,\n      code,\n      columns: [\n        {\n          title: '日期',\n          key: 'date',\n          component: {\n            name: 'el-date-picker',\n            size: 'small'\n          }\n        },\n        {\n          title: '姓名',\n          key: 'name',\n          component: {\n            name: 'el-select',\n            // 建议使用 d2-crud-plus 带的 dict-select组件,看下面\n            children (h) {\n              const items = []\n              items.push(<el-option value='王小虎'>王小虎</el-option>)\n              items.push(<el-option value='王中虎'>王中虎</el-option>)\n              items.push(<el-option value='王老虎'>王老虎</el-option>)\n              return items\n            },\n            size: 'small'\n          }\n        },\n        {\n          title: '状态',\n          key: 'status',\n          value: '1', // 默认值\n          component: {\n            name: 'dict-select',\n            props: {\n              dict: {\n                data: [\n                  { value: '1', label: '开启' },\n                  { value: '2', label: '关闭' },\n                  { value: '3', label: '停止' }\n                ]\n              },\n              elProps: {\n                size: 'small'\n              }\n            }\n          }\n        },\n        {\n          title: '地址',\n          key: 'address',\n          component: {\n            name: 'el-input',\n            size: 'small'\n          }\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄',\n          status: '1'\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1517 弄',\n          status: '1'\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1519 弄',\n          status: '1'\n        },\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1516 弄',\n          status: '1'\n        }\n      ]\n    }\n  },\n  methods: {\n    handleCellDataChange ({ rowIndex, key, value, row }) {\n      console.log(rowIndex)\n      console.log(key)\n      console.log(value)\n      console.log(row)\n    }\n  }\n}\n<\/script>"},"2b8d":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("d2-container",[t("template",{slot:"header"},[e._v("表格内编辑")]),t("d2-crud-x",{attrs:{columns:e.columns,data:e.data},on:{"cell-data-change":e.handleCellDataChange}}),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("d2-markdown",{attrs:{source:e.doc}})],1),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("d2-highlight",{attrs:{code:e.code}})],1),t("d2-link-btn",{attrs:{slot:"footer",title:"文档",link:"https://greper.github.io/d2-crud-plus/d2-crud-x/"},slot:"footer"})],2)},l=[],s=(t("6ebc"),t("f357")),o=t.n(s),d=t("072d"),c={data:function(){this.$createElement;return{doc:o.a,code:d["default"],columns:[{title:"日期",key:"date",component:{name:"el-date-picker",size:"small"}},{title:"姓名",key:"name",component:{name:"el-select",children:function(e){var n=[];return n.push(e("el-option",{attrs:{value:"王小虎"}},["王小虎"])),n.push(e("el-option",{attrs:{value:"王中虎"}},["王中虎"])),n.push(e("el-option",{attrs:{value:"王老虎"}},["王老虎"])),n},size:"small"}},{title:"状态",key:"status",value:"1",component:{name:"dict-select",props:{dict:{data:[{value:"1",label:"开启"},{value:"2",label:"关闭"},{value:"3",label:"停止"}]},elProps:{size:"small"}}}},{title:"地址",key:"address",component:{name:"el-input",size:"small"}}],data:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",status:"1"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄",status:"1"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄",status:"1"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄",status:"1"}]}},methods:{handleCellDataChange:function(e){var n=e.rowIndex,t=e.key,a=e.value,l=e.row;console.log(n),console.log(t),console.log(a),console.log(l)}}},r=c,u=t("2877"),i=function(e){e.options.__source="src/business/modules/example/views/crud/demo23/index.vue"},m=i,p=Object(u["a"])(r,a,l,!1,null,null,null);"function"===typeof m&&m(p);n["default"]=p.exports},"6ebc":function(e,n){},f357:function(e,n){e.exports="向 `columns` 的 `component` 对象传入 `name` 属性来控制渲染的组件，默认为 `el-input` ，支持的组件有 `el-input-number` `el-radio` `el-checkbox` `el-select` `el-cascader` `el-switch` `el-slider` `el-time-select` `el-time-picker` `el-date-picker` `el-rate` `el-color-picker` ，也可以使用 `render函数` 自己渲染组件，只需在 `component` 中传入 `renderFuntion` ，接收两个参数： `h`是render函数的固定参数， `scope` 是单元格中的数据，[render函数使用方法](https://cn.vuejs.org/v2/guide/render-function.html)。通过 `cell-data-change`事件可以监听单元格内的数据变化，监听在crud内部是通过change事件触发的（这意味着input类组件失去焦点才会触发事件，单纯输入不会触发），接收一个对象参数 `{rowIndex, key, value, row}`， `rowIndex` 为改变所在行，`key` 为改变的字段，`value` 为改变后的值，`row` 是改变所在行的所有数据。代码如下：\r\n"}}]);