import { Button, Checkbox, Form, Stack } from 's-form-ui'

const BasicCheckboxExample = () => {
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
      initialValues={{ checkbox: [false, true, false, true] }}
      style={formStyle}
      onSubmit={(values) => console.log({ values })}
    >
      {({ values }) => (
        <>
          <Stack direction="col" width="5rem" gap="0.5rem" margin="0 0 1rem">
            <Checkbox name="checkbox[0]" label="default" />
            <Checkbox name="checkbox[1]" label="checked" />
            <Checkbox name="checkbox[2]" disabled label="disabled" />
            <Checkbox name="checkbox[3]" disabled label="disabled&checked" />
          </Stack>
          <Stack gap="0.5rem" flexWrap="wrap" justifyContent="center">
            <Button>submit</Button>
            <Button type="reset">Reset</Button>
          </Stack>
        </>
      )}
    </Form>
  )
}

export default BasicCheckboxExample
