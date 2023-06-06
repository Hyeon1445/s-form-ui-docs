import CodeHighlighter from '@components/common/code-highlighter/code-highlighter'

const CustomButtonCode = () => {
  const pre = `import { Button, Form, Input, Stack } from 's-form-ui'
import * as yup from 'yup'
  
const CustomStyleExample = () => {
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
    width: '100%',
  }

  const buttonStyle = {
    width: '3rem',
    height: '3rem',
    color: 'white',
    fontSize: '1.25rem',
    backgroundColor: 'purple',
    borderRadius: '50px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.3)',
  }

  const disabledButtonStyle = {
    border: '2px solid #ff000050',
    backgroundColor: 'white',
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
      <Stack direction="col" gap="0.5rem" justifyContent="center">`

  const code = `        <Button type="reset" style={buttonStyle}>↺</Button>
        <Button type="button" style={buttonStyle}>⭐</Button>
        <Button style={buttonStyle}>↑</Button>
        <Button
          disabled
          style={buttonStyle}
          disabledStyle={disabledButtonStyle}
        >
          🚫
        </Button>`

  const post = `      </Stack>
    </Form>
  )
}

export default CustomStyleExample`

  return <CodeHighlighter pre={pre} code={code} post={post} />
}

export default CustomButtonCode
