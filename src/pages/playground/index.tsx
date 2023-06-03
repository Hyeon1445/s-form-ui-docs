import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'

const PlaygroundPage = () => {
  return (
    <Layout page={PageEnum.Playground}>
      <div>playground</div>
    </Layout>
  )
}

export default PlaygroundPage
