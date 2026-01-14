// src/topics/Condicionales.tsx
import PageTransition from '../components/PageTransition';
import { Reveal } from '../components/Reveal';
import { CodeBlock } from '../components/CodeBlock'; // <--- 1. Importamos el componente

function Condicionales() {

  // --- DEFINICIÓN DE SNIPPETS ---
  const ifSyntax = `if (condición) {
    // Código a ejecutar si la condición es verdadera
}`;

  const ifExample = `#include <bits/stdc++.h>
using namespace std;

int main() {
    int numero = 10;
    if (numero > 5) {
        cout << "El número es mayor que 5";
    }
    return 0;
}`;

  const ifElseSyntax = `if (condición) {
    // Código a ejecutar si la condición es verdadera
} else {
    // Código a ejecutar si la condición es falsa
}`;

  const ifElseExample = `#include <bits/stdc++.h>
using namespace std;

int main() {
    int numero = 3;
    if (numero > 5) {
        cout << "El número es mayor que 5";
    } else {
        cout << "El número no es mayor que 5";
    }
    return 0;
}`;

  const ifElseIfSyntax = `if (condición1) {
    // Código a ejecutar si condición1 es verdadera
} else if (condición2) {
    // Código a ejecutar si condición2 es verdadera
} else {
    // Código a ejecutar si ninguna de las condiciones anteriores es verdadera
}`;

  const ifElseIfExample = `#include <bits/stdc++.h>
using namespace std;

int main() {
    int numero = 7;
    if (numero < 5) {
        cout << "El número es menor que 5";
    } else if (numero > 5) {
        cout << "El número es mayor que 5";
    } else {
        cout << "El número es igual a 5";
    }
    return 0;
}`;

  const switchSyntax = `switch (expresión) {
    case valor1:
        // Código a ejecutar si la expresión es igual a valor1
        break;
    case valor2:
        // Código a ejecutar si la expresión es igual a valor2
        break;
    // Más casos...
    default:
        // Código a ejecutar si la expresión no coincide con ningún caso
}`;

  const switchExample = `#include <bits/stdc++.h>
using namespace std;

int main() {
    char operador = '+';
    int num1 = 5, num2 = 3, resultado;

    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        default:
            cout << "Operador no válido";
            return 1;
    }

    cout << "Resultado: " << resultado;
    return 0;
}`;

  // --- RENDERIZADO DEL COMPONENTE ---
  return (
    <PageTransition>
      <div className="post topic-content">
        <Reveal>
          <h2>Condicionales en C++</h2>
          <p>
            Las estructuras condicionales son fundamentales en C++ para tomar decisiones en la programación. Aquí tienes información sobre cómo trabajar con condicionales en C++:
          </p>
        </Reveal>

        <Reveal>
          <h3>Condición `if`</h3>
          <p>
            La estructura <code>if</code> se utiliza para ejecutar un bloque de código si una condición es verdadera. Su sintaxis general es la siguiente:
          </p>
          <CodeBlock code={ifSyntax} />
          
          <p>
            Ejemplo de una estructura <code>if</code>:
          </p>
          <CodeBlock code={ifExample} />
        </Reveal>

        <Reveal>
          <h3>Condición `if-else`</h3>
          <p>
            La estructura <code>if-else</code> se utiliza para ejecutar un bloque de código si una condición es verdadera y otro bloque si la condición es falsa. Su sintaxis general es la siguiente:
          </p>
          <CodeBlock code={ifElseSyntax} />
          
          <p>
            Ejemplo de una estructura <code>if-else</code>:
          </p>
          <CodeBlock code={ifElseExample} />
        </Reveal>

        <Reveal>
          <h3>Condición `if-else if-else`</h3>
          <p>
            Puedes usar una estructura <code>if-else if-else</code> para evaluar múltiples condiciones en secuencia. El bloque de código del primer <code>if</code> o <code>else if</code> cuya condición sea verdadera se ejecutará. Su sintaxis es la siguiente:
          </p>
          <CodeBlock code={ifElseIfSyntax} />
          
          <p>
            Ejemplo de una estructura <code>if-else if-else</code>:
          </p>
          <CodeBlock code={ifElseIfExample} />
        </Reveal>

        <Reveal>
          <h3>Condición `switch`</h3>
          <p>
            La estructura <code>switch</code> se utiliza para seleccionar una de varias opciones basadas en el valor de una expresión. Es útil cuando tienes múltiples casos diferentes para evaluar. Su sintaxis general es la siguiente:
          </p>
          <CodeBlock code={switchSyntax} />
          
          <p>
            Ejemplo de una estructura <code>switch</code>:
          </p>
          <CodeBlock code={switchExample} />
        </Reveal>
      </div>
    </PageTransition>
  );
}

export default Condicionales;