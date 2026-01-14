// src/components/CodeBlock.tsx
import { useEffect, useRef } from 'react';
import Prism from 'prismjs';

// Importamos un tema de estilo "Dark" por defecto
// (Si esto falla, asegúrate de tener 'prismjs' instalado o agrega el CSS manualmente)
import 'prismjs/themes/prism-tomorrow.css'; 

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
      {/* Quitamos la clase "line-numbers" si no tienes el plugin instalado para evitar errores visuales */}
      <pre> 
        <code ref={codeRef} className="language-cpp">
          {code.trim()}
        </code>
      </pre>
    </div>
  );
};