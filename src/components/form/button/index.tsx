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
    <button style={{ ...defaultStyle, ...style }} type={type}>
      {children}
    </button>
  )
}

export default Button
