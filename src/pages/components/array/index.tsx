import Layout from '@components/common/layout'
import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
import styled from '@emotion/styled'
import Head from 'next/head'
import { Button, FieldArray, Form, Input } from 's-form-ui'
import * as yup from 'yup'

const ArrayPage = () => {
  return (
    <>
      <Head>
        <title>FieldArray</title>
      </Head>
      <Layout page={PageEnum.Array}>
        <Form
          initialValues={{ inputs: ['', '', ''] }}
          style={{
            width: '20rem',
            border: '2px solid #f2f2f2',
            padding: '1rem',
          }}
          validationSchema={yup.object().shape({
            inputs: yup
              .array()
              .of(yup.mixed())
              .test({
                message: 'All inputs are required!',
                test: (items) => items?.every((item) => !!item),
              }),
          })}
          onSubmit={(values) => console.log('submit', values)}
        >
          {({ values, errors }) => (
            <>
              <Title>FORM</Title>
              <FieldArray name="inputs">
                {values.inputs?.map((value: string, index: number) => {
                  return (
                    <Input key={index} name={`inputs[${index}]`}>
                      <Input.Field></Input.Field>
                    </Input>
                  )
                })}
                <FieldArray.ErrorMessage />
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
              <Button type="reset" style={{ width: '100%' }}>
                reset
              </Button>
            </>
          )}
        </Form>
      </Layout>
    </>
  )
}

export const Title = styled.p`
  color: teal;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`

export default ArrayPage
