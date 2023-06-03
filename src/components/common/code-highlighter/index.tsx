import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism'

type CodeHighlighterProps = {
  code: string
  showLineNumbers?: boolean
}

const CodeHighlighter = ({
  code,
  showLineNumbers = true,
}: CodeHighlighterProps) => {
  return (
    <SyntaxHighlighter
      language="typescript"
      style={materialOceanic}
      showLineNumbers={showLineNumbers}
    >
      {code}
    </SyntaxHighlighter>
  )
}

export default CodeHighlighter
