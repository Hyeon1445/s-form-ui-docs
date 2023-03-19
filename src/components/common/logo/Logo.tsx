import { Container, LogoElement } from './Logo.style'

const Logo = () => {
  return (
    <Container size="1.25rem">
      <LogoElement variant="outlined" />
      <LogoElement variant="outlined" />
      <LogoElement variant="filled" />
    </Container>
  )
}

export default Logo
