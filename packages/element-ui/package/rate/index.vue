<template>
    <ElFormItem
        v-if="!insetHide"
        :class="`json-form-item json-form-item--rate json-form-item--${field} json-form-item--${!!slots?.postfix}`"
        v-bind="formItemProps"
        :prop="formItemProps.prop || field"
    >
        <ElRate
            v-bind="contentProps"
            :disabled="insetDisabled"
            :value="checked"
            class="json-form-item__content"
            @change="change"
        />
        <div v-if="slots?.postfix || $slots.postfix" class="json-form-item__postfix">
            <component :is="getNode(slots?.postfix || $slots.postfix)" />
        </div>
    </ElFormItem>
</template>

<script lang="ts">
import { getNode, hyphenate, usePlain } from '@xiaohaih/json-form-core';
import { FormItem as ElFormItem, Rate as ElRate } from 'element-ui';
import { computed, defineComponent, ref } from 'vue-demi';
import { pick } from '../../utils';
import { formItemPropKeys } from '../share';
import { rateProps as props } from './props';

// @ts-expect-error UI.props报错
const contentPropsKeys = Object.keys(ElRate.props);

/**
 * @file 评分
 */
export default defineComponent({
    name: 'HRate',
    components: {
        ElFormItem,
        ElRate,
    },
    inheritAttrs: false,
    props,
    setup(props, ctx) {
        const plain = usePlain(props);
        const formItemProps = computed(() => pick(props, formItemPropKeys));
        const contentProps = computed(() => pick(props, contentPropsKeys));

        return {
            hyphenate,
            ...plain,
            formItemProps,
            contentProps,
            getNode,
        };
    },
});
</script>

<style lang="css" scoped></style>
