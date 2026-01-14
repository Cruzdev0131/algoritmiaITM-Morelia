// src/topics/Matrices.tsx
import PageTransition from '../components/PageTransition';
import { Reveal } from '../components/Reveal';
import { CodeBlock } from '../components/CodeBlock'; // <--- 1. Importar componente

function Matrices() {

  // --- SNIPPETS DE CÓDIGO ---

  const matrixSyntax = `tipo nombreMatriz[filas][columnas];`;

  const matrixExample = `#include <bits/stdc++.h>
using namespace std;

int main() {
    int matriz[3][3]; // Declaración de una matriz 3x3 de enteros
    matriz[0][0] = 1; // Asignar valor al elemento en la fila 0, columna 0
    matriz[1][2] = 2; // Asignar valor al elemento en la fila 1, columna 2
    // ...
    return 0;
}`;

  const accessExample = `int valor = matriz[1][2]; // Acceso al elemento en la fila 1, columna 2`;

  const iterationExample = `for (int i = 0; i < filas; i++) {
    for (int j = 0; j < columnas; j++) {
        // Acceder a matriz[i][j]
    }
}`;

  const multiDimSyntax = `tipo nombreMatriz[dimension1][dimension2][dimension3];`;

  // --- RENDERIZADO ---
  return (
    <PageTransition>
      <div className="post topic-content">
        <Reveal>
          <h2>Matrices en C++</h2>
          <p>
            Las matrices son una estructura de datos en C++ que te permite almacenar elementos en filas y columnas. Aquí tienes información sobre cómo trabajar con matrices en C++:
          </p>
        </Reveal>

        <Reveal>
          <h3>Declaración de Matrices</h3>
          <p>
            Puedes declarar una matriz especificando su tipo, tamaño y dimensiones. La declaración de una matriz bidimensional se hace de la siguiente manera:
          </p>
          <CodeBlock code={matrixSyntax} />
          
          <p>
            Ejemplo de declaración de una matriz:
          </p>
          <CodeBlock code={matrixExample} />
        </Reveal>

        <Reveal>
          <h3>Acceso a Elementos de Matrices</h3>
          <p>
            Puedes acceder a los elementos de una matriz utilizando índices para especificar la fila y la columna. Los índices comienzan desde 0. Por ejemplo:
          </p>
          <CodeBlock code={accessExample} />
        </Reveal>

        <Reveal>
          <h3>Iteración a través de Matrices</h3>
          <p>
            Puedes utilizar ciclos anidados para recorrer todos los elementos de una matriz. Esto te permite procesar cada elemento por separado. Por ejemplo:
          </p>
          <CodeBlock code={iterationExample} />
        </Reveal>

        <Reveal>
          <h3>Matrices Multidimensionales</h3>
          <p>
            En C++, puedes crear matrices multidimensionales con más de dos dimensiones. La declaración y el acceso a elementos siguen siendo similares. Por ejemplo, una matriz tridimensional:
          </p>
          <CodeBlock code={multiDimSyntax} />
          
          <p>
            Las matrices son fundamentales en la programación para almacenar y manipular datos estructurados. Pueden ser utilizadas para representar imágenes, tablas y muchos otros tipos de datos en la informática.
          </p>
        </Reveal>
      </div>
    </PageTransition>
  );
}

export default Matrices;