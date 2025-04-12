<template>
    <ElFormItem
        v-if="!insetHide"
        :class="`json-form-item json-form-item--checkbox json-form-item--${field} json-form-item--${!!slots?.postfix}`"
        v-bind="formItemProps"
        :prop="formItemProps.prop || field"
    >
        <ElCheckboxGroup
            ref="checkboxGroupRef"
            v-bind="contentProps"
            :disabled="insetDisabled"
            :value="checked"
            class="json-form-item__content"
            v-on="$listeners"
            @input="change"
        >
            <template v-for="item of finalOption">
                <component :is="checkboxType" :key="item[valueKey]" :label="item[valueKey]">
                    {{ item[labelKey] }}
                </component>
            </template>
        </ElCheckboxGroup>
        <div v-if="slots?.postfix || $slots.postfix" class="json-form-item__postfix">
            <component :is="getNode(slots?.postfix || $slots.postfix)" />
        </div>
    </ElFormItem>
</template>

<script lang="ts">
import { getNode, hyphenate, usePlain } from '@xiaohaih/json-form-core';
import {
    Checkbox as ElCheckbox,
    CheckboxButton as ElCheckboxButton,
    CheckboxGroup as ElCheckboxGroup,
    FormItem as ElFormItem,
} from 'element-ui';
import { computed, defineComponent, ref } from 'vue-demi';
import { pick } from '../../utils';
import { formItemPropKeys } from '../share';
import { elCheckboxProps, checkboxProps as props } from './props';

const contentPropsKeys = Object.keys(elCheckboxProps);

/**
 * @file 复选框
 */
export default defineComponent({
    name: 'HCheckbox',
    components: {
        ElFormItem,
        ElCheckboxGroup,
        ElCheckboxButton,
        ElCheckbox,
    },
    inheritAttrs: false,
    props,
    setup(props, context) {
        const checkboxGroupRef = ref<ElCheckboxGroup | undefined>();
        const checkboxType = computed(() => (props.type === 'button' ? 'ElCheckboxButton' : 'ElCheckbox'));
        const plain = usePlain(props);
        const formItemProps = computed(() => pick(props, formItemPropKeys));
        const contentProps = computed(() => pick(props, contentPropsKeys));

        return {
            hyphenate,
            ...plain,
            formItemProps,
            contentProps,
            checkboxGroupRef,
            checkboxType,
            getNode,
        };
    },
});
</script>

<style lang="css" scoped></style>
