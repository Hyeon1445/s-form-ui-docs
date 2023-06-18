import { PropsItem } from '@components/common/table/Table'

export const RADIO_PROPS: Array<PropsItem> = [
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
      'The Content of Radio including Option, Button, Label, ErrorMessage',
  },
  {
    name: 'style',
    type: 'CSSProperties',
    default: '{}',
    description: 'The style of radio container',
  },
  {
    name: 'onChange',
    type: '(value?: string | number | readonly string[] | undefined) => void',
    default: '-',
    description:
      'Triggered on change. And if the onChange prop exists, validation will not proceed when an option is selected.(shouldValidate = false)',
  },
]

export const RADIO_OPTION_PROPS: Array<PropsItem> = [
  {
    isRequired: true,
    name: 'children',
    type: 'string',
    default: '-',
    description: 'The Option label of Radio.',
  },
  {
    name: 'style',
    type: 'CSSProperties',
    default: '{}',
    description: 'The style of Radio option',
  },
  {
    name: 'checkedStyle',
    type: 'CSSProperties',
    default: '{}',
    description: 'The checked style of Radio option',
  },
  {
    name: 'disabledStyle',
    type: 'CSSProperties',
    default: '{}',
    description: 'The disabled style of Radio option',
  },
  {
    name: 'disabledCheckedStyle',
    type: 'CSSProperties',
    default: '{}',
    description: 'The disabled checked style of Radio option',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Deactivate option select',
  },
  {
    name: 'value',
    type: 'string | number | readonly string[] | undefined',
    default: '-',
    description: 'The value of an option',
  },
  {
    name: 'onChange',
    type: '(value?: string | number | readonly string[]) => void',
    default: '-',
    description: 'Triggered on change',
  },
]

export const RADIO_BUTTON_PROPS: Array<PropsItem> = [
  {
    name: 'style',
    type: 'CSSProperties',
    default: '{}',
    description: 'The style of radio button',
  },
  {
    name: 'checkedStyle',
    type: 'CSSProperties',
    default: '{}',
    description: 'The checked style of radio button',
  },
  {
    name: 'disabledStyle',
    type: 'CSSProperties',
    default: '{}',
    description: 'The disabled style of radio button',
  },
  {
    name: 'disabledCheckedStyle',
    type: 'CSSProperties',
    default: '{}',
    description: 'The disabled checked style of radio button',
  },
]
