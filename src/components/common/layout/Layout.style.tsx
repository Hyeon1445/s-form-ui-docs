import styled from '@emotion/styled'
import theme from '@styles/theme'

export const ChildrenWrapper = styled.div`
  height: calc(100vh - 3rem);
  width: calc(100vw - 12rem);
  overflow: auto;
  padding: 2rem 3rem;
  @media screen and (max-width: ${theme.mobileMaxWidth}) {
    width: 100vw;
  }
`
