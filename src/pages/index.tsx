import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
import { Title } from '@components/common/title'
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
          <div>yarn add s-form-ui yup</div>
        </Stack>
      </Layout>
    </>
  )
}

export default Home
