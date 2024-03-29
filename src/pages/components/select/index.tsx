import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
import styled from '@emotion/styled'
import { Stack } from 's-form-ui'
import * as S from '@components/common/style/common.style'
import Head from 'next/head'
import BasicSelectExample from '@components/select/BasicSelectExample'
import BasicSelectCode from '@components/select/BasicSelectCode'
import MenuExample from '@components/select/MenuExample'
import MenuCode from '@components/select/MenuCode'
import CustomSelectExample from '@components/select/CustomSelectExample'
import CustomSelectCode from '@components/select/CustomSelectCode'
import Table from '@components/common/table'
import {
  SELECT_BUTTON_PROPS,
  SELECT_OPTIONS_PROPS,
  SELECT_OPTION_PROPS,
  SELECT_PROPS,
} from '@components/select/PropsData'
import { ERROR_MESSAGE_PROPS, LABEL_PROPS } from '@components/input/PropsData'

const SelectPage = () => {
  return (
    <>
      <Head>
        <title>Select</title>
      </Head>
      <Layout page={PageEnum.Select}>
        <Stack direction="col" gap="1rem">
          <S.Title>Select</S.Title>
          <S.Description>
            {`When you define a yup validation schema in the Form component and
            assign the same field name to the name props of the Select, each
            error message appears on <ErrorMessage /> component for the condition. 
            Also you can use a <Select /> component as a <Menu /> without popover.`}
          </S.Description>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>Basic Select</S.Title>
            <S.ExampleWrapper>
              <BasicSelectExample />
            </S.ExampleWrapper>
            <BasicSelectCode />
          </Stack>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>Menu</S.Title>
            <S.ExampleWrapper>
              <MenuExample />
            </S.ExampleWrapper>
            <MenuCode />
          </Stack>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>Custom Style</S.Title>
            <S.ExampleWrapper>
              <CustomSelectExample />
            </S.ExampleWrapper>
            <CustomSelectCode />
          </Stack>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>{`Props of <Select />`}</S.Title>
            <Table propsItems={SELECT_PROPS} />
          </Stack>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>{`Props of <Select.Button />`}</S.Title>
            <S.Description>{`The <Select.Button /> serves as the input field for the select`}</S.Description>
            <Table propsItems={SELECT_BUTTON_PROPS} />
          </Stack>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>{`Props of <Select.Options />`}</S.Title>
            <S.Description>{`The <Select.Options /> is container of options and it serves as dropdown or fixed menu container`}</S.Description>
            <Table propsItems={SELECT_OPTIONS_PROPS} />
          </Stack>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>{`Props of <Select.Option />`}</S.Title>
            <S.Description>{`The <Select.Option /> is including label and value of a option`}</S.Description>
            <Table propsItems={SELECT_OPTION_PROPS} />
          </Stack>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>{`Props of <Select.Label />`}</S.Title>
            <Table propsItems={LABEL_PROPS} />
          </Stack>
          <Stack direction="col" gap="1rem" margin="3rem 0 0">
            <S.Title>{`Props of <Select.ErrorMessage />`}</S.Title>
            <S.Description>
              {`<Select.ErrorMessage /> component is more powerful when used with yup (validationSchema props of Form component).`}
            </S.Description>
            <Table propsItems={ERROR_MESSAGE_PROPS} />
          </Stack>
        </Stack>
      </Layout>
    </>
  )
}

const InputName = styled.p`
  font-size: 10px;
`
const Required = styled.span`
  color: red;
  font-weight: bold;
`
const ScrollArea = styled.div`
  padding: 10rem 1rem;
  background-color: #f2f2f2;
  max-height: 10rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.25rem;
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #dbdbdb;
    opacity: 0.4;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
`

export default SelectPage
