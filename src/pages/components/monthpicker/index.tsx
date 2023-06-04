import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
import { Button, Form } from 's-form-ui'
import Head from 'next/head'

const MonthPickerPage = () => {
  return (
    <>
      <Head>
        <title>MonthPicker</title>
      </Head>
      <Layout page={PageEnum.MonthPicker}>
        <Form
          initialValues={{ value: 'value' }}
          style={{
            width: '20rem',
            border: '2px solid #f2f2f2',
            padding: '1rem',
          }}
          onSubmit={(values) => console.log('submit', values)}
        >
          <>
            <Button style={{ width: '100%' }}>Submit</Button>
          </>
        </Form>
      </Layout>
    </>
  )
}

export default MonthPickerPage
