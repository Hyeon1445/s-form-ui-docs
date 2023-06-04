import styled from '@emotion/styled'
import { CSSProperties } from 'react'

export const Container = styled.div`
  position: relative;
  .token {
    color: #f9e79f;
  }
  :hover {
    > button {
      display: inline-block;
    }
  }
`

export const CopyButton = styled.button<{ top: CSSProperties['top'] }>`
  position: absolute;
  z-index: 10;
  right: 0.5rem;
  top: ${({ top }) => top};
  padding: 0.25rem 0;
  width: 5rem;
  border-radius: 0.25rem;
  border: 1px solid #f2f2f2;
  background-color: #263238;
  color: #f2f2f2;
  font-weight: bold;
  display: none;
`

export const ExpandButton = styled.button`
  z-index: 10;
  position: absolute;
  color: #263238;
  top: 1rem;
  right: -1.5rem;
`
