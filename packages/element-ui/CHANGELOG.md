# @xiaohaih/condition-el

## 0.5.6

### Patch Changes

- 修复存在依赖项时, 在 getOptions 中无法主动改变值
- Updated dependencies
  - @xiaohaih/json-form-core@0.5.6

## 0.4.1

### Patch Changes

- 条件组件增加插槽, 支持条件项排序(包括 VNode)
- Updated dependencies
  - @xiaohaih/json-form-core@0.4.1

## 0.4.0

### Minor Changes

- core 支持所有数据类型, 修复重置报错, 去除 cascader 内置的 emitPath, 修复 ts 声明报层级过深

### Patch Changes

- Updated dependencies
  - @xiaohaih/json-form-core@0.4.0

## 0.3.2

### Patch Changes

- 增加新的条件项(element-plus 表单支持的组件)(element-ui 的新组件还存在一些 bug)
- Updated dependencies
  - @xiaohaih/json-form-core@0.3.2

## 0.3.1

### Patch Changes

- 1. 修复 wrapper props 无法响应动态数据
- 2. 修复 hide 属性不生效
- Updated dependencies
  - @xiaohaih/json-form-core@0.3.1

## 0.3.0

### Minor Changes

- 重构条件, 增加表单校验支持

### Patch Changes

- Updated dependencies
  - @xiaohaih/json-form-core@0.3.0

## 0.2.3

### Patch Changes

- 更新文档
- Updated dependencies
  - @xiaohaih/json-form-core@0.2.3

## 0.2.2

### Patch Changes

- 调整 npm 忽略文件, 设置发布的镜像源
- Updated dependencies
  - @xiaohaih/json-form-core@0.2.2

## 0.2.1

### Patch Changes

- 1. 优化第三方开发环境下调源码, 以便调试
- 2. 不同类型的组件增加类名以作区分, 方便设置样式
- Updated dependencies
  - @xiaohaih/json-form-core@0.2.1

## 0.2.0

### Minor Changes

- 对核心组件以及示例进行重构, 同时支持示例在线编辑

### Patch Changes

- Updated dependencies
  - @xiaohaih/json-form-core@0.2.0

## 0.1.20

### Patch Changes

- 修复初始渲染时 query 未能与 backfill 保持一致导致内部逻辑出错
- Updated dependencies
  - @xiaohaih/json-form-core@0.1.20

## 0.1.19

### Patch Changes

- 单选框增加配置(选中项再次点击取消选中)
- Updated dependencies
  - @xiaohaih/json-form-core@0.1.19

## 0.1.18

### Patch Changes

- 1.修复依赖发生变化时, 依赖项的请求函数未重新请求 2.下拉框增加分组
- Updated dependencies
  - @xiaohaih/json-form-core@0.1.18

## 0.1.17

### Patch Changes

- 1.增加单选框组件 2.输入增加范围段类型(比如年龄段输入) 3.给条件项增加 label 字段
- Updated dependencies
  - @xiaohaih/json-form-core@0.1.17

## 0.1.16

### Patch Changes

- Updated dependencies
  - @xiaohaih/json-form-core@0.1.16

## 0.1.15

### Patch Changes

- 修复不存在条件中的字段值发生改变后, 触发搜索事件时, 外部仍拿到旧值的问题
- Updated dependencies
  - @xiaohaih/json-form-core@0.1.15

## 0.1.14

### Patch Changes

- 修复 element-ui 版本忘记剔除额外属性引起的 bug
- Updated dependencies
  - @xiaohaih/json-form-core@0.1.14

## 0.1.13

### Patch Changes

- 修复未触发重置事件, 修复 vue3 下事件不生效以及某些参数未剔除导致的 bug
- Updated dependencies
  - @xiaohaih/json-form-core@0.1.13

## 0.1.12

### Patch Changes

- 调整 props 参数, 并将其导出为全局模块
- Updated dependencies
  - @xiaohaih/json-form-core@0.1.12

## 0.1.11

### Patch Changes

- 暴露定义条件的返回值类型
  - @xiaohaih/json-form-core@0.1.11

## 0.1.10

## 0.1.9

### Patch Changes

- 修复定义条件时写计算属性提示报错
- Updated dependencies
  - @xiaohaih/json-form-core@0.1.9

## 0.1.8

## 0.1.7

### Patch Changes

- :bug: fix: 修复 vue2 版本 class, styles 属性未被继承
- Updated dependencies
  - @xiaohaih/json-form-core@0.1.7
