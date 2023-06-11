import { CSSProperties } from 'react'
import { Button, Form, Radio, Stack } from 's-form-ui'
import * as yup from 'yup'

const BasicRadioExample = () => {
  const initialValues = {
    radio: 'top',
  }
  const message = 'This option is not allowed'
  const validationSchema = yup.object({
    radio: yup.string().test({
      message,
      test: (value) => value !== 'bottom',
    }),
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

  const optionStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

  return (
    <Form
      initialValues={initialValues}
      validationSchema={validationSchema}
      style={formStyle}
      onSubmit={(values) => console.log('submit', values)}
    >
      <Stack direction="col" gap="1rem" alignItems="center">
        <Radio name="radio">
          <Radio.Label>radio(bottom - error)</Radio.Label>
          <Stack gap="1rem" padding="0.5rem 0">
            <Radio.Option value="top" style={optionStyle}>
              <Radio.Button />
              top
            </Radio.Option>
            <Radio.Option value="bottom" style={optionStyle}>
              bottom
              <Radio.Button />
            </Radio.Option>
            <Radio.Option value="right">
              <Radio.Button />
              right
            </Radio.Option>
            <Radio.Option value="disabled" disabled>
              <Radio.Button />
              disabled
            </Radio.Option>
          </Stack>
          <Radio.ErrorMessage />
        </Radio>
        <Button style={{ width: '100%' }} type="reset">
          Reset
        </Button>
        <Button style={{ width: '100%' }}>Submit</Button>
      </Stack>
    </Form>
  )
}

export default BasicRadioExample
