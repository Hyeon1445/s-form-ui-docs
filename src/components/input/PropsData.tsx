import { PropsItem } from '@components/common/table/Table'
import styled from '@emotion/styled'

const InputType = styled.div`
  min-width: 8rem;
  text-align: left;
`

const InputChildren = styled.div`
  min-width: 12rem;
  text-align: left;
  white-space: pre;
`

export const INPUT_PROPS: Array<PropsItem> = [
  {
    isRequired: true,
    name: 'name',
    type: 'string',
    default: '-',
    description:
      'The name of the field should be the same as the field name of the initial value and validation schema.',
  },
  {
    name: 'type',
    type: (
      <InputType>
        {`"text"`}
        <br />
        {`| "password"`}
        <br />
        {`| "number"`}
        <br />
        {`| "color"`}
      </InputType>
    ),
    default: `"text"`,
    description: 'The type of input field',
    textAlign: 'left',
  },
  {
    name: 'children',
    type: 'ReactNode',
    default: (
      <InputChildren>{`
      <div 
        style={{...defaultStyle, ...style}}
      >
        <Input.Field {...props} />
        <Input.ErrorMessage />
      </div>
    `}</InputChildren>
    ),
    description:
      'set the children if you want to customize the style, specify the position of the error message, and use the counter or tooltip.',
  },
]

export const LABEL_PROPS: Array<PropsItem> = [
  {
    isRequired: true,
    name: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'The content of the label',
  },
  {
    name: 'style',
    type: 'CSSProperties',
    default: '{}',
    description: 'The style of the label',
  },
]

export const ERROR_MESSAGE_PROPS: Array<PropsItem> = [
  {
    name: 'style',
    type: 'CSSProperties',
    default: '{}',
    description: 'The style of error message',
  },
]

export const FIELD_PROPS: Array<PropsItem> = [
  {
    isRequired: true,
    name: 'name',
    type: 'string',
    default: '-',
    description:
      'The name of the field should be the same as the field name of the initial value and validation schema.',
  },
  {
    name: 'type',
    type: (
      <InputType>
        {`"text"`}
        <br />
        {`| "password"`}
        <br />
        {`| "number"`}
        <br />
        {`| "color"`}
      </InputType>
    ),
    default: `"text"`,
    description: 'The type of input field',
    textAlign: 'left',
  },
  {
    name: 'style',
    type: 'CSSProperties',
    default: '{}',
    description: 'The style of the input.',
  },
  {
    name: 'disabledStyle',
    type: 'CSSProperties',
    default: '{}',
    description: 'The style of the disabled input.',
  },
  {
    name: 'errorStyle',
    type: 'CSSProperties',
    default: '{}',
    description: 'The style of input in error state',
  },
]

export const TOOLTIP_PROPS: Array<PropsItem> = [
  {
    name: 'errorNode',
    type: 'ReactNode',
    default: '-',
    description: 'The contents of the tooltip in error state',
  },
  {
    name: 'validNode',
    type: 'ReactNode',
    default: '-',
    description: 'The contents of the tooltip in valid state',
  },
]

const DefaultFormatStyle = styled.div`
  min-width: 20rem;
`

export const COUNTER_PROPS: Array<PropsItem> = [
  {
    name: 'style',
    type: 'CSSProperties',
    default: '{}',
    description: 'The style of the input counter',
  },
  {
    name: 'max',
    type: 'number',
    default: '0',
    description: `Max length of input. And It's recommended to use max props with yup.number().max()`,
  },
  {
    name: 'format',
    type: (
      <DefaultFormatStyle>
        {'(count: number, max?: number) => string'}
      </DefaultFormatStyle>
    ),
    default: (
      <DefaultFormatStyle>
        {'(count, max) => `${count}/${max}`'}
      </DefaultFormatStyle>
    ),
    description: `You can define the format of the counter.`,
  },
]
