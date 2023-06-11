import { CSSProperties } from 'react'
import { Button, Form, Radio as Tab, Stack } from 's-form-ui'
import * as yup from 'yup'

const TabExample = () => {
  const initialValues = {
    tab: 'option1',
  }
  const message = 'This option is not allowed'
  const validationSchema = yup.object({
    tab: yup.string().test({
      message,
      test: (value) => value !== 'option2',
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
    border: '1px solid #dbdbdb',
    height: '3rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5rem',
  }

  const checkedOptionStyle: CSSProperties = {
    backgroundColor: 'teal',
    color: 'white',
    border: '1px solid teal',
  }

  const disabledOptionStyle: CSSProperties = {
    backgroundColor: '#f2f2f2',
    border: '1px solid #757575',
    color: '#757575',
  }

  return (
    <Form
      initialValues={initialValues}
      validationSchema={validationSchema}
      style={formStyle}
      onSubmit={(values) => console.log('submit', values)}
    >
      <Stack direction="col" gap="1rem" alignItems="center">
        <Tab name="tab">
          <Tab.Label>radio(option2 - error)</Tab.Label>
          <Stack padding="0.5rem 0">
            <Tab.Option
              value="option1"
              style={optionStyle}
              checkedStyle={checkedOptionStyle}
            >
              option1
            </Tab.Option>
            <Tab.Option
              value="option2"
              style={optionStyle}
              checkedStyle={checkedOptionStyle}
            >
              option2
            </Tab.Option>
            <Tab.Option
              value="option3"
              style={optionStyle}
              checkedStyle={checkedOptionStyle}
            >
              option3
            </Tab.Option>
            <Tab.Option
              value="disabled"
              disabled
              style={optionStyle}
              checkedStyle={checkedOptionStyle}
              disabledStyle={disabledOptionStyle}
            >
              disabled
            </Tab.Option>
          </Stack>
          <Tab.ErrorMessage />
        </Tab>
        <Button style={{ width: '100%' }} type="reset">
          Reset
        </Button>
        <Button style={{ width: '100%' }}>Submit</Button>
      </Stack>
    </Form>
  )
}

export default TabExample
