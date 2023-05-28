import { ReactNode } from 'react'
import Header from './header'
import Sidebar from './sidebar'
import { PageEnum } from './sidebar/Sidebar'
import * as S from './Layout.style'
import { Stack } from 's-form-ui'

interface LayoutProps {
  children: ReactNode
  page: PageEnum
}

const Layout = ({ children, page }: LayoutProps) => {
  return (
    <Stack direction="col">
      <Header />
      <Stack>
        <Sidebar selectedTab={page} />
        <S.ChildrenWrapper>{children}</S.ChildrenWrapper>
      </Stack>
    </Stack>
  )
}

export default Layout
