import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
import { Title } from '../formbox'
import * as yup from 'yup'
import { Button, FormBox, HStack, Input, VStack } from 's-form-ui'
import styled from '@emotion/styled'

const InputPage = () => {
  return (
    <Layout page={PageEnum.Input}>
      <FormBox
        initialValues={{
          name: '',
          text: '',
          disabled: 'disabled',
          custom: '',
          tooltip: '',
          counter: '',
        }}
        style={{
          width: '20rem',
          border: '2px solid #f2f2f2',
          padding: '1rem',
        }}
        validationSchema={yup.object().shape({
          name: yup.string().required('필수 입력란입니다.'),
          text: yup.string().required('필수 입력란입니다.'),
          disabled: yup.string().notRequired(),
          custom: yup.string().required('필수 입력란입니다.'),
          tooltip: yup.string().required('필수 입력란입니다.'),
          counter: yup
            .string()
            .required('최소 3글자 이상 입력해주세요.')
            .min(3, '최소 3글자 이상 입력해주세요.')
            .max(10, '최대 10글자까지 입력 가능합니다.'),
        })}
        onSubmit={(values) => console.log('submit', values)}
      >
        <VStack gap="0.5rem">
          <Title>FORM</Title>
          <Container>
            <VStack>
              <Input.Label>Name</Input.Label>
              <Input name="name" placeholder="이름을 입력해 주세요." />
            </VStack>
            <VStack>
              <Input.Label>Text</Input.Label>
              <Input name="text" placeholder="텍스트를 입력해 주세요." />
            </VStack>
            <VStack>
              <Input.Label>Disabled</Input.Label>
              <Input name="disabled" disabled />
            </VStack>
            <Input name="tooltip" style={{ margin: '3rem 0' }}>
              <Input.Label>tooltip</Input.Label>
              <Input.Field />
              <Input.Tooltip
                errorNode={
                  <Input.ErrorMessage style={{ fontWeight: 'bold' }} />
                }
              />
            </Input>
            <Input name="custom">
              <HStack justifyContent="space-between">
                <Input.Label>custom</Input.Label>
                <Input.ErrorMessage />
              </HStack>
              <Input.Field />
            </Input>
            <Input name="counter">
              <Input.Label>counter</Input.Label>
              <Input.Field />
              <HStack justifyContent="space-between">
                <div>
                  <Input.ErrorMessage />
                </div>
                <Input.Counter max={10} />
              </HStack>
            </Input>
          </Container>
          <Button style={{ width: '100%' }}>Submit</Button>
        </VStack>
      </FormBox>
    </Layout>
  )
}

const Container = styled.div`
  overflow-y: auto;
  height: 25rem;
  padding: 0 0.5rem 2rem 0.5rem;
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

export default InputPage
