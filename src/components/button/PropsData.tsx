import { PropsItem } from '@components/common/table/Table'

export const BUTTON_PROPS: Array<PropsItem> = [
  {
    isRequired: true,
    name: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'The content of the button.',
  },
  {
    name: 'style',
    type: 'CSSProperties',
    default: '{}',
    description: 'The style of the button.',
  },
  {
    name: 'disabledStyle',
    type: 'CSSProperties',
    default: '{}',
    description: 'The disabled style of the button.',
  },
  {
    name: 'type',
    type: (
      <>
        {`'reset'`}
        <br />
        {`| 'submit'`}
        <br />
        {`| 'button'`}
      </>
    ),
    default: `'submit'`,
    description: `The type of the button. Note that the default value is "submit."`,
  },
]
