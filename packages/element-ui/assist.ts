import type { UnwrapNestedRefs } from 'vue-demi';
import { reactive } from 'vue-demi';
import type { JSONForm } from './interface';

export type DefineCondition<T = JSONForm.Condition> = Record<string, T>;
export function defineCondition<T extends DefineCondition<JSONForm.Condition | false | 0 | undefined>>(
    config: T,
): UnwrapNestedRefs<T> {
    return reactive(config);
}
