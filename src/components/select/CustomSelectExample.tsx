import { CSSProperties } from 'react'
import { Button, Form, Select, Stack } from 's-form-ui'
import * as yup from 'yup'

const CustomSelectExample = () => {
  const initialValues = {
    select: '',
    disabled: 'option1',
  }
  const errorMessage = 'This field is required!'
  const validationSchema = yup.object({
    select: yup.string().required(errorMessage),
    disabled: yup.string(),
  })

  const options = Array.from(Array(16), (_, index) => ({
    label: `${index + 1}`,
    value: `${index + 1}`,
  }))

  const formStyle = {
    width: '100%',
    maxWidth: '30rem',
    minWidth: '15rem',
    boxShadow: '0px 1px 20px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    padding: '1rem',
  }

  const selectButtonStyle: CSSProperties = {
    height: '3rem',
    borderRadius: 0,
    fontSize: '0.875rem',
  }

  const disabledStyle: CSSProperties = {
    height: '3rem',
    borderRadius: 0,
    fontWeight: 'bold',
  }

  const errorMessageStyle: CSSProperties = {
    fontWeight: 'bold',
    fontSize: '0.75rem',
    textDecoration: 'underline',
    textUnderlineOffset: '0.5rem',
    textAlign: 'center',
  }

  const optionStyle: CSSProperties = {
    width: '25%',
    textAlign: 'center',
    fontWeight: 'bold',
  }

  const OptionsStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: '0',
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
          <Select.Label>*Custom Select</Select.Label>
          <Select.Button style={selectButtonStyle} />
          <Select.ErrorMessage style={errorMessageStyle} />
          <Select.Options style={OptionsStyle}>
            {options.map((option) => (
              <Select.Option
                key={option.value}
                value={option.value}
                style={optionStyle}
              >
                {option.label}
              </Select.Option>
            ))}
          </Select.Options>
        </Select>

        <Select name="disabled" disabled>
          <Select.Label>*Custom Disabled Select</Select.Label>
          <Select.Button
            style={selectButtonStyle}
            disabledStyle={disabledStyle}
          />
          <Select.ErrorMessage />
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

export default CustomSelectExample
