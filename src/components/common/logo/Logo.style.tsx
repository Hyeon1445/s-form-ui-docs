import styled from '@emotion/styled'
import theme from '@styles/theme'

export const Container = styled.div<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ size }) => `calc(${size} / 16)`};
`

export const LogoElement = styled.div<{ variant: 'outlined' | 'filled' }>`
  background-color: ${({ variant }) =>
    variant === 'filled' && theme.primary.default};
  border: 2px solid ${theme.primary.default};
  width: 100%;
  height: 100%;
  border-radius: 2px;
`
