import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
import * as S from '@components/common/style/common.style'
import BasicForm from '@components/form/BasicExample'
import BasicFormCode from '@components/form/BasicCode'
import Head from 'next/head'
import { Stack } from 's-form-ui'
import OptionalFieldExample from '@components/form/OptionalFieldExample'
import OptionalFieldCode from '@components/form/OptionalFieldCode'
import Table from '@components/common/table'
import { FORM_PROPS } from '@components/form/PropsData'

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
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>Basic Form</S.Title>
            <S.ExampleWrapper>
              <BasicForm />
            </S.ExampleWrapper>
            <BasicFormCode />
          </Stack>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>Optional Field</S.Title>
            <S.ExampleWrapper>
              <OptionalFieldExample />
            </S.ExampleWrapper>
            <OptionalFieldCode />
          </Stack>
        </Stack>
        <Stack direction="col" margin="4rem 0 0" gap="1rem">
          <S.Title>{`Props of <Form/>`}</S.Title>
          <Table propsItems={FORM_PROPS} />
        </Stack>
      </Layout>
    </>
  )
}

export default FormPage
