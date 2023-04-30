import Logo from '@components/common/logo'
import * as S from './Header.style'
import { HStack } from 's-form-ui'

const Header = () => {
  return (
    <S.HeaderWrapper>
      <HStack
        height="3rem"
        justifyContent="space-between"
        alignItems="center"
        padding="0 1rem"
      >
        <HStack gap="0.5rem">
          <Logo />
          <S.Title>Form UI</S.Title>
        </HStack>
        <HStack gap="0.5rem">
          <S.MoreIcon className="material-icons">more_vert</S.MoreIcon>
        </HStack>
      </HStack>
    </S.HeaderWrapper>
  )
}

export default Header
