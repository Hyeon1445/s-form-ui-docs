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
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Deactivate the selector',
  },
  {
    name: 'children',
    type: 'ReactNode',
    default: '-',
    description:
      'The Content of Selector including Button, Options, Option, ErrorMessage',
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
