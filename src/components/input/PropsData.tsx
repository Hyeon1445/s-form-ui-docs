import { PropsItem } from '@components/common/table/Table'

export const LABEL_PROPS: Array<PropsItem> = [
  {
    isRequired: true,
    name: 'children',
    type: 'ReactNode',
    default: '',
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
