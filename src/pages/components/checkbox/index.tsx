import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
import Head from 'next/head'
import { Button, Checkbox, Form, Stack } from 's-form-ui'
import * as yup from 'yup'

const CheckboxPage = () => {
  return (
    <>
      <Head>
        <title>Checkbox</title>
      </Head>
      <Layout page={PageEnum.Checkbox}>
        <Form
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
          {({ values }) => (
            <>
              <Stack
                direction="col"
                width="5rem"
                gap="0.5rem"
                margin="0 0 1rem"
              >
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
            </>
          )}
        </Form>
      </Layout>
    </>
  )
}

export default CheckboxPage
