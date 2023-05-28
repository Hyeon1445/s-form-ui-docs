import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
import { Title } from '../form'
import { Button, Form } from 's-form-ui'

const DatePickerPage = () => {
  return (
    <Layout page={PageEnum.DatePicker}>
      <Form
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
      </Form>
    </Layout>
  )
}

export default DatePickerPage
