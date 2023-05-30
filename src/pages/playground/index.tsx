import MonacoEditor from '@components/common/editor'
import Highlighter from '@components/common/highlighter'
import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'

const PlaygroundPage = () => {
  return (
    <Layout page={PageEnum.Playground}>
      <div>playground</div>
      <MonacoEditor />
      <Highlighter />
    </Layout>
  )
}

export default PlaygroundPage
