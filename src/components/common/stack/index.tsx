import styled from '@emotion/styled'

interface StackProps {
  justifyContent?:
    | 'normal'
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'left'
    | 'right'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
  alignItems?:
    | 'normal'
    | 'stretch'
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
  width?: string
  height?: string
  background?: string
  margin?: string
  padding?: string
  gap?: string
}

const HStack = styled.div<StackProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  gap: ${({ gap }) => gap};
`

const VStack = styled.div<StackProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  gap: ${({ gap }) => gap};
`

export { HStack, VStack }
