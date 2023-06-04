import * as S from '@components/common/style/common.style'

const PropsTable = () => {
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
          <S.TableRow>
            <S.TableData>
              <S.Required>*</S.Required>children
            </S.TableData>
            <S.TableData className="type">
              ReactNode <br /> {`| ((props: FormikProps<T>) => ReactNode)`}
            </S.TableData>
            <S.TableData>-</S.TableData>
            <S.TableData>
              Use the field components of s-form-ui as children.
            </S.TableData>
          </S.TableRow>
          <S.TableRow>
            <S.TableData>
              <S.Required>*</S.Required>initialValues
            </S.TableData>
            <S.TableData className="type">T</S.TableData>
            <S.TableData>-</S.TableData>
            <S.TableData>initial values of the fields.</S.TableData>
          </S.TableRow>
          <S.TableRow>
            <S.TableData>validationSchema</S.TableData>
            <S.TableData className="type">{`yup.Schema<T>`}</S.TableData>
            <S.TableData>-</S.TableData>
            <S.TableData>Define validation schema with yup.</S.TableData>
          </S.TableRow>
          <S.TableRow>
            <S.TableData>validateOnChange</S.TableData>
            <S.TableData className="type">boolean</S.TableData>
            <S.TableData>true</S.TableData>
            <S.TableData>Whether to validate on field change.</S.TableData>
          </S.TableRow>
          <S.TableRow>
            <S.TableData>validateOnBlur</S.TableData>
            <S.TableData className="type">boolean</S.TableData>
            <S.TableData>true</S.TableData>
            <S.TableData>Whether to validate on field blur.</S.TableData>
          </S.TableRow>
          <S.TableRow>
            <S.TableData>validateOnMount</S.TableData>
            <S.TableData className="type">boolean</S.TableData>
            <S.TableData>true</S.TableData>
            <S.TableData>Whether to validate on mount.</S.TableData>
          </S.TableRow>
          <S.TableRow>
            <S.TableData>enableReinitialize</S.TableData>
            <S.TableData className="type">boolean</S.TableData>
            <S.TableData>true</S.TableData>
            <S.TableData>
              Whether to reset the form state when the initial value changes.
            </S.TableData>
          </S.TableRow>
          <S.TableRow>
            <S.TableData>
              <S.Required>*</S.Required>onSubmit
            </S.TableData>
            <S.TableData className="type">{`(values: T, formikHelpers: FormikHelpers<T>) => void`}</S.TableData>
            <S.TableData>-</S.TableData>
            <S.TableData>Function for submitting valid values.</S.TableData>
          </S.TableRow>
          <S.TableRow>
            <S.TableData>style</S.TableData>
            <S.TableData className="type">CSSProperties</S.TableData>
            <S.TableData className="object">{`{ width:"100%" }`}</S.TableData>
            <S.TableData>Style of the form.</S.TableData>
          </S.TableRow>
        </S.TableBody>
      </S.Table>
    </S.TableWrapper>
  )
}

export default PropsTable
