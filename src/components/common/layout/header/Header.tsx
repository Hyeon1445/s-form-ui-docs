import { HStack } from '@components/common/stack'
import { HeaderWrapper, Logo } from './Header.style'

const Header = () => {
  return (
    <HeaderWrapper>
      <HStack
        height="3rem"
        justifyContent="space-between"
        alignItems="center"
        padding="0 1rem"
      >
        <Logo>Form UI</Logo>
      </HStack>
    </HeaderWrapper>
  )
}

export default Header
