// src/topics/Ciclos.tsx
import PageTransition from '../components/PageTransition';
import { Reveal } from '../components/Reveal';
import { CodeBlock } from '../components/CodeBlock'; // <--- 1. Importar el componente

function Ciclos() {

  // --- DEFINICIÓN DE SNIPPETS DE CÓDIGO ---
  const codeForSyntax = `for (inicialización; condición; actualización) {
    // Código a repetir
}`;

  const codeForExample = `#include <bits/stdc++.h>
using namespace std;

int main() {
    for (int i = 0; i < 5; i++) {
        cout << "Iteración " << i << endl;
    }
    return 0;
}`;

  const codeNested = `#include <bits/stdc++.h>
using namespace std;

int main() {
    for (int i = 1; i <= 5; i++) {
        for (int j = 1; j <= 10; j++) {
            cout << i << " x " << j << " = " << (i * j) << "\\t";
        }
        cout << endl;
    }
    return 0;
}`;

  const codeWhileSyntax = `while (condición) {
    // Código a repetir
}`;

  const codeWhileExample = `#include <bits/stdc++.h>
using namespace std;

int main() {
    int contador = 0;
    while (contador < 5) {
        cout << "Iteración " << contador << endl;
        contador++;
    }
    return 0;
}`;

  const codeDoWhileSyntax = `do {
    // Código a repetir
} while (condición);`;

  const codeDoWhileExample = `#include <bits/stdc++.h>
using namespace std;

int main() {
    int contador = 0;
    do {
        cout << "Iteración " << contador << endl;
        contador++;
    } while (contador < 5);
    return 0;
}`;

  // --- RENDERIZADO DEL COMPONENTE ---
  return (
    <PageTransition>
      <div className="post topic-content">
        <Reveal>
          <h2>Ciclos en C++</h2>
          <p>
            Los ciclos son una parte fundamental de la programación en C++. Te permiten repetir un conjunto de instrucciones múltiples veces. Aquí tienes información sobre cómo trabajar con ciclos en C++:
          </p>
        </Reveal>

        <Reveal>
          <h3>Ciclo `for`</h3>
          <p>
            El ciclo <code>for</code> se utiliza para ejecutar un conjunto de instrucciones un número
            específico de veces. Su sintaxis general es la siguiente:
          </p>
          {/* Reemplazamos <pre>... con <CodeBlock /> */}
          <CodeBlock code={codeForSyntax} />
          
          <p>
            Ejemplo de un ciclo <code>for</code> donde se muestra como cambia el valor de nuestra variable
            iteradora y así se logra cumplir condición para que termine de ciclar:
          </p>
          <CodeBlock code={codeForExample} />
        </Reveal>

        <Reveal>
          <h3>Ciclos Anidados</h3>
          <p>
            Los ciclos anidados son ciclos que están contenidos dentro de otros ciclos. Esta técnica es útil cuando necesitas repetir una serie de acciones varias veces dentro de otro conjunto de repeticiones.
          </p>
          <p>
            Por ejemplo, puedes usar ciclos anidados para imprimir tablas de multiplicar o para trabajar con matrices bidimensionales.
          </p>
          <p>
            Aquí hay un ejemplo de cómo podrías usar ciclos anidados para imprimir una tabla de multiplicar en C++:
          </p>
          <CodeBlock code={codeNested} />
          
          <p>
            Recuerda que al trabajar con ciclos anidados, es importante tener en cuenta la eficiencia y evitar anidamientos excesivos que puedan afectar el rendimiento de tu programa. Además, asegúrate de mantener una buena estructura de control para evitar bucles infinitos.
          </p>
        </Reveal>

        <Reveal>
          <h3>Ciclo `while`</h3>
          <p>
            El ciclo <code>while</code> se utiliza para repetir un conjunto de instrucciones mientras una condición sea verdadera.
            La sintaxis es la siguiente:
          </p>
          <CodeBlock code={codeWhileSyntax} />

          <p>
            Ejemplo de un ciclo <code>while</code> donde tenemos un contador con valor de 0 pero conforme
            se cicle nuestro código dentro de la sentencia while, se aumenta el valor al contador:
          </p>
          <CodeBlock code={codeWhileExample} />
        </Reveal>

        <Reveal>
          <h3>Ciclo `do-while`</h3>
          <p>
            El ciclo <code>do-while</code> es similar al ciclo <code>while</code>, pero garantiza que el código se ejecute al menos una vez antes de verificar la condición. La sintaxis es la siguiente:
          </p>
          <CodeBlock code={codeDoWhileSyntax} />
          
          <p>
            Ejemplo de un ciclo <code>do-while</code>:
          </p>
          <CodeBlock code={codeDoWhileExample} />
          
          <p>
            Es importante recordar que debes ser cuidadoso al usar ciclos, ya que es posible crear bucles infinitos si no se actualiza correctamente la variable de control o la condición nunca se cumple. Asegúrate de diseñar tus ciclos de manera que se cumplan las condiciones de terminación.
          </p>
        </Reveal>
      </div>
    </PageTransition>
  );
}

export default Ciclos;