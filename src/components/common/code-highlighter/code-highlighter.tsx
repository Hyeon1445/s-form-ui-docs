import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import * as S from './code-highlighter.style'
import { useState } from 'react'

type CodeHighlighterProps = {
  code: string
  showLineNumbers?: boolean
}

const CodeHighlighter = ({
  code,
  showLineNumbers = true,
}: CodeHighlighterProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.replace('$ ', ''))
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    } catch (error) {
      console.error('failed to copy')
    }
  }

  return (
    <S.Container>
      <S.CopyButton onClick={handleCopy}>
        {isCopied ? 'Copied!' : 'Copy'}
      </S.CopyButton>
      <SyntaxHighlighter
        language="typescript"
        style={materialOceanic}
        customStyle={{ borderRadius: '0.5rem' }}
        showLineNumbers={showLineNumbers}
      >
        {code}
      </SyntaxHighlighter>
    </S.Container>
  )
}

export default CodeHighlighter
