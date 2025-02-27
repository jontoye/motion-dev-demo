import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import React from 'react'

export function CodeBlock({ children }: { children: string }) {
  return (
    <SyntaxHighlighter
      customStyle={{
        maxHeight: '600px',
        height: '25px',
        resize: 'vertical',
      }}
      PreTag="div"
      language="javascript"
      style={oneDark}
    >
      {children}
    </SyntaxHighlighter>
  )
}
