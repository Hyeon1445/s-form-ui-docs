import styled from '@emotion/styled'
import theme from '@styles/theme'

export const HeaderWrapper = styled.div`
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.1);
`

export const Title = styled.span`
  color: ${theme.primary.default};
  font-weight: 900;
  font-size: ${theme.fontSize.xl};
`

export const MoreIcon = styled.button`
  color: ${theme.primary.default};
  display: none;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: ${theme.mobileMaxWidth}) {
    display: block;
  }
`
