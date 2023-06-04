import styled from '@emotion/styled'

export const Title = styled.p`
  font-size: 20px;
  font-weight: 900;
`

export const SubTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
`

export const Description = styled.p`
  font-size: 14px;
  color: #757575;
  word-break: keep-all;
  line-height: 1.5rem;
`

export const ExampleWrapper = styled.div`
  width: 100%;
  padding: 1.5rem 1rem;
  display: flex;
  justify-content: center;
  background-color: #00808020;
`

export const TableWrapper = styled.div`
  overflow-x: auto;
  max-width: 100%;
`

export const Table = styled.table`
  margin: 1rem 0;
  text-align: center;
  min-width: 30rem;
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
  .type {
    color: #00808080;
    font-weight: bold;
  }
  .object {
    text-align: left;
    min-width: 10rem;
  }
`

export const TableData = styled.td`
  padding: 1rem 0.5rem;
  white-space: pre-line;
`

export const Required = styled.span`
  font-weight: bold;
  color: red;
`
