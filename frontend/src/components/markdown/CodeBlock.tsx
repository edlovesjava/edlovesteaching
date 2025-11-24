import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  language: string;
  value: string;
}

const CodeBlock = ({ language, value }: CodeBlockProps) => {
  return (
    <SyntaxHighlighter
      language={language || 'text'}
      style={vscDarkPlus}
      showLineNumbers
      customStyle={{
        borderRadius: '0.5rem',
        padding: '1rem',
      }}
    >
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
