// src/topics/EntradaSalida.tsx
import PageTransition from '../components/PageTransition';
import { Reveal } from '../components/Reveal';

function EntradaSalida() {
  return (
    <PageTransition>
      <div className="post topic-content">
        <Reveal>
          <h2>Entradas y Salidas en C++</h2>
          <p>
            En el lenguaje de programación C++, las entradas y salidas son fundamentales para interactuar con el usuario y mostrar resultados. Aquí tienes información sobre cómo trabajar con entradas y salidas en C++:
          </p>
        </Reveal>
        
        <Reveal>
          <h3>Entrada de Datos (Input)</h3>
          <p>
            En C++, puedes usar la función <code>cin</code> para obtener datos del usuario. Por ejemplo:
          </p>
          <pre>
            <code className="language-cpp">
              int numero;
              cin {">"}{">"} numero;
            </code>
          </pre>
          <p>
            Aquí lo que hicimos fue declarar una variable de tipo entero para asignarle un número
            el cual se le asigna a la variable "numero" una vez escrita y ejecutada nuestra sentencia
            'cin{">"}{">"}(nombre de la variable);'.
          </p>
        </Reveal>

        <Reveal>
          <h3>Salida de Datos (Output)</h3>
          <p>
            Para mostrar información en la pantalla, puedes utilizar la función <code>cout</code>. Por ejemplo:
          </p>
          <pre>
            <code className="language-cpp">
              int resultado = 42;
              cout {"<"}{"<"} "El resultado es: " {"<"}{"<"} resultado {"<"}{"<"} endl;
            </code>
          </pre>
          <p>
            Esto lo que hace es que al compilar se muestra el valor que tengas guardado en tu
            variable "resultado", en este caso 42.
          </p>
          <p>
            Si te das cuenta no hay comillas para imprimir las variables ni nada por el estilo así que por lo tanto si
            quieres imprimir texto no olvides utilizar comillas "" y dentro de ellas el texto que quieres que
            se muestre por ejemplo:
          </p>
          <pre>
            <code className="language-cpp">
              cout{"<"}{"<"}"Hola Mundo"
            </code>
          </pre>
        </Reveal>

        <Reveal>
          <p>
            A continuación les muestro un ejemplo del código completo. Donde pedimos la edad y la
            imprimimos con texto en la sentencia <code>cout</code>
          </p>
          <pre>
            <code className="language-cpp">
              #include &lt;bits/stdc++.h&gt;
              using namespace std;

              int main() {'{'}
                int edad;
                cin{">"}{">"}edad;
                cout{"<"}{"<"}"Tu edad es de "{"<"}{"<"}edad;

                return 0;
              {'}'}
            </code>
          </pre>
          <p>
            A continuación un video con algunos ejercicios:
          </p>
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/2Rf9ojZV9-U?si=lkt6vxSOfqPOsmiU" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </Reveal>
      </div>
    </PageTransition>
  );
}

export default EntradaSalida;