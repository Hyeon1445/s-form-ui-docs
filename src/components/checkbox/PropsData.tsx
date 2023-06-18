import { PropsItem } from '@components/common/table/Table'
import styled from '@emotion/styled'

const CheckboxChildren = styled.div`
  min-width: 12rem;
  text-align: left;
  white-space: pre;
`

export const CHECKBOX_PROPS: Array<PropsItem> = [
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
    description: 'Deactivate checkbox',
  },
  {
    name: 'children',
    type: 'ReactNode',
    default: (
      <CheckboxChildren>{`
      <label>
        <Checkbox.Button />
        <span>{label}</span>
      </label>
    `}</CheckboxChildren>
    ),
    description: 'Deactivate checkbox',
  },
  {
    name: 'label',
    type: 'string',
    default: '',
    description: 'The label of checkbox',
  },
  {
    name: 'style',
    type: 'CSSProperties',
    default: '{}',
    description: 'The style of checkbox',
  },
  {
    name: 'checkedStyle',
    type: 'CSSProperties',
    default: '{}',
    description: 'The checked style of checkbox',
  },
  {
    name: 'disabledStyle',
    type: 'CSSProperties',
    default: '{}',
    description: 'The disabled style of checkbox',
  },
  {
    name: 'disabledCheckedStyle',
    type: 'CSSProperties',
    default: '{}',
    description: 'The disabled checked style of checkbox',
  },
  {
    name: 'onChange',
    type: '(value?: boolean) => void',
    default: '-',
    description: 'Triggered on selected value change',
  },
]

export const CHECKBOX_BUTTON_PROPS: Array<PropsItem> = [
  {
    name: 'size',
    type: `CSSProperties['width']`,
    default: '1.25rem',
    description: 'The size(width, height) of checkbox button',
  },
  {
    name: 'color',
    type: `CSSProperties['backgroundColor']`,
    default: 'teal',
    description: 'The theme color of checkbox',
  },
  {
    name: 'borderColor',
    type: `CSSProperties['borderColor']`,
    default: '#757575',
    description: 'The non-checked border color of checkbox',
  },
  {
    name: 'disabledColor',
    type: `CSSProperties['backgroundColor']`,
    default: '#dbdbdb',
    description: 'The background color of disabled checkbox',
  },
  {
    name: 'disabledBorderColor',
    type: `CSSProperties['borderColor']`,
    default: '#dbdbdb',
    description: 'The border color of non-checked disabled checkbox',
  },
]
