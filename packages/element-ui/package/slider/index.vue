<template>
    <ElFormItem
        v-if="!insetHide"
        :class="`json-form-item json-form-item--slider json-form-item--${field} json-form-item--${!!slots?.postfix}`"
        v-bind="formItemProps"
        :prop="formItemProps.prop || field"
    >
        <ElSlider
            v-bind="contentProps"
            :disabled="insetDisabled"
            :value="checked"
            class="json-form-item__content"
            @input="change"
        />
        <div v-if="slots?.postfix || $slots.postfix" class="json-form-item__postfix">
            <component :is="getNode(slots?.postfix || $slots.postfix)" />
        </div>
    </ElFormItem>
</template>

<script lang="ts">
import { getNode, hyphenate, usePlain } from '@xiaohaih/json-form-core';
import { FormItem as ElFormItem, Slider as ElSlider } from 'element-ui';
import { computed, defineComponent, reactive, ref, toRefs } from 'vue-demi';
import { pick } from '../../utils';
import { formItemPropKeys } from '../share';
import { sliderProps as props } from './props';

// @ts-expect-error UI.props报错
const contentPropsKeys = Object.keys(ElSlider.props);

/**
 * @file 滑块
 */
export default defineComponent({
    name: 'HSlider',
    components: {
        ElFormItem,
        ElSlider,
    },
    inheritAttrs: false,
    props,
    setup(props, ctx) {
        const { range, defaultValue, ...args } = toRefs(props);
        const _props = reactive({ ...args, multiple: range });
        // @ts-expect-error 缺少默认值字段
        range.value && !defaultValue.value && (_props.defaultValue = [0, 0] as any);
        const plain = usePlain(_props);
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
