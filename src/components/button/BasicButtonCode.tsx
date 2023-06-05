import CodeHighlighter from '@components/common/code-highlighter/code-highlighter'

const BasicButtonCode = () => {
  const pre = `import { Button, Form, Input, Stack } from 's-form-ui'
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
  
  const ButtonStyle = {
    width: '100%',
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
        <Input name="input" />
      </Stack>
      <Stack direction="col" gap="0.5rem" justifyContent="center">`

  const code = `        <Button type="reset" style={ButtonStyle}>Reset</Button>
        <Button style={ButtonStyle}>Submit</Button>
        <Button type="button" style={ButtonStyle}>Button</Button>
        <Button style={ButtonStyle} disabled>Disabled</Button>`

  const post = `      </Stack>
    </Form>
  )
}

export default BasicButtonExample`

  return <CodeHighlighter pre={pre} code={code} post={post} />
}

export default BasicButtonCode
