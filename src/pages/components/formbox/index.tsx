import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
import Button from '@components/form/button/Button'
import FormBox from '@components/form/formBox'
import styled from '@emotion/styled'

const FormBoxPage = () => {
  return (
    <Layout page={PageEnum.FormBox}>
      <FormBox
        initialValues={{ value: 'value' }}
        style={{
          width: '20rem',
          border: '2px solid #f2f2f2',
          padding: '1rem',
        }}
        onSubmit={(values) => console.log('submit', values)}
      >
        <Title>FORM</Title>
        <Button style={{ width: '100%' }}>Submit</Button>
      </FormBox>
    </Layout>
  )
}

export const Title = styled.p`
  color: teal;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`

export default FormBoxPage
