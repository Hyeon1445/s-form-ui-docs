import { ReactElement } from 'react'
import Header from './header'
import Sidebar from './sidebar'
import { PageEnum } from './sidebar/Sidebar'
import * as S from './Layout.style'
import { Button, HStack, VStack } from 's-form-ui'

interface LayoutProps {
  children: ReactElement
  page: PageEnum
}

const Layout = ({ children, page }: LayoutProps) => {
  return (
    <VStack>
      <Header />
      <HStack>
        <Sidebar selectedTab={page} />
        <S.ChildrenWrapper>{children}</S.ChildrenWrapper>
      </HStack>
    </VStack>
  )
}

export default Layout
