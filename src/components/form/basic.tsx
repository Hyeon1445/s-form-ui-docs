import { Button, Form, Input, Stack } from 's-form-ui'
import * as yup from 'yup'

const BasicForm = () => {
  const errorMessage = 'This field is required!'
  const validationSchema = yup.object({
    input: yup.string().required(errorMessage),
  })

  const formStyle = {
    width: '100%',
    maxWidth: '20rem',
    boxShadow: '0px 1px 20px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    padding: '1rem',
  }

  return (
    <Form
      initialValues={{ input: '' }}
      validationSchema={validationSchema}
      style={formStyle}
      onSubmit={(values) => console.log('submit', values)}
    >
      <Stack direction="col" margin="0 0 1rem">
        <Input.Label>required input</Input.Label>
        <Input name="input" />
      </Stack>
      <Stack gap="0.5rem">
        <Button type="reset">Reset</Button>
        <Button>Submit</Button>
      </Stack>
    </Form>
  )
}

export default BasicForm
