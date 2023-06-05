import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
import * as S from '@components/common/style/common.style'
import { Stack } from 's-form-ui'
import Head from 'next/head'
import BasicButtonExample from '@components/button/BasicButtonExample'

const ButtonPage = () => {
  return (
    <>
      <Head>
        <title>Button</title>
      </Head>
      <Layout page={PageEnum.Button}>
        <Stack direction="col" gap="1rem">
          <S.Title>Button</S.Title>
          <S.Description>{`There are three types of button types: "submit" type for form submission, "reset" type for form reset, and "button" type for performing other functions.`}</S.Description>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>Basic Buttons</S.Title>
            <S.ExampleWrapper>
              <BasicButtonExample />
            </S.ExampleWrapper>
            <div>dd</div>
          </Stack>
        </Stack>
      </Layout>
    </>
  )
}

export default ButtonPage
