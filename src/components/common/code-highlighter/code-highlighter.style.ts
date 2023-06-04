import styled from '@emotion/styled'

export const Container = styled.div`
  position: relative;
  :hover {
    > button {
      display: inline-block;
    }
  }
`

export const CopyButton = styled.button`
  position: absolute;
  z-index: 10;
  right: 0.5rem;
  top: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #f2f2f2;
  background-color: #263238;
  color: #f2f2f2;
  font-weight: bold;
  display: none;
`
