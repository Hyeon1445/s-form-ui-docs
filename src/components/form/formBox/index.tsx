import { Form, Formik, FormikHelpers, FormikValues } from 'formik'
import { CSSProperties, ReactNode } from 'react'

const defaultStyle: CSSProperties = {
  width: '100%',
}
interface FormBoxProps {
  style?: CSSProperties
  children: ReactNode
  initialValues: FormikValues
  validationSchema?: any
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
}: FormBoxProps) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
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
