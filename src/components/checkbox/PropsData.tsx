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
