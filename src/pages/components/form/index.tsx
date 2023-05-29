import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
import { Description, Title } from '@components/common/title'
import styled from '@emotion/styled'
import Head from 'next/head'
import { Button, Form, Stack } from 's-form-ui'

const FormPage = () => {
  return (
    <>
      <Head>
        <title>Form</title>
      </Head>
      <Layout page={PageEnum.Form}>
        <Stack direction="col" gap="1rem">
          <Title>Form</Title>
          <Description>
            {`The <Form/> component has validation properties, and it is mandatory to wrap it around the field components (such as input, select, etc.) of s-form-ui.`}
          </Description>
          <Form
            initialValues={{ value: 'value' }}
            style={{
              width: '20rem',
              border: '2px solid #f2f2f2',
              padding: '1rem',
            }}
            onSubmit={(values) => console.log('submit', values)}
          >
            <FormTitle>FORM</FormTitle>
            <Button style={{ width: '100%' }}>Submit</Button>
          </Form>
        </Stack>
      </Layout>
    </>
  )
}

export const FormTitle = styled.p`
  color: teal;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`

export default FormPage
