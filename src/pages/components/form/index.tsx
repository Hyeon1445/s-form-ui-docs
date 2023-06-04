import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
import * as S from '@components/common/title'
import BasicForm from '@components/form/basic'
import BasicFormCode from '@components/form/code'
import styled from '@emotion/styled'
import Head from 'next/head'
import { Stack } from 's-form-ui'

const FormPage = () => {
  return (
    <>
      <Head>
        <title>Form</title>
      </Head>
      <Layout page={PageEnum.Form}>
        <Stack direction="col" gap="1rem">
          <S.Title>Form</S.Title>
          <S.Description>
            {`The <Form/> component has validation properties, and it is mandatory to wrap it around the field components (such as input, select, etc.) of s-form-ui.`}
          </S.Description>
          <ExampleWrapper>
            <BasicForm />
          </ExampleWrapper>
          <BasicFormCode />
        </Stack>
      </Layout>
    </>
  )
}

const ExampleWrapper = styled.div`
  width: 100%;
  padding: 1.5rem 1rem;
  display: flex;
  justify-content: center;
  background-color: #00808020;
`

export default FormPage
