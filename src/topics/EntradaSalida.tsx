// src/topics/EntradaSalida.tsx
import PageTransition from '../components/PageTransition';
import { Reveal } from '../components/Reveal';
import { CodeBlock } from '../components/CodeBlock'; // <--- Importar

export default function EntradaSalida() {
  const codeEjemplo = `
#include <bits/stdc++.h>
using namespace std;

int main() {
    int edad;
    cout << "Ingresa tu edad: ";
    cin >> edad;
    cout << "Tu edad es de " << edad;

    return 0;
}`;

  return (
    <PageTransition>
      <div className="post topic-content">
        <Reveal>
          <h2>Entradas y Salidas en C++</h2>
          <p>En C++, las entradas y salidas son fundamentales...</p>
        </Reveal>
        
        <Reveal>
          <h3>Ejemplo de Código Completo</h3>
          {/* Usar el nuevo componente en lugar de pre/code manual */}
          <CodeBlock code={codeEjemplo} />
        </Reveal>
      </div>
    </PageTransition>
  );
}