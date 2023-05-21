import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
import { Button, FormBox, Radio } from 's-form-ui'
import { Title } from '../formbox'

const RadioPage = () => {
  return (
    <Layout page={PageEnum.Radio}>
      <FormBox
        initialValues={{ radio: 'option1' }}
        style={{
          width: '20rem',
          border: '2px solid #f2f2f2',
          padding: '1rem',
        }}
        onSubmit={(values) => console.log('submit', values)}
      >
        <Title>FORM</Title>
        <Radio name="radio">
          <Radio.Label>radio</Radio.Label>
        </Radio>
        <Button style={{ width: '100%' }}>Submit</Button>
      </FormBox>
    </Layout>
  )
}

export default RadioPage
