import Logo from '@components/common/logo'
import * as S from './Header.style'
//import { Stack } from 's-form-ui'

const Header = () => {
  return (
    <S.HeaderWrapper>
      {/*<Stack
        height="3rem"
        justifyContent="space-between"
        alignItems="center"
        padding="0 1rem"
      >*/}
      {/*<Stack gap="0.5rem">*/}
      <Logo />
      <S.Title>S.Form UI</S.Title>
      {/*</Stack>*/}
      {/*<Stack gap="0.5rem">*/}
      <S.MoreIcon className="material-icons">more_vert</S.MoreIcon>
      {/*</Stack>*/}
      {/*</Stack>*/}
    </S.HeaderWrapper>
  )
}

export default Header
