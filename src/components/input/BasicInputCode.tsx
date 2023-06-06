import CodeHighlighter from '@components/common/code-highlighter/code-highlighter'

const BasicInputCode = () => {
  const pre = `import { Button, Form, Input, Stack } from 's-form-ui'
import * as yup from 'yup'

const BasicInputExample = () => {
  const initialValues = {
    text: '',
    number: 0,
    password: 'password',
    color: '#000000',
    disabled: 'disabled',
  }
  const errorMessage = 'This field is required!'
  const validationSchema = yup.object({
    text: yup.string().required(errorMessage),
    number: yup.number().required(errorMessage).max(100),
    password: yup.string().required(errorMessage),
    color: yup.string().required(errorMessage),
    disabled: yup.string().required(errorMessage),
  })

  const formStyle = {
    width: '100%',
    maxWidth: '30rem',
    boxShadow: '0px 1px 20px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    padding: '1rem',
  }

  return (
    <Form
      initialValues={initialValues}
      validationSchema={validationSchema}
      style={formStyle}
      onSubmit={(values) => console.log('submit', values)}
    >
      <Stack direction="col" margin="0 0 1rem">`

  const code = `        <Input.Label>text</Input.Label>
        <Input name="text" placeholder="placeholder" />

        <Input.Label>{\`number (<= 100)\`}</Input.Label>
        <Input name="number" type="number" />

        <Input.Label>password</Input.Label>
        <Input name="password" type="password" />

        <Input.Label>color</Input.Label>
        <Input name="color" type="color" />
        
        <Input.Label>disabled</Input.Label>
        <Input name="disabled" disabled />`

  const post = `      </Stack>
      <Stack gap="0.5rem" justifyContent="center" flexWrap="wrap">
        <Button type="reset">Reset</Button>
        <Button>Submit</Button>
      </Stack>
    </Form>
  )
}

export default BasicInputExample`

  return <CodeHighlighter pre={pre} code={code} post={post} />
}

export default BasicInputCode
