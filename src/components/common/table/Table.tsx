import * as S from '@components/common/table/Table.style'
import { CSSProperties, ReactNode } from 'react'

export type PropsItem = {
  isRequired?: boolean
  name?: string
  type?: ReactNode
  default?: ReactNode
  description?: ReactNode
  textAlign?: CSSProperties['textAlign']
}

type TableProps = {
  propsItems: Array<PropsItem>
}

const Table = ({ propsItems }: TableProps) => {
  return (
    <S.TableWrapper>
      <S.Table>
        <S.TableHead>
          <S.TableRow>
            <S.TableData>Name</S.TableData>
            <S.TableData>Type</S.TableData>
            <S.TableData>Default</S.TableData>
            <S.TableData>Description</S.TableData>
          </S.TableRow>
        </S.TableHead>
        <S.TableBody>
          {propsItems.map((item) => (
            <S.TableRow key={item.name}>
              <S.TableData>
                {item.isRequired && <S.Required>*</S.Required>}
                {item.name}
              </S.TableData>
              <S.TableData isType>{item.type}</S.TableData>
              <S.TableData>{item.default}</S.TableData>
              <S.TableData>{item.description}</S.TableData>
            </S.TableRow>
          ))}
        </S.TableBody>
      </S.Table>
    </S.TableWrapper>
  )
}

export default Table
