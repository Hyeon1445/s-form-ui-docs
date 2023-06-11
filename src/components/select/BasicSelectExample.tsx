import { Button, Form, Select, Stack } from 's-form-ui'
import * as yup from 'yup'

const BasicSelectExample = () => {
  const initialValues = {
    select: '',
    disabled: 'option1',
  }
  const errorMessage = 'This field is required!'
  const validationSchema = yup.object({
    select: yup.string().required(errorMessage),
    disabled: yup.string(),
  })

  const formStyle = {
    width: '100%',
    maxWidth: '30rem',
    minWidth: '15rem',
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
      <Stack direction="col" gap="1rem">
        <Select name="select">
          <Select.Label>*Basic Select</Select.Label>
          <Select.Button />
          <Select.ErrorMessage />
          <Select.Options>
            <Select.Option value="option1">option1</Select.Option>
            <Select.Option value="option2">option2</Select.Option>
            <Select.Option value="option3">option3</Select.Option>
            <Select.Option value="option4">option4</Select.Option>
            <Select.Option value="option5">option5</Select.Option>
          </Select.Options>
        </Select>

        <Select name="disabled" disabled>
          <Select.Label>disabled</Select.Label>
          <Select.Button />
          <Select.Options>
            <Select.Option value="option1">option1</Select.Option>
          </Select.Options>
        </Select>

        <Button style={{ width: '100%' }} type="reset">
          Reset
        </Button>
        <Button style={{ width: '100%' }}>Submit</Button>
      </Stack>
    </Form>
  )
}

export default BasicSelectExample
