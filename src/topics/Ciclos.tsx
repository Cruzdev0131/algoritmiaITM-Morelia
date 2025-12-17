// src/topics/Ciclos.tsx
import PageTransition from '../components/PageTransition';
import { Reveal } from '../components/Reveal';

function Ciclos() {
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
          <pre>
            <code className="language-cpp">
              for (inicialización; condición; actualización) {'{'}
                  // Código a repetir
              {'}'}
            </code>
          </pre>
          <p>
            Ejemplo de un ciclo <code>for</code> donde se muestra como cambia el valor de nuestra variable
            iteradora y así se logra cumplir condición para que termine de ciclar:
          </p>
          <pre>
            <code className="language-cpp">
              #include &lt;bits/stdc++.h&gt;
              using namespace std;

              int main(){'{'}
                  for (int i = 0; i &lt; 5; i++) {'{'}
                      cout &lt;&lt; "Iteración " &lt;&lt; i;
                  {'}'}
                  return 0;
              {'}'}
            </code>
          </pre>
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
          <pre>
            <code className="language-cpp">
              #include &lt;bits/stdc++.h&gt;
              using namespace std;

              int main() {'{'}
                  for (int i = 1; i &lt;= 5; i++) {'{'}
                      for (int j = 1; j &lt;= 10; j++) {'{'}
                          cout &lt;&lt; i &lt;&lt; " x " &lt;&lt; j &lt;&lt; " = " &lt;&lt; (i * j) &lt;&lt; "\t";
                      {'}'}
                      cout &lt;&lt; endl;
                  {'}'}
                  return 0;
              {'}'}
            </code>
          </pre>
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
          <pre>
            <code className="language-cpp">
              while (condición) {'{'}
                  // Código a repetir
              {'}'}
            </code>
          </pre>
          <p>
            Ejemplo de un ciclo <code>while</code> donde tenemos un contador con valor de 0 pero conforme
            se cicle nuestro código dentro de la sentencia while, se aumenta el valor al contador:
          </p>
          <pre>
            <code className="language-cpp">
              #include &lt;bits/stdc++.h&gt;
              using namespace std;

              int main() {'{'}
                  int contador = 0;
                  while (contador &lt; 5) {'{'}
                      cout &lt;&lt; "Iteración " &lt;&lt; contador;
                      contador++;
                  {'}'}
                  return 0;
              {'}'}
            </code>
          </pre>
        </Reveal>

        <Reveal>
          <h3>Ciclo `do-while`</h3>
          <p>
            El ciclo <code>do-while</code> es similar al ciclo <code>while</code>, pero garantiza que el código se ejecute al menos una vez antes de verificar la condición. La sintaxis es la siguiente:
          </p>
          <pre>
            <code className="language-cpp">
              do {'{'}
                  // Código a repetir
              {'}'} while (condición);
            </code>
          </pre>
          <p>
            Ejemplo de un ciclo <code>do-while</code>:
          </p>
          <pre>
            <code className="language-cpp">
              #include &lt;bits/stdc++.h&gt;
              using namespace std;

              int main() {'{'}
                  int contador = 0;
                  do {'{'}
                      cout &lt;&lt; "Iteración " &lt;&lt; contador;
                      contador++;
                  {'}'} while (contador &lt; 5);
                  return 0;
              {'}'}
            </code>
          </pre>
          <p>
            Es importante recordar que debes ser cuidadoso al usar ciclos, ya que es posible crear bucles infinitos si no se actualiza correctamente la variable de control o la condición nunca se cumple. Asegúrate de diseñar tus ciclos de manera que se cumplan las condiciones de terminación.
          </p>
        </Reveal>
      </div>
    </PageTransition>
  );
}

export default Ciclos;