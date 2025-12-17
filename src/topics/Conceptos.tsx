// src/topics/Conceptos.tsx
import PageTransition from '../components/PageTransition';
import { Reveal } from '../components/Reveal';

function Conceptos() {
  return (
    <PageTransition>
      <div className="post topic-content">
        <Reveal>
          <h2>CONCEPTOS BÁSICOS DE C++</h2>
          <p>
            El lenguaje de programación C++ es ampliamente utilizado en desarrollo de software. Aquí tienes algunos conceptos básicos para empezar:
          </p>
        </Reveal>
        
        <Reveal>
          <h3>Operadores</h3>
          <p>Para un uso correcto de este lenguaje se debe de tomar en cuenta los siguientes operadores que serán divididos en los siguientes:</p>
          <ul>
            <li><strong>LÓGICOS</strong></li>
            menor que {'<'} <br/>
            mayor que {'>'} <br/>
            menor igual que {'<='} <br/>
            mayor igual que {'>='} <br/>
            diferente de != <br/>
            igual que == <br/>
            igualar =<br/>
            y && AND<br/>
            o || OR<br/><br/>
            <li><strong>ARITMÉTICOS</strong></li>
            suma +<br/>
            resta -<br/>
            división /<br/>
            multiplicación *<br/>
            módulo %<br/>
          </ul> 
          Aquí está un video por si aún tienes dudas
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/MTUwktimZDc?si=c4RuW9lNBuym4VE2" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </Reveal>
            
        <Reveal>
          <h3>Sintaxis básica</h3>
          <p>
            C++ utiliza una sintaxis similar a la de C.
            Se da por sentado que sabemos sobre librerías y la estructura para programar en c++,
            si no es así te dejamos una liga para que veas al respecto.
          </p>
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/cXe6EN3aRM0?si=nPtZF8LKcgMvKuhe" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
          <p>
            Un programa C++ típico comienza con una función main, y
            las sentencias se terminan con punto y coma (;).
            por ejemplo :
          </p>
          <pre>
            <code className="language-cpp">
                //Nuestra librería
                #include &lt;bits/stdc++.h&gt;
                //esto nos sirve para no poner std al final de cada sentencia 
                using namespace std; 

                //declaramos nuestro principal con paréntesis debido a que es una función
                //y llaves que marca el bloque al que escribiremos nuestro código.
                //return 0 para terminar la compilación.
                int main() {'{'}
                  cout&lt;&lt;"Hola Cetis120";

                  return 0;
                {'}'}
            </code>
          </pre>
        </Reveal>

        <Reveal>
          <h3>Variables y tipos de datos</h3>
          <p>
            En C++, puedes declarar variables para almacenar datos. Estas previamente deben de estar señaladas que tipo de dato van
            a almacenar. Aquí los tipos de datos comunes:
          </p>
          <ul>
            <li><strong>int</strong><br/>
              Este tipo de dato almacena todos los números enteros negativos y positivos con una longitud
              de almacenamiento de 1e9.
            </li>
            <li><strong>long long</strong><br/>
              Este tipo de dato almacena todos los números enteros negativos y positivos pero con mayor
              longitud de almacenamiento 1e18.
            </li>
            <li><strong>float</strong><br/>
              Este tipo de dato guarda números decimales positivos y negativos con la longitud de almacenamiento
              de 1e7.
            </li>
            <li><strong>double</strong><br/>
              Este tipo de dato guarda números decimales positivos y negativos con longitud de almacenamiento
              de 1e16.
            </li>
            <li><strong>char</strong><br/>
              Este tipo de dato como su nombre lo dice solo almacena caracteres por ejemplo letras, signos, etc.
            </li>
            <li><strong>string</strong><br/>
              Este tipo de dato como su nombre lo dice, guarda una cadena de caracteres, es decir que guarda
              palabras completas.
            </li>
            <li><strong>bool</strong><br/>
              Este tipo de dato guarda solo "false" o "true" por su expresión binaria 0 y 1 
            </li>
          </ul>
        </Reveal>
      </div>
    </PageTransition>
  );
}

export default Conceptos;