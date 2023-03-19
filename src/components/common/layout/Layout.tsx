import { ReactElement } from 'react'
import { HStack, VStack } from '../stack'
import Header from './header'
import Sidebar from './sidebar'

interface LayoutProps {
  children: ReactElement
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <VStack>
      <Header />
      <HStack>
        <Sidebar />
        {children}
      </HStack>
    </VStack>
  )
}

export default Layout
