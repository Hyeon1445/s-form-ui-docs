import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
import Button from '@components/form/button/Button'
import FormBox from '@components/form/formBox'
import { Title } from '../formbox'

const ButtonPage = () => {
  return (
    <Layout page={PageEnum.Button}>
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

export default ButtonPage