import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
import { Title } from '@components/common/title'
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react'
import Head from 'next/head'
import { Stack } from 's-form-ui'

const Home = () => {
  return (
    <>
      <Head>
        <title>Installation</title>
      </Head>
      <Layout page={PageEnum.Installation}>
        <Stack direction="col" gap="1rem">
          <Title>Installation</Title>
          <Editor
            height="20rem"
            defaultLanguage="typescript"
            defaultValue="// some comment"
          />
        </Stack>
      </Layout>
    </>
  )
}

export default Home
