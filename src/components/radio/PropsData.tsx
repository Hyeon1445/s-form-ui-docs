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
