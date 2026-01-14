// src/topics/Conceptos.tsx
import PageTransition from '../components/PageTransition';
import { Reveal } from '../components/Reveal';
import { CodeBlock } from '../components/CodeBlock'; // <--- 1. Importante: Importar el componente

function Conceptos() {
  
  // Definimos el código aquí para mantener el JSX limpio
  const codigoEjemplo = `//Nuestra librería
#include <bits/stdc++.h>
//esto nos sirve para no poner std al final de cada sentencia 
using namespace std; 

//declaramos nuestro principal con paréntesis debido a que es una función
//y llaves que marca el bloque al que escribiremos nuestro código.
//return 0 para terminar la compilación.
int main() {
  cout << "Hola Cetis120";
  return 0;
}`;

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
          <div className="video-container" style={{ margin: '2rem 0' }}>
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/MTUwktimZDc?si=c4RuW9lNBuym4VE2" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </Reveal>
            
        <Reveal>
          <h3>Sintaxis básica</h3>
          <p>
            C++ utiliza una sintaxis similar a la de C.
            Se da por sentado que sabemos sobre librerías y la estructura para programar en c++,
            si no es así te dejamos una liga para que veas al respecto.
          </p>
          <div className="video-container" style={{ margin: '2rem 0' }}>
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/cXe6EN3aRM0?si=nPtZF8LKcgMvKuhe" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
          <p>
            Un programa C++ típico comienza con una función main, y
            las sentencias se terminan con punto y coma (;).
            por ejemplo :
          </p>

          {/* 2. Usamos el componente CodeBlock */}
          <CodeBlock code={codigoEjemplo} />

        </Reveal>

        <Reveal>
          <h3>Variables y tipos de datos</h3>
          <p>
            En C++, puedes declarar variables para almacenar datos. Estas previamente deben de estar señaladas que tipo de dato van
            a almacenar. Aquí los tipos de datos comunes:
          </p>
          <ul>
            <li><strong>int</strong>: Almacena números enteros (longitud de 1e9).</li>
            <li><strong>long long</strong>: Almacena enteros grandes (longitud de 1e18).</li>
            <li><strong>float</strong>: Guarda números decimales (precisión simple).</li>
            <li><strong>double</strong>: Guarda números decimales (doble precisión).</li>
            <li><strong>char</strong>: Almacena un solo carácter.</li>
            <li><strong>string</strong>: Guarda cadenas de texto.</li>
            <li><strong>bool</strong>: Guarda "false" (0) o "true" (1).</li>
          </ul>
        </Reveal>
      </div>
    </PageTransition>
  );
}

export default Conceptos;