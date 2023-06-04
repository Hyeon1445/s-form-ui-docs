import CodeHighlighter from '@components/common/code-highlighter/code-highlighter'

const OptionalFieldCode = () => {
  const pre = `import { Button, Form, Input, Radio, Stack } from 's-form-ui'
import * as yup from 'yup'
    
const OptionalFieldExample = () => {
  const initialValues = { radio: 'option1', input: '' }
  const errorMessage = 'This field is required!'
  const validationSchema = yup.object({
    radio: yup.string().required(errorMessage),
    input: yup.string().when('radio', {
      is: 'option3',
      then: (schema) => schema.required(errorMessage),
    }),
  })
    
  const formStyle = {
    width: '100%',
    maxWidth: '30rem',
    boxShadow: '0px 1px 20px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    padding: '1rem',
  }
    
  return (`

  const code = `    <Form
      initialValues={initialValues}
      validationSchema={validationSchema}
      style={formStyle}
      onSubmit={(values) => console.log('submit', values)}
    >
      {({ values }) => (
        <>
          <b>Form</b>
          <Stack direction="col" margin="1rem 0" gap="1rem">
            <Radio name="radio">
              <Stack gap="0.5rem" flexWrap="wrap">
                <Radio.Option value="option1">
                  <Radio.Button />
                  option1
                </Radio.Option>
                <Radio.Option value="option2" disabled>
                  <Radio.Button />
                  option2
                </Radio.Option>
                <Radio.Option value="option3">
                  <Radio.Button />
                  option3
                </Radio.Option>
              </Stack>
            </Radio>
            {values.radio === 'option3' && <Input name="input" />}
          </Stack>
          <Stack gap="0.5rem" justifyContent="center" flexWrap="wrap">
            <Button type="reset">Reset</Button>
            <Button>Submit</Button>
          </Stack>
        </>
      )}
    </Form>`

  const post = `  )
}
  
export default OptionalFieldExample`

  return <CodeHighlighter pre={pre} code={code} post={post} />
}

export default OptionalFieldCode
