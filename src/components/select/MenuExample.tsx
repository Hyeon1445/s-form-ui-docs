import { Button, Form, Select as Menu, Stack } from 's-form-ui'
import * as yup from 'yup'

const MenuExample = () => {
  const initialValues = {
    menu: 'option2',
  }
  const errorMessage = 'This field is required!'
  const validationSchema = yup.object({
    menu: yup.string().required(errorMessage),
  })

  const formStyle = {
    width: '100%',
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
        <Menu name="menu">
          <Menu.Label>*Menu</Menu.Label>
          <Menu.Options isPopover={false}>
            <Menu.Option value="option1">option1</Menu.Option>
            <Menu.Option value="option2">option2</Menu.Option>
            <Menu.Option value="option3">option3</Menu.Option>
            <Menu.Option value="option4">option4</Menu.Option>
            <Menu.Option value="option5">option5</Menu.Option>
          </Menu.Options>
        </Menu>

        <Button style={{ width: '100%' }} type="reset">
          Reset
        </Button>
        <Button style={{ width: '100%' }}>Submit</Button>
      </Stack>
    </Form>
  )
}

export default MenuExample
