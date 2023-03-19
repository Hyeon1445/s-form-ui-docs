import styled from '@emotion/styled'
import theme from '@styles/theme'

interface TabProps {
  isSelected: boolean
}

export const Container = styled.div`
  height: calc(100vh - 3rem);
  background-color: ${theme.background.primary};
  width: 12rem;
  position: relative;
`

export const ComponentTab = styled.div<TabProps>`
  height: 3rem;
  font-weight: 800;
  width: 100%;
  padding: 0 1rem;
  border-bottom: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${theme.fontSize.sm};
  background-color: ${({ isSelected }) => isSelected && theme.background.white};
`

export const ComponentDetailTab = styled.button<TabProps>`
  padding: 0.5rem 1rem;
  margin: 0.5rem 1rem;
  background-color: ${({ isSelected }) => isSelected && theme.background.white};
  font-weight: 700;
  width: calc(100% - 2rem);
  border-radius: 3rem;
  font-size: ${theme.fontSize.sm};
  &:hover {
    background-color: ${theme.background.white}50;
  }
`

export const PlaygroundTab = styled.button<TabProps>`
  height: 3rem;
  background-color: ${({ isSelected }) =>
    isSelected ? theme.background.white : theme.primary.default};
  color: ${({ isSelected }) =>
    isSelected ? theme.primary.default : theme.text.white};
  font-weight: 900;
  width: 100%;
  margin: 0.5rem 0 0 0;
  &:hover {
    opacity: 0.8;
  }
`
