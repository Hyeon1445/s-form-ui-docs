import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
import styled from '@emotion/styled'
import { Button, FieldArray, Form, Input } from 's-form-ui'
import * as yup from 'yup'

const ArrayPage = () => {
  return (
    <Layout page={PageEnum.Array}>
      <Form
        initialValues={{ inputs: ['', '', ''] }}
        style={{
          width: '20rem',
          border: '2px solid #f2f2f2',
          padding: '1rem',
        }}
        validationSchema={yup.object().shape({
          inputs: yup.array().of(yup.string().required('필수!!')),
        })}
        onSubmit={(values) => console.log('submit', values)}
      >
        {({ values }) => (
          <>
            <Title>FORM</Title>
            <FieldArray name="inputs">
              {values.inputs?.map((input, index) => (
                <Input name={`inputs.${index}`} key={index} />
              ))}
              <FieldArray.PushButton value={'push'} />
              <FieldArray.SwapButton index1={1} index2={3} />
              <FieldArray.MoveButton from={2} to={4} />
              <FieldArray.InsertButton index={1} value={'insert'} />
              <FieldArray.UnShiftButton value={'unshift'} />
              <FieldArray.RemoveButton index={0} />
              <FieldArray.PopButton />
              <FieldArray.ReplaceButton index={0} value={'replace'} />
            </FieldArray>
            <Button style={{ width: '100%' }}>Submit</Button>
            <Button type="button" style={{ width: '100%' }} disabled>
              Disabled
            </Button>
          </>
        )}
      </Form>
    </Layout>
  )
}

export const Title = styled.p`
  color: teal;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`

export default ArrayPage
