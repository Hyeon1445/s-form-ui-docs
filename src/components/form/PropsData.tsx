import { PropsItem } from '@components/common/table/Table'

export const formProps: Array<PropsItem> = [
  {
    isRequired: true,
    name: 'children',
    type: (
      <>
        ReactNode <br /> {`| ((props: FormikProps<T>) => ReactNode)`}
      </>
    ),
    default: '-',
    description: 'Use the field components of s-form-ui as children.',
  },
  {
    isRequired: true,
    name: 'initialValues',
    type: 'T',
    default: '-',
    description: 'initial values of the fields.',
  },
  {
    name: 'validationSchema',
    type: `yup.Schema<T>`,
    default: '-',
    description: 'Define validation schema with yup.',
  },
  {
    name: 'validateOnChange',
    type: 'boolean',
    default: 'true',
    description: 'Whether to validate on field change.',
  },
  {
    name: 'validateOnBlur',
    type: 'boolean',
    default: 'true',
    description: 'Whether to validate on field blur.',
  },
  {
    name: 'validateOnMount',
    type: 'boolean',
    default: 'true',
    description: 'Whether to validate on mount.',
  },
  {
    name: 'enableReinitialize',
    type: 'boolean',
    default: 'true',
    description:
      'Whether to reset the form state when the initial value changes.',
  },
  {
    isRequired: true,
    name: 'onSubmit',
    type: `(values: T, formikHelpers: FormikHelpers<T>) => void`,
    default: '-',
    description: 'Function for submitting valid values.',
  },
  {
    name: 'style',
    type: 'CSSProperties',
    default: `{width:"100%"}`,
    description: 'Style of the form.',
  },
]
