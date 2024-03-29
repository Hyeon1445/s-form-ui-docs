import { PropsItem } from '@components/common/table/Table'

export const SELECT_PROPS: Array<PropsItem> = [
  {
    isRequired: true,
    name: 'name',
    type: 'string',
    default: '-',
    description:
      'The name of the field should be the same as the field name of the initial value and validation schema.',
  },
  {
    isRequired: true,
    name: 'children',
    type: 'ReactNode',
    default: '-',
    description:
      'The Content of Selector including Button, Options, Option, ErrorMessage',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Deactivate the selector',
  },
  {
    name: 'style',
    type: 'CSSProperties',
    default: '{}',
    description: 'The Style of Select Container',
  },
]

export const SELECT_BUTTON_PROPS: Array<PropsItem> = [
  {
    name: 'icon',
    type: 'ReactNode',
    default: `<span>▾</span>`,
    description: 'In the open state, the icon rotates 180 degrees.',
  },
  {
    name: 'style',
    type: 'CSSProperties',
    default: '{}',
    description: 'The Style of Select Button',
  },
  {
    name: 'disabledStyle',
    type: 'CSSProperties',
    default: `{}`,
    description:
      'The Disabled Button style according to disabled props value of <Select />',
  },
  {
    name: 'errorStyle',
    type: 'CSSProperties',
    default: `{}`,
    description: 'The style of the button in error state',
  },
]

export const SELECT_OPTIONS_PROPS: Array<PropsItem> = [
  {
    isRequired: true,
    name: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Define options of Select here.',
  },
  {
    name: 'style',
    type: 'CSSProperties',
    default: '{}',
    description: 'The Style of Options container',
  },
  {
    name: 'isPopover',
    type: 'boolean',
    default: 'true',
    description:
      'If you want a dropdown selector, set isPopover to true. If you want a fixed menu, set isPopover to false',
  },
]

export const SELECT_OPTION_PROPS: Array<PropsItem> = [
  {
    isRequired: true,
    name: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Define label of Select option here.',
  },
  {
    name: 'value',
    type: 'string | number',
    default: '-',
    description: 'The value of option',
  },
  {
    name: 'style',
    type: 'CSSProperties',
    default: '{}',
    description: 'The Style of Option',
  },
  {
    name: 'hoverStyle',
    type: 'CSSProperties',
    default: '{}',
    description: 'The  hover style of Option',
  },
  {
    name: 'selectedOptionStyle',
    type: 'CSSProperties',
    default: '{}',
    description: 'The selected option style',
  },
  {
    name: 'onChange',
    type: '(value?: string | number) => void',
    default: '-',
    description: 'Triggered on selected value change',
  },
]
