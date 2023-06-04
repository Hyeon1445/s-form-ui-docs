import CodeHighlighter from '@components/common/code-highlighter'
import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
import * as S from '@components/common/title'
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
          <S.Title>Installation</S.Title>
          <div>
            <S.SubTitle>npm</S.SubTitle>
            <CodeHighlighter code={npm} showLineNumbers={false} />
          </div>
          <div>
            <S.SubTitle>yarn</S.SubTitle>
            <CodeHighlighter code={yarn} showLineNumbers={false} />
          </div>
        </Stack>
      </Layout>
    </>
  )
}

export default Home
