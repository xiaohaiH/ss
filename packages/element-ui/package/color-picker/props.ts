import { plainProps } from '@xiaohaih/json-form-core';
import { ColorPicker as ElColorPicker } from 'element-ui';
import { PropType } from 'vue';
import { commonProps, formItemProps } from '../share';

export const colorPickerProps = {
    // @ts-expect-error UI.props报错
    ...(ElColorPicker.props as {}),
    ...plainProps,
    ...commonProps,
    ...formItemProps,
} as const;
