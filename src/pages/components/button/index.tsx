import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'

const ButtonPage = () => {
  return (
    <Layout page={PageEnum.Button}>
      <div>button</div>
    </Layout>
  )
}

export default ButtonPage
