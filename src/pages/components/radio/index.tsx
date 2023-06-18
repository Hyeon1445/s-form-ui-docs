import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
import { Stack } from 's-form-ui'
import Head from 'next/head'
import * as S from '@components/common/style/common.style'
import BasicRadioExample from '@components/radio/BasicRadioExample'
import BasicRadioCode from '@components/radio/BasicSelectCode'
import TabExample from '@components/radio/TabExample'
import TabCode from '@components/radio/TabCode'
import Table from '@components/common/table'
import { RADIO_PROPS } from '@components/radio/PropsData'

const RadioPage = () => {
  return (
    <>
      <Head>
        <title>Radio</title>
      </Head>
      <Layout page={PageEnum.Radio}>
        <Stack direction="col" gap="1rem">
          <S.Title>Radio</S.Title>
          <S.Description>{`When you define a yup validation schema in the Form component and assign the same field name to the name props of the Radio, each error message appears on <ErrorMessage /> component for the condition. Also you can use a <Radio /> component as a <Tab /> without radio button.`}</S.Description>
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
            <TabExample />
          </S.ExampleWrapper>
          <TabCode />
        </Stack>
        <Stack direction="col" gap="1rem" margin="3rem 0 0">
          <S.Title>{`Props of <Radio />`}</S.Title>
          <Table propsItems={RADIO_PROPS} />
        </Stack>
      </Layout>
    </>
  )
}

export default RadioPage
