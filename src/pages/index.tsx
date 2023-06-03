import CodeHighlighter from '@components/common/code-highlighter'
import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
import { Title } from '@components/common/title'
import Head from 'next/head'
import { Stack } from 's-form-ui'

const npm = '$ npm install s-form-ui yup'
const yarn = '$ yarn add s-form-ui yup'

const Home = () => {
  return (
    <>
      <Head>
        <title>Installation</title>
      </Head>
      <Layout page={PageEnum.Installation}>
        <Stack direction="col" gap="1rem">
          <Title>Installation</Title>
          <div>
            <p>npm</p>
            <CodeHighlighter code={npm} showLineNumbers={false} />
          </div>
          <div>
            <p>yarn</p>
            <CodeHighlighter code={yarn} showLineNumbers={false} />
          </div>
        </Stack>
      </Layout>
    </>
  )
}

export default Home
