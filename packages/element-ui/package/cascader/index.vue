<template>
    <ElFormItem
        v-if="!insetHide"
        :class="`json-form-item json-form-item--cascader json-form-item--${field} json-form-item--${!!slots?.postfix}`"
        v-bind="formItemProps"
        :prop="formItemProps.prop || field"
    >
        <ElCascader
            v-bind="contentProps"
            :props="customProps"
            :disabled="insetDisabled"
            :options="finalOption"
            :value="checked"
            class="json-form-item__content"
            v-on="$listeners"
            @change="change"
        />
        <div v-if="slots?.postfix || $slots.postfix" class="json-form-item__postfix">
            <component :is="getNode(slots?.postfix || $slots.postfix)" />
        </div>
    </ElFormItem>
</template>

<script lang="ts">
import { getNode, usePlain, useTree } from '@xiaohaih/json-form-core';
import { Cascader as ElCascader, FormItem as ElFormItem } from 'element-ui';
import { computed, defineComponent, reactive, toRefs } from 'vue-demi';
import { pick } from '../../utils';
import { formItemPropKeys } from '../share';
import { cascaderProps as props } from './props';

// @ts-expect-error UI.props报错
const contentPropsKeys = Object.keys(ElCascader.props);

/**
 * @file 级联选择
 */
export default defineComponent({
    name: 'HCascader',
    components: {
        ElFormItem,
        ElCascader,
    },
    inheritAttrs: false,
    props,
    setup(props, ctx) {
        const { multiple: a, ...args } = toRefs(props);
        const emitPath = computed(() =>
            props.props?.multiple || props.props?.emitPath !== undefined
                ? props.props?.emitPath
                : (props.fields && props.fields?.length > 1) || false,
        );
        const multiple = computed(() => props.props?.multiple || emitPath.value);
        const customProps = computed(() => {
            const r = { ...props.props, emitPath: emitPath.value };
            if (r.emitPath === undefined) delete r.emitPath;
            return r;
        });
        const plain = usePlain(reactive({ ...args, multiple }));
        const formItemProps = computed(() => pick(props, formItemPropKeys));
        const contentProps = computed(() => pick(props, contentPropsKeys));

        return {
            hyphenate,
            ...plain,
            formItemProps,
            contentProps,
            customProps,
            getNode,
        };
    },
});
</script>

<style lang="css" scoped></style>
