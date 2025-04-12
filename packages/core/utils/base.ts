import type { UnionToIntersection } from 'utility-types';
import type { PropType } from 'vue-demi';
import { camelize } from 'vue-demi';

/**
 * 将 emits 转为 props
 * @param {object | undefined | null} props 待合并的 props
 * @param {(string[] | object | null)[]} emits 待转换的 emits
 * @tip
 * props 尽量用 as const, 防止内部的 required 选项无法被识别
 * 当 emits 为数组时, 需要用 as const, 否则无法识别出事件名称
 */
export function emits2props<T extends Record<string, any> | undefined | null, E extends (string[] | Record<string, any> | null | undefined)[]>(props: T, ...emits: E) {
    const _r = (props || {}) as (T extends undefined | null ? {} : T) & UnionToIntersection<Emits2Props<NonNullable<E[number]>>>;
    const typeFunction = { type: Function };
    // @ts-expect-error 事件补充为 props 属性
    emits.forEach((o) => o && (Array.isArray(o) ? o.forEach((k) => _r[camelize(`on-${k}`)] = typeFunction) : Object.keys(o).forEach((k) => _r[camelize(`on-${k}`)] = typeFunction)));

    return _r;
}
export type Emits2Props<T> = UnionToIntersection<
    T extends string[]
        ? Record<CamelCase<`on-${T[number]}`>, PropType<(...args: any[]) => void>>
        : { [P in keyof T as CamelCase<`on-${string & P}`>]: T extends Record<string, (...args: any) => any> ? { type: PropType<(...args: Parameters<T[P]>) => void> } : never }
>;

/** 转为小驼峰 */
export type CamelCase<T extends string> = T extends `${infer A}-${infer B}` ? CamelCase<`${A}${Capitalize<B>}`> : T;

/** 将对象转为 vue props */
export type Obj2Props<T> = {
    [K in keyof T]-?: PropType<NonNullable<T[K]>>
};
