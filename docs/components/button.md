# Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

::: info 提示

```js
console.log("Hello, VitePress!");
```

:::

::: details 点击展开

```vue{1,3-5}
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

::: tip 模糊

```vue
<template>
  <button>默认按钮</button>
  <button type="primary">主要按钮</button>
  <button type="success">成功按钮</button>
  <button type="info">信息按钮</button> // [!code focus]
  <button type="warning">警告按钮</button>
  <button type="danger">危险按钮</button>
</template>
```

:::

```vue
<template>
  <button>默认按钮</button>
  <button type="primary">主要按钮</button>
  <button type="success">成功按钮</button> // [!code --]
  <button type="info">信息按钮</button> // [!code ++]
  <button type="warning">警告按钮</button>
  <button type="danger">危险按钮</button>
</template>
```

## Attributes

| 参数    | 说明   | 类型    | 可选值                                             | 默认值  |
| ------- | ------ | ------- | -------------------------------------------------- | ------- |
| size    | 尺寸   | string  | large / small / mini                               | default |
| type    | 类型   | string  | primary / success / warning / info / danger / text | primary |
| loading | 加载中 | boolean | —                                                  | false   |
