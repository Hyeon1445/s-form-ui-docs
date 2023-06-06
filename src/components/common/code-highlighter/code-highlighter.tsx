import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import * as S from './code-highlighter.style'
import { MouseEvent, useState } from 'react'

type CodeHighlighterProps = {
  pre?: string
  code: string
  post?: string
  showLineNumbers?: boolean
  startingLine?: number
  hasExpandIcon?: boolean
}

const CodeHighlighter = ({
  pre = '',
  code,
  post = '',
  showLineNumbers = true,
  hasExpandIcon = showLineNumbers,
}: CodeHighlighterProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const [isFullSoucre, setIsFullSource] = useState<boolean>(false)
  const exampleCode = isFullSoucre ? [pre, code, post].join('\n') : code
  const handleCopy = async (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event.stopPropagation()
    try {
      await navigator.clipboard.writeText(
        [pre, code, post].join('\n').replace('$ ', '')
      )
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
      <S.CopyButton
        top={showLineNumbers ? '1rem' : '0.5rem'}
        onClick={handleCopy}
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </S.CopyButton>
      {hasExpandIcon && (
        <S.ExpandButton
          className="material-symbols-outlined"
          onClick={() => setIsFullSource(!isFullSoucre)}
        >
          {isFullSoucre ? 'unfold_less' : 'unfold_more'}
        </S.ExpandButton>
      )}
      <SyntaxHighlighter
        language="typescript"
        style={materialOceanic}
        customStyle={{ borderRadius: '0.5rem' }}
        showLineNumbers={isFullSoucre && showLineNumbers}
      >
        {exampleCode}
      </SyntaxHighlighter>
    </S.Container>
  )
}

export default CodeHighlighter
