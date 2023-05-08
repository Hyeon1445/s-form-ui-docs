import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
import { Title } from '../formbox'
import * as yup from 'yup'
import styled from '@emotion/styled'
import { Button, FormBox, VStack, Select } from 's-form-ui'

const SelectPage = () => {
  return (
    <Layout page={PageEnum.Select}>
      <FormBox
        initialValues={{ name: '' }}
        style={{
          width: '20rem',
          border: '2px solid #f2f2f2',
          padding: '1rem',
        }}
        validationSchema={yup.object().shape({
          name: yup.string().required('필수 입력란입니다.'),
        })}
        onSubmit={(values) => console.log('submit', values)}
      >
        <VStack gap="0.5rem">
          <Title>FORM</Title>
          <InputName>
            <Highlight>*</Highlight>Select
          </InputName>
          <Select name="name">
            <Select.Button />
            <Select.Options>
              <Select.Option value="name1">name1</Select.Option>
              <Select.Option value="name2">name2</Select.Option>
              <Select.Option value="name3">name3</Select.Option>
              <Select.Option value="name4">name4</Select.Option>
              <Select.Option value="name5">name5</Select.Option>
            </Select.Options>
          </Select>
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

export default SelectPage
