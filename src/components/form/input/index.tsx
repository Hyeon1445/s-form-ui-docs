import { VStack } from '@components/common/stack'
import styled from '@emotion/styled'
import { Field, FieldProps } from 'formik'
import { CSSProperties } from 'react'

export type InputProps = {
  name: string
  disabled?: boolean
  style?: CSSProperties
  placeholder?: string
}

const defaultStyle: CSSProperties = {
  height: '2rem',
  width: '100%',
}

const Input = ({
  disabled = false,
  name,
  style,
  placeholder = '',
}: InputProps) => {
  return (
    <Field name={name}>
      {({
        field,
        form: { setFieldValue },
        meta: { error, touched, value },
      }: FieldProps) => (
        <VStack gap="0.25rem">
          <StyledInput
            {...field}
            style={{ ...defaultStyle, ...style }}
            value={value}
            hasError={!!touched && !!error}
            disabled={disabled}
            placeholder={placeholder}
          />
          <ErrorMessage>{!!touched && error}</ErrorMessage>
        </VStack>
      )}
    </Field>
  )
}

const StyledInput = styled.input<{ hasError: boolean; disabled: boolean }>`
  height: 2rem;
  width: 100%;
  border-radius: 8px;
  padding: 0 0.5rem;
  font-size: 12px;
  border: ${({ hasError, disabled }) =>
    disabled
      ? '2px solid #757575'
      : hasError
      ? '2px solid red'
      : '2px solid black'};
  &:focus-visible {
    outline: ${({ hasError, disabled }) =>
      disabled
        ? '1px #757575 auto'
        : hasError
        ? '1px red auto'
        : '1px teal auto'};
  }
  background-color: ${({ disabled }) => (disabled ? '#dbdbdb' : '#ffffff')};
`

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
`

export default Input
