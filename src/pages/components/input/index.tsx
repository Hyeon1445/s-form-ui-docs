import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
import { Title } from '../formbox'
import * as yup from 'yup'
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
          <VStack>
            <Input.Label>Name</Input.Label>
            <Input name="name" placeholder="이름을 입력해 주세요." />
          </VStack>
          <VStack>
            <Input.Label>Text</Input.Label>
            <Input
              name="text"
              placeholder="텍스트를 입력해 주세요."
              style={{ height: '3rem' }}
            />
          </VStack>
          <VStack>
            <Input.Label>Disabled</Input.Label>
            <Input name="disabled" disabled />
          </VStack>
          <Button style={{ width: '100%' }}>Submit</Button>
        </VStack>
      </FormBox>
    </Layout>
  )
}

export default InputPage
