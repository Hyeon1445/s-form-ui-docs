import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
import { Title } from '@components/common/title'
import styled from '@emotion/styled'
import { Stack } from 's-form-ui'

const Home = () => {
  return (
    <Layout page={PageEnum.Installation}>
      <Stack direction="col" gap="1rem">
        <Title>Installation</Title>
      </Stack>
    </Layout>
  )
}

export default Home
