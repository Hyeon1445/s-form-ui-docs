import CodeHighlighter from '@components/common/code-highlighter/code-highlighter'

const TooltipCode = () => {
  const pre = `import { Button, Form, Input, Stack } from 's-form-ui'
import * as yup from 'yup'
  
const TooltipExample = () => {
  const initialValues = {
    text: '',
  }
  const errorMessage = 'This field is required!'
  const validationSchema = yup.object({
    text: yup.string().required(errorMessage).max(10),
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
      <Stack direction="col" margin="0 0 3rem">`

  const code = `        <Input name="text">
          <Input.Label>*text</Input.Label>
          <Input.Field />
          <Input.Tooltip errorNode={<Input.ErrorMessage />} />
        </Input>`

  const post = `      </Stack>
      <Stack gap="0.5rem" justifyContent="center" flexWrap="wrap">
        <Button type="reset">Reset</Button>
        <Button>Submit</Button>
      </Stack>
    </Form>
  )
}

export default TooltipExample`

  return <CodeHighlighter pre={pre} code={code} post={post} />
}

export default TooltipCode
