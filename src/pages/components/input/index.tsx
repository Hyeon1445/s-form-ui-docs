import { BUTTON_PROPS } from '@components/button/PropsData'
import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
import * as S from '@components/common/style/common.style'
import Table from '@components/common/table'
import BasicInputCode from '@components/input/BasicInputCode'
import BasicInputExample from '@components/input/BasicInputExample'
import ErrorMessageExample from '@components/input/ErrorMessageExample'
import Head from 'next/head'
import { Stack } from 's-form-ui'

const InputPage = () => {
  return (
    <>
      <Head>
        <title>Input</title>
      </Head>
      <Layout page={PageEnum.Input}>
        <Stack direction="col" gap="1rem">
          <S.Title>Input</S.Title>
          <S.Description>TODO: description</S.Description>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>Basic Input</S.Title>
            <S.ExampleWrapper>
              <BasicInputExample />
            </S.ExampleWrapper>
            <BasicInputCode />
          </Stack>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>Error Message</S.Title>
            <S.Description>
              Check the error message position for the required input in the
              following example.
            </S.Description>
            <S.ExampleWrapper>
              <ErrorMessageExample />
            </S.ExampleWrapper>
          </Stack>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>Counter</S.Title>
            <S.ExampleWrapper>
              <BasicInputExample />
            </S.ExampleWrapper>
          </Stack>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>Tooltip</S.Title>
            <S.ExampleWrapper>
              <BasicInputExample />
            </S.ExampleWrapper>
          </Stack>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>Custom Style</S.Title>
            <S.ExampleWrapper>
              <BasicInputExample />
            </S.ExampleWrapper>
          </Stack>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>{`Props of <Input />`}</S.Title>
            <S.Description>TODO: input description</S.Description>
            <Table propsItems={BUTTON_PROPS} />
          </Stack>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>{`Props of <Input.Label />`}</S.Title>
            <S.Description>TODO: label description</S.Description>
            <Table propsItems={BUTTON_PROPS} />
          </Stack>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>{`Props of <Input.Field />`}</S.Title>
            <S.Description>TODO: field description</S.Description>
            <Table propsItems={BUTTON_PROPS} />
          </Stack>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>{`Props of <Input.ErrorMessage />`}</S.Title>
            <S.Description>TODO: error description</S.Description>
            <Table propsItems={BUTTON_PROPS} />
          </Stack>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>{`Props of <Input.Tooltip />`}</S.Title>
            <S.Description>TODO: tooltip description</S.Description>
            <Table propsItems={BUTTON_PROPS} />
          </Stack>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>{`Props of <Input.Counter />`}</S.Title>
            <S.Description>TODO: tooltip description</S.Description>
            <Table propsItems={BUTTON_PROPS} />
          </Stack>
        </Stack>
      </Layout>
    </>
  )
}

export default InputPage
