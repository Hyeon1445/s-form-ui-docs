import styled from '@emotion/styled'
import { CSSProperties, ReactNode } from 'react'

const defaultStyle: CSSProperties = {
  width: '10rem',
  height: '2rem',
  background: 'teal',
  color: 'white',
  fontWeight: 'bold',
  borderRadius: '8px',
}

export type ButtonProps = {
  children: ReactNode
  style?: CSSProperties
  type?: 'reset' | 'submit' | 'button'
}

const Button = ({ children, style, type = 'submit' }: ButtonProps) => {
  return (
    <Container style={{ ...defaultStyle, ...style }} type={type}>
      {children}
    </Container>
  )
}

const Container = styled.button`
  &:hover {
    opacity: 0.8;
  }
`

export default Button
