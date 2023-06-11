import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
import { Stack } from 's-form-ui'
import { CSSProperties } from 'react'
import Head from 'next/head'
import * as S from '@components/common/style/common.style'
import BasicRadioExample from '@components/radio/BasicRadioExample'
import BasicRadioCode from '@components/radio/BasicSelectCode'
import CustomRadioExample from '@components/radio/CustomRadioExample'

const RadioPage = () => {
  const checkedTabStyle: CSSProperties = {
    backgroundColor: 'yellow',
  }
  return (
    <>
      <Head>
        <title>Radio</title>
      </Head>
      <Layout page={PageEnum.Radio}>
        <Stack direction="col" gap="1rem">
          <S.Title>Radio</S.Title>
          <S.Description>TODO: description</S.Description>
        </Stack>
        <Stack direction="col" gap="1rem" margin="3rem 0 0">
          <S.Title>Basic Radio</S.Title>
          <S.ExampleWrapper>
            <BasicRadioExample />
          </S.ExampleWrapper>
          <BasicRadioCode />
        </Stack>
        <Stack direction="col" gap="1rem" margin="3rem 0 0">
          <S.Title>Tab</S.Title>
          <S.ExampleWrapper>
            <CustomRadioExample />
          </S.ExampleWrapper>
        </Stack>
      </Layout>
    </>
  )
}

export default RadioPage
