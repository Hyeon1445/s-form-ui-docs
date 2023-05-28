import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
import { FieldArray } from 'formik'
import { Button, Checkbox, FormBox, Stack } from 's-form-ui'
import * as yup from 'yup'

const CheckboxPage = () => {
  return (
    <Layout page={PageEnum.Checkbox}>
      <FormBox
        initialValues={{ checkbox: [false, true, false, true, true] }}
        validationSchema={yup.object().shape({
          checkbox: yup.array().of(yup.boolean().required('required!!')),
        })}
        style={{
          width: '20rem',
          border: '2px solid #f2f2f2',
          padding: '1rem',
        }}
        onSubmit={(values) => console.log({ values })}
      >
        <Stack direction="col" width="5rem" gap="0.5rem" margin="0 0 1rem">
          <Checkbox name="checkbox[0]" />
          <Checkbox name="checkbox[1]" />
          <Checkbox name="checkbox[2]" disabled />
          <Checkbox name="checkbox[3]" disabled label="disabled" />
          <Checkbox
            name="checkbox[4]"
            label="label"
            onChange={(value) => console.log({ value })}
          />
        </Stack>
        <Button>submit</Button>
        <Button type="reset">Reset</Button>
      </FormBox>
    </Layout>
  )
}

export default CheckboxPage
