import { BUTTON_PROPS } from '@components/button/PropsData'
import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
import * as S from '@components/common/style/common.style'
import Table from '@components/common/table'
import BasicInputCode from '@components/input/BasicInputCode'
import BasicInputExample from '@components/input/BasicInputExample'
import CustomInputCode from '@components/input/CustomInputCode'
import CustomInputExample from '@components/input/CustomInputExample'
import ErrorMessageCode from '@components/input/ErrorMessageCode'
import ErrorMessageExample from '@components/input/ErrorMessageExample'
import InputCounterCode from '@components/input/InputCounterCode'
import InputCounterExample from '@components/input/InputCounterExample'
import {
  ERROR_MESSAGE_PROPS,
  INPUT_PROPS,
  LABEL_PROPS,
} from '@components/input/PropsData'
import TooltipCode from '@components/input/TooltipCode'
import TooltipExample from '@components/input/TooltipExample'
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
          <S.Description>
            When you define a yup validation schema in the Form component and
            assign the same field name to the name props of the Input, each
            error message appears for the condition. You can custom the style of
            each component and the position of the error message, and you can
            also use a tooltip to display the error message.
          </S.Description>
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
            <ErrorMessageCode />
          </Stack>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>Counter</S.Title>
            <S.Description>{`<Input.Counter/> represents the character count. The counter is more useful when used with yup's max condition in text type input.`}</S.Description>
            <S.ExampleWrapper>
              <InputCounterExample />
            </S.ExampleWrapper>
            <InputCounterCode />
          </Stack>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>Tooltip</S.Title>
            <S.Description>{`You can specify the tooltip for when in error state and when in valid state, and it is recommended to use it along with the <Input.ErrorMessage /> component.`}</S.Description>
            <S.ExampleWrapper>
              <TooltipExample />
            </S.ExampleWrapper>
            <TooltipCode />
          </Stack>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>Custom Style</S.Title>
            <S.ExampleWrapper>
              <CustomInputExample />
            </S.ExampleWrapper>
            <CustomInputCode />
          </Stack>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>{`Props of <Input />`}</S.Title>
            <S.Description>
              Props of the native input are also available
            </S.Description>
            <Table propsItems={INPUT_PROPS} />
          </Stack>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>{`Props of <Input.Label />`}</S.Title>
            <S.Description>TODO: label description</S.Description>
            <Table propsItems={LABEL_PROPS} />
          </Stack>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>{`Props of <Input.Field />`}</S.Title>
            <S.Description>TODO: field description</S.Description>
            <Table propsItems={BUTTON_PROPS} />
          </Stack>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>{`Props of <Input.ErrorMessage />`}</S.Title>
            <S.Description>TODO: error description</S.Description>
            <Table propsItems={ERROR_MESSAGE_PROPS} />
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
