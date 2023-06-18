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
