import CodeHighlighter from '@components/common/code-highlighter/code-highlighter'

const BasicFormCode = () => {
  const pre = `import { Button, Form, Input, Stack } from 's-form-ui'
import * as yup from 'yup'
  
const BasicForm = () => {
  const initialValues = { input: '' }
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
    
  return (`

  const code = `    <Form
      initialValues={initialValues}
      validationSchema={validationSchema}
      style={formStyle}
      onSubmit={(values) => console.log('submit', values)}
    >
      <Stack direction="col" margin="0 0 1rem">
        <Input.Label>required input</Input.Label>
        <Input name="input" />
      </Stack>
      <Stack gap="0.5rem" flexWrap="wrap">
        <Button type="reset">Reset</Button>
        <Button>Submit</Button>
      </Stack>
    </Form>`

  const post = `
    )
}
  
export default BasicForm`

  return <CodeHighlighter pre={pre} code={code} post={post} />
}

export default BasicFormCode
