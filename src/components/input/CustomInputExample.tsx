import { CSSProperties } from 'react'
import { Button, Form, Input, Stack } from 's-form-ui'
import * as yup from 'yup'

const CustomInputExample = () => {
  const initialValues = {
    text: '',
    disabled: 'disabled',
  }
  const errorMessage = 'This field is required!'
  const validationSchema = yup.object({
    text: yup.string().required(errorMessage).max(10),
    disabled: yup.string(),
  })

  const formStyle: CSSProperties = {
    width: '100%',
    maxWidth: '30rem',
    boxShadow: '0px 1px 20px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    padding: '1rem',
  }

  const CustomStyle: CSSProperties = {
    height: '3rem',
    borderRadius: '0',
    fontSize: '1rem',
  }

  const errorStyle: CSSProperties = {
    border: '2px solid red',
  }

  const disabledStyle: CSSProperties = {
    border: '2px solid #757575',
  }

  const errorMessageStyle: CSSProperties = {
    fontSize: '1rem',
    textDecoration: 'underline',
    textUnderlineOffset: '0.5rem',
    textAlign: 'right',
  }

  return (
    <Form
      initialValues={initialValues}
      validationSchema={validationSchema}
      style={formStyle}
      onSubmit={(values) => console.log('submit', values)}
    >
      <Stack direction="col" margin="0 0 2rem" gap="1rem">
        <Input name="text">
          <Input.Label>*text</Input.Label>
          <Input.Field style={CustomStyle} errorStyle={errorStyle} />
          <Input.ErrorMessage style={errorMessageStyle} />
        </Input>
        <Input name="disabled">
          <Input.Label>disabled</Input.Label>
          <Input.Field
            disabled
            style={CustomStyle}
            disabledStyle={disabledStyle}
          />
        </Input>
      </Stack>
      <Stack gap="0.5rem" justifyContent="center" flexWrap="wrap">
        <Button type="reset">Reset</Button>
        <Button>Submit</Button>
      </Stack>
    </Form>
  )
}

export default CustomInputExample
