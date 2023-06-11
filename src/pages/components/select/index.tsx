import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
import * as yup from 'yup'
import styled from '@emotion/styled'
import { Button, Form, Stack, Select } from 's-form-ui'
import * as S from '@components/common/style/common.style'
import Head from 'next/head'
import BasicInputExample from '@components/input/BasicInputExample'
import BasicInputCode from '@components/input/BasicInputCode'

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
            <S.Title>Basic Input</S.Title>
            <S.ExampleWrapper>
              <BasicInputExample />
            </S.ExampleWrapper>
            <BasicInputCode />
          </Stack>
        </Stack>
        <Form
          initialValues={{ name: '', movie: '', disabled: 'disabled' }}
          style={{
            width: '20rem',
            border: '2px solid #f2f2f2',
            padding: '1rem',
          }}
          validationSchema={yup.object().shape({
            name: yup.string().required('필수 입력란입니다.'),
            movie: yup.string().required('필수 입력란입니다.'),
            disabled: yup.string(),
          })}
          onSubmit={(values) => console.log('submit', values)}
        >
          <Stack direction="col" gap="0.5rem">
            <Select name="name">
              <Select.Label>Name</Select.Label>
              <Select.Button />
              <Select.ErrorMessage />
              <Select.Options>
                <Select.Option value="name1">name1</Select.Option>
                <Select.Option value="name2">name2</Select.Option>
                <Select.Option value="name3">name3</Select.Option>
                <Select.Option value="name4">name4</Select.Option>
                <Select.Option value="name5">name5</Select.Option>
              </Select.Options>
            </Select>

            <Select name="disabled" disabled>
              <Select.Label>Disabled</Select.Label>
              <Select.Button />
              <Select.ErrorMessage />
              <Select.Options>
                <Select.Option value="disabled">disabled</Select.Option>
              </Select.Options>
            </Select>

            <ScrollArea>
              <Select.Label>Favorite Movie</Select.Label>
              <Select name="movie">
                <Select.Button />
                <Select.ErrorMessage />
                <Select.Options>
                  <Select.Option value="movie1">movie1</Select.Option>
                  <Select.Option value="movie2">movie2</Select.Option>
                  <Select.Option value="movie3">movie3</Select.Option>
                  <Select.Option value="movie4">movie4</Select.Option>
                  <Select.Option value="moive5">moive5</Select.Option>
                </Select.Options>
              </Select>
            </ScrollArea>

            <Button style={{ width: '100%' }}>Submit</Button>
          </Stack>
        </Form>
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
