import { Form, Formik, FormikHelpers, FormikValues } from 'formik'
import { CSSProperties, ReactNode } from 'react'

const defaultStyle: CSSProperties = {
  width: '100%',
}

export type FormBoxProps = {
  style?: CSSProperties
  children: ReactNode
  initialValues: FormikValues
  validationSchema?: any
  validateOnChange?: boolean
  validateOnBlur?: boolean
  validateOnMount?: boolean
  onSubmit: (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => void
}

const FormBox = ({
  style,
  children,
  initialValues,
  validationSchema,
  onSubmit,
  validateOnChange = true,
  validateOnBlur = true,
  validateOnMount = true,
}: FormBoxProps) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnBlur={validateOnBlur}
      validateOnChange={validateOnChange}
      validateOnMount={validateOnMount}
    >
      {(props) => (
        <Form>
          <div style={{ ...defaultStyle, ...style }}>{children}</div>
        </Form>
      )}
    </Formik>
  )
}

export default FormBox
