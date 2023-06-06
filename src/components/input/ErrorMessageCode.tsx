import CodeHighlighter from '@components/common/code-highlighter/code-highlighter'

const ErrorMessageCode = () => {
  const pre = `import { Button, Form, Input, Stack } from 's-form-ui'
import * as yup from 'yup'
  
const ErrorMessageExample = () => {
  const initialValues = {
    text: '',
    number: 0,
    password: 'password',
  }
  const errorMessage = 'field is required!'
  const maxNumberMessage = 'max number: 100'
  const validationSchema = yup.object({
    text: yup.string().required(errorMessage),
    number: yup.number().required(errorMessage).max(100, maxNumberMessage),
    password: yup.string().required('⚠️'),
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

  const code = `        <Input name="text">
          <Input.Label>*text (no error message)</Input.Label>
          <Input.Field placeholder="placeholder" />
        </Input>

        <Input name="number">
          <Stack justifyContent="space-between">
            <Input.Label>{\`*number (<= 100)\`}</Input.Label>
            <Input.ErrorMessage />
          </Stack>
          <Input.Field type="number" />
        </Input>
        
        <Input name="password">
          <Input.Label>*password</Input.Label>
          <Stack gap="0.25rem">
            <Input.Field type="password" />
            <Input.ErrorMessage />
          </Stack>
        </Input>`

  const post = `    </Stack>
    <Stack gap="0.5rem" justifyContent="center" flexWrap="wrap">
      <Button type="reset">Reset</Button>
      <Button>Submit</Button>
    </Stack>
  </Form>
  )
}

export default ErrorMessageExample`

  return <CodeHighlighter pre={pre} code={code} post={post} />
}

export default ErrorMessageCode
