// src/topics/Condicionales.tsx
import PageTransition from '../components/PageTransition';
import { Reveal } from '../components/Reveal';

function Condicionales() {
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
          <pre>
            <code>
              if (condición) {'{'}
                  // Código a ejecutar si la condición es verdadera
              {'}'}
            </code>
          </pre>
          <p>
            Ejemplo de una estructura <code>if</code>:
          </p>
          <pre>
            <code className="language-cpp">
              #include &lt;bits/stdc++.h&gt;
              using namespace std;

              int main() {'{'}
                  int numero = 10;
                  if (numero &gt; 5) {'{'}
                      cout {"<"}{"<"} "El número es mayor que 5";
                  {'}'}
                  return 0;
              {'}'}
            </code>
          </pre>
        </Reveal>

        <Reveal>
          <h3>Condición `if-else`</h3>
          <p>
            La estructura <code>if-else</code> se utiliza para ejecutar un bloque de código si una condición es verdadera y otro bloque si la condición es falsa. Su sintaxis general es la siguiente:
          </p>
          <pre>
            <code>
              if (condición) {'{'}
                  // Código a ejecutar si la condición es verdadera
              {'}'} else {'{'}
                  // Código a ejecutar si la condición es falsa
              {'}'}
            </code>
          </pre>
          <p>
            Ejemplo de una estructura <code>if-else</code>:
          </p>
          <pre>
            <code className="language-cpp">
              #include &lt;bits/stdc++.h&gt;
              using namespace std;

              int main() {'{'}
                  int numero = 3;
                  if (numero &gt; 5) {'{'}
                      cout {"<"}{"<"} "El número es mayor que 5";
                  {'}'} else {'{'}
                      cout {"<"}{"<"} "El número no es mayor que 5";
                  {'}'}
                  return 0;
              {'}'}
            </code>
          </pre>
        </Reveal>

        <Reveal>
          <h3>Condición `if-else if-else`</h3>
          <p>
            Puedes usar una estructura <code>if-else if-else</code> para evaluar múltiples condiciones en secuencia. El bloque de código del primer <code>if</code> o <code>else if</code> cuya condición sea verdadera se ejecutará. Su sintaxis es la siguiente:
          </p>
          <pre>
            <code>
              if (condición1) {'{'}
                  // Código a ejecutar si condición1 es verdadera
              {'}'} else if (condición2) {'{'}
                  // Código a ejecutar si condición2 es verdadera
              {'}'} else {'{'}
                  // Código a ejecutar si ninguna de las condiciones anteriores es verdadera
              {'}'}
            </code>
          </pre>
          <p>
            Ejemplo de una estructura <code>if-else if-else</code>:
          </p>
          <pre>
            <code className="language-cpp">
              #include &lt;bits/stdc++.h&gt;
              using namespace std;

              int main() {'{'}
                  int numero = 7;
                  if (numero &lt; 5) {'{'}
                      cout {"<"}{"<"} "El número es menor que 5" ;
                  {'}'} else if (numero &gt; 5) {'{'}
                      cout {"<"}{"<"} "El número es mayor que 5" ;
                  {'}'} else {'{'}
                      cout {"<"}{"<"} "El número es igual a 5";
                  {'}'}
                  return 0;
              {'}'}
            </code>
          </pre>
        </Reveal>

        <Reveal>
          <h3>Condición `switch`</h3>
          <p>
            La estructura <code>switch</code> se utiliza para seleccionar una de varias opciones basadas en el valor de una expresión. Es útil cuando tienes múltiples casos diferentes para evaluar. Su sintaxis general es la siguiente:
          </p>
          <pre>
            <code>
              switch (expresión) {'{'}
                  case valor1:
                      // Código a ejecutar si la expresión es igual a valor1
                      break;
                  case valor2:
                      // Código a ejecutar si la expresión es igual a valor2
                      break;
                  // Más casos...
                  default:
                      // Código a ejecutar si la expresión no coincide con ningún caso
              {'}'}
            </code>
          </pre>
          <p>
            Ejemplo de una estructura <code>switch</code>:
          </p>
          <pre>
            <code className="language-cpp">
              #include &lt;bits/stdc++.h&gt;
              using namespace std;

              int main() {'{'}
                  char operador = '+';
                  int num1 = 5, num2 = 3, resultado;

                  switch (operador) {'{'}
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
                          cout {"<"}{"<"} "Operador no válido" ;
                          return 1;
                  {'}'}

                  cout {"<"}{"<"} "Resultado: " {"<"}{"<"} resultado;
                  return 0;
              {'}'}
            </code>
          </pre>
        </Reveal>
      </div>
    </PageTransition>
  );
}

export default Condicionales;