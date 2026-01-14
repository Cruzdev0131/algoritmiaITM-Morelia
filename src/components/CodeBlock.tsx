// src/components/CodeBlock.tsx
import { useEffect, useRef } from 'react';
import Prism from 'prismjs';


interface Props {
  code: string;
}

export const CodeBlock = ({ code }: Props) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code]);

  return (
    <div className="code-block-wrapper">
      <pre className="line-numbers">
        <code ref={codeRef} className="language-cpp">
          {code.trim()}
        </code>
      </pre>
    </div>
  );
};