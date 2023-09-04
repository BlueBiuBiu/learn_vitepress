# Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

:::

```vue
<template>
  <button>默认按钮</button>
  <button type="primary">主要按钮</button>
  <button type="success">成功按钮</button>
  <button type="info">信息按钮</button>
  <button type="warning">警告按钮</button>
  <button type="danger">危险按钮</button>
</template>
```

:::

## 不同尺寸

提供三种不同尺寸的按钮。

:::

```vue
<template>
  <button>默认按钮</button>
  <button type="primary">主要按钮</button>
  <button type="success">成功按钮</button>
  <button type="info">信息按钮</button>
  <button type="warning">警告按钮</button>
  <button type="danger">危险按钮</button>
</template>
```

:::

## 加载中

点击按钮进行数据加载操作，在按钮上面显示加载状态。

:::

```vue
<template>
  <button>默认按钮</button>
  <button type="primary">主要按钮</button>
  <button type="success">成功按钮</button>
  <button type="info">信息按钮</button>
  <button type="warning">警告按钮</button>
  <button type="danger">危险按钮</button>
</template>
```

:::

## Attributes

| 参数    | 说明   | 类型    | 可选值                                             | 默认值  |
| ------- | ------ | ------- | -------------------------------------------------- | ------- |
| size    | 尺寸   | string  | large / small / mini                               | default |
| type    | 类型   | string  | primary / success / warning / info / danger / text | primary |
| loading | 加载中 | boolean | —                                                  | false   |
