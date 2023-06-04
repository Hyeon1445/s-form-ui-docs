import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
import * as S from '@components/common/style/common.style'
import BasicForm from '@components/form/Basic'
import BasicFormCode from '@components/form/Code'
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
          <S.ExampleWrapper>
            <BasicForm />
          </S.ExampleWrapper>
          <BasicFormCode />
        </Stack>
        <Stack direction="col" margin="4rem 0 0" gap="1rem">
          <S.Title>Props</S.Title>
          <S.Table>
            <S.TableHead>
              <S.TableRow>
                <S.TableData>Name</S.TableData>
                <S.TableData>Type</S.TableData>
                <S.TableData>Default</S.TableData>
                <S.TableData>Description</S.TableData>
              </S.TableRow>
            </S.TableHead>
          </S.Table>
        </Stack>
      </Layout>
    </>
  )
}

export default FormPage
