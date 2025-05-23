// 防止符号链接导致的报错
// https://github.com/microsoft/TypeScript/issues/42873
// https://juejin.cn/post/7282606413842415675
// @ts-ignore
import { ref } from '@vue/composition-api';

export * from './assist';
export * from './interface';
export * from './package/index';
export { provideKey, type ProvideValue } from '@xiaohaih/json-form-core';
