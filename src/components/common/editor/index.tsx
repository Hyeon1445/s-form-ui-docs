import Editor, { useMonaco } from '@monaco-editor/react'
import { useEffect, useState, useRef } from 'react'

const MonacoEditor = () => {
  const monaco = useMonaco()
  const example = `import Layout from '@components/common/layout'
  import { PageEnum } from '@components/common/layout/sidebar/Sidebar'
  import { Button, Form, Radio, Stack } from 's-form-ui'
  import { FormTitle } from '../form'
  import { CSSProperties } from 'react'
  import * as yup from 'yup'
  import Head from 'next/head'
  
  const RadioPage = () => {
    const checkedTabStyle: CSSProperties = {
      backgroundColor: 'yellow',
    }
    return (
      <>
        <Head>
          <title>Radio</title>
        </Head>
        <Layout page={PageEnum.Radio}>
          <Form
            initialValues={{
              radio: 'option1',
              radio2: 'option2',
              radio3: 'option1',
              radio4: 'option1',
            }}
            style={{
              width: '20rem',
              border: '2px solid #f2f2f2',
              padding: '1rem',
            }}
            validationSchema={yup.object().shape({
              radio: yup.string(),
              radio2: yup.string(),
              radio3: yup.string(),
              radio4: yup.string().test({
                message: 'option2 is not allowed',
                test: (value) => value !== 'option2',
              }),
            })}
            onSubmit={(values) => console.log('submit', values)}
          >
            <FormTitle>FORM</FormTitle>
            <Stack direction="col" gap="1rem">
              <Radio name="radio">
                <Radio.Label>radio</Radio.Label>
                <Stack gap="0.5rem">
                  <Radio.Button value="option1" />
                  <Radio.Button value="option2" />
                  <Radio.Button value="option3" disabled />
                </Stack>
              </Radio>
              <Radio name="radio2">
                <Radio.Label>radio2</Radio.Label>
                <Stack gap="0.5rem">
                  <Radio.Button />
                  <Radio.Button value="option2" disabled />
                  <Radio.Button value="option3" disabled />
                </Stack>
              </Radio>
              <Radio name="radio3">
                <Radio.Label>radio3</Radio.Label>
                <Stack direction="col" gap="0.5rem" padding="0.5rem0">
                  <Radio.Option value="option1">
                    <Radio.Button />
                    option1
                  </Radio.Option>
                  <Radio.Option value="option2">
                    <Radio.Button />
                    option2
                  </Radio.Option>
                  <Radio.Option value="option3" disabled>
                    <Radio.Button />
                    option3
                  </Radio.Option>
                  <Radio.Option value="option4" disabled>
                    <Radio.Button />
                    option4
                  </Radio.Option>
                </Stack>
              </Radio>
              <Radio name="radio4">
                <Radio.Label>radio3 (option2 - not allowed)</Radio.Label>
                <Stack direction="col" gap="0.5rem" padding="0.5rem0">
                  <Radio.Option value="option1" checkedStyle={checkedTabStyle}>
                    option1
                  </Radio.Option>
                  <Radio.Option value="option2" checkedStyle={checkedTabStyle}>
                    option2
                  </Radio.Option>
                  <Radio.Option
                    value="option3"
                    disabled
                    checkedStyle={checkedTabStyle}
                  >
                    option3
                  </Radio.Option>
                  <Radio.Option
                    value="option4"
                    disabled
                    checkedStyle={checkedTabStyle}
                  >
                    option4
                  </Radio.Option>
                </Stack>
                <Radio.ErrorMessage />
              </Radio>
              <Button style={{ width: '100%' }}>Submit</Button>
            </Stack>
          </Form>
        </Layout>
      </>
    )
  }
  
  export default RadioPage
  
  `

  useEffect(() => {
    if (!monaco) return

    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSyntaxValidation: true,
      noSemanticValidation: true,
    })
  }, [monaco])

  return (
    <Editor
      height="100rem"
      theme="vs-dark"
      language="typescript"
      value={example}
      options={{
        readOnly: true,
        fontSize: 14,
        padding: {
          top: 24,
        },
        folding: false,
        'semanticHighlighting.enabled': false,
        minimap: {
          enabled: false,
        },
        scrollbar: {
          vertical: 'hidden',
          handleMouseWheel: false,
        },
        overviewRulerLanes: 0,
        contextmenu: false,
        hover: {
          enabled: false,
        },
        parameterHints: {
          enabled: false,
        },
        quickSuggestions: {
          comments: false,
          other: false,
          strings: false,
        },
        autoClosingBrackets: 'always',
        suggestOnTriggerCharacters: false,
        wordBasedSuggestions: false,
        cursorStyle: 'line',
        tabSize: 4,
        showUnused: false,
        showDeprecated: false,
      }}
    />
  )
}

export default MonacoEditor
