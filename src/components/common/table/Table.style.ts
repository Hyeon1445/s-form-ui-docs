import styled from '@emotion/styled'

export const TableWrapper = styled.div`
  overflow-x: auto;
  max-width: 100%;
`

export const Table = styled.table`
  margin: 1rem 0;
  text-align: center;
  min-width: 30rem;
  line-height: 1.25;
  width: 100%;
`

export const TableHead = styled.thead`
  font-weight: bold;
  color: teal;
`

export const TableBody = styled.tbody`
  color: #757575;
`

export const TableRow = styled.tr`
  border-style: solid;
  border-width: 2px 0;
  border-color: #00808020;
`

export const TableData = styled.td<{ isType?: boolean }>`
  padding: 1rem 0.5rem;
  white-space: pre-line;
  color: ${({ isType }) => isType && '#00808080'};
  font-weight: ${({ isType }) => isType && 'bold'};
`

export const Required = styled.span`
  font-weight: bold;
  color: red;
`
