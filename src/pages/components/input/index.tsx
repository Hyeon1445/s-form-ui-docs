import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
import { Title } from '../formbox'
import * as yup from 'yup'
import styled from '@emotion/styled'
import { Button, FormBox, Input, VStack } from 's-form-ui'

const InputPage = () => {
  return (
    <Layout page={PageEnum.Input}>
      <FormBox
        initialValues={{ name: '', text: '', disabled: 'disabled' }}
        style={{
          width: '20rem',
          border: '2px solid #f2f2f2',
          padding: '1rem',
        }}
        validationSchema={yup.object().shape({
          name: yup.string().required('필수 입력란입니다.'),
          text: yup.string().required('필수 입력란입니다.'),
          disabled: yup.string().notRequired(),
        })}
        onSubmit={(values) => console.log('submit', values)}
      >
        <VStack gap="0.5rem">
          <Title>FORM</Title>
          <InputName>
            <Highlight>*</Highlight>Name
          </InputName>
          <Input name="name" placeholder="이름을 입력해 주세요." />
          <InputName>
            <Highlight>*</Highlight>Text
          </InputName>
          <Input
            name="text"
            placeholder="텍스트를 입력해 주세요."
            style={{ height: '3rem' }}
          />
          <InputName>Disabled</InputName>
          <Input name="disabled" disabled />
          <Button style={{ width: '100%' }}>Submit</Button>
        </VStack>
      </FormBox>
    </Layout>
  )
}

const InputName = styled.p`
  font-size: 10px;
`
const Highlight = styled.span`
  color: red;
  font-weight: bold;
`

export default InputPage
