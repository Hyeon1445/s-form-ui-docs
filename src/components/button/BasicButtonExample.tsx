import { Button, Form, Input, Stack } from 's-form-ui'
import * as yup from 'yup'

const BasicButtonExample = () => {
  const initialValues = { input: '' }
  const errorMessage = 'This field is required!'
  const validationSchema = yup.object({
    input: yup.string().required(errorMessage),
  })

  const formStyle = {
    width: '100%',
    maxWidth: '30rem',
    boxShadow: '0px 1px 20px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    padding: '1rem',
  }

  const inputStyle = {
    width: '10rem',
  }

  return (
    <Form
      initialValues={initialValues}
      validationSchema={validationSchema}
      style={formStyle}
      onSubmit={(values) => console.log('submit', values)}
    >
      <Stack direction="col" margin="0 0 1rem">
        <Input.Label>required input</Input.Label>
        <Input name="input" style={inputStyle} />
      </Stack>
      <Stack direction="col" gap="0.5rem" justifyContent="center">
        <Button type="reset">Reset</Button>
        <Button type="button">Button</Button>
        <Button>Submit</Button>
        <Button disabled>Disabled</Button>
      </Stack>
    </Form>
  )
}

export default BasicButtonExample
