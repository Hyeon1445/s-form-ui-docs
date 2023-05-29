import MonacoEditor from '@components/common/editor'
import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'

const PlaygroundPage = () => {
  return (
    <Layout page={PageEnum.Playground}>
      <div>playground</div>
      <MonacoEditor />
    </Layout>
  )
}

export default PlaygroundPage
