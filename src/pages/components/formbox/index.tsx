import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
import FormBox from '@components/form/formBox'

const FormBoxPage = () => {
  return (
    <Layout page={PageEnum.FormBox}>
      <FormBox
        initialValues={{ value: 'value' }}
        style={{
          width: '10rem',
          backgroundColor: 'yellow',
          padding: '1rem',
          margin: '1rem',
        }}
        onSubmit={(values) => console.log('submit', values)}
      >
        <p>FORM</p>
        <button type="submit">submit</button>
      </FormBox>
    </Layout>
  )
}

export default FormBoxPage
