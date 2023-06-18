import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
import Head from 'next/head'
import { Stack } from 's-form-ui'
import * as S from '@components/common/style/common.style'
import BasicCheckboxExample from '@components/checkbox/BasicCheckboxExample'
import BasicCheckboxCode from '@components/checkbox/BasicCheckboxCode'
import Table from '@components/common/table'
import {
  CHECKBOX_BUTTON_PROPS,
  CHECKBOX_PROPS,
} from '@components/checkbox/PropsData'
import { ERROR_MESSAGE_PROPS, LABEL_PROPS } from '@components/input/PropsData'

const CheckboxPage = () => {
  return (
    <>
      <Head>
        <title>Checkbox</title>
      </Head>
      <Layout page={PageEnum.Checkbox}>
        <Stack direction="col" gap="1rem">
          <S.Title>Checkbox</S.Title>
          <S.Description>
            When you define a yup validation schema in the Form component and
            assign the same field name to the name props of the Checkbox, each
            error message appears for the condition. You can customize the style
            of each component and the position of the error message, and you can
            also group the checkbox by using {`<FieldArray />`}.
          </S.Description>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>Basic Radio</S.Title>
            <S.ExampleWrapper>
              <BasicCheckboxExample />
            </S.ExampleWrapper>
            <BasicCheckboxCode />
          </Stack>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>{`Props of <Checkbox />`}</S.Title>
            <Table propsItems={CHECKBOX_PROPS} />
          </Stack>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>{`Props of <Checkbox.Button />`}</S.Title>
            <S.Description>
              Props of the native input are also available
            </S.Description>
            <Table propsItems={CHECKBOX_BUTTON_PROPS} />
          </Stack>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>{`Props of <Checkbox.Label />`}</S.Title>
            <Table propsItems={LABEL_PROPS} />
          </Stack>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>{`Props of <Checkbox.ErrorMessage />`}</S.Title>
            <Table propsItems={ERROR_MESSAGE_PROPS} />
          </Stack>
        </Stack>
      </Layout>
    </>
  )
}

export default CheckboxPage
