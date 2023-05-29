import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
import Head from 'next/head'

const StackPage = () => {
  return (
    <>
      <Head>
        <title>Stack</title>
      </Head>
      <Layout page={PageEnum.Stack}>
        <div>stack</div>
      </Layout>
    </>
  )
}

export default StackPage
