// src/topics/CadenasArreglos.tsx
import PageTransition from '../components/PageTransition';
import { Reveal } from '../components/Reveal';
import { CodeBlock } from '../components/CodeBlock'; // <--- 1. Importar

function CadenasArreglos() {

  // --- SNIPPETS DE CÓDIGO ---
  
  const arraySyntax = `tipo nombreArreglo[tamaño];`;

  const arrayExample = `#include <bits/stdc++.h>
using namespace std;

int main() {
    int numeros[5]; // Declaración de un arreglo de enteros con tamaño 5
    numeros[0] = 1; // Asignar valor al primer elemento
    numeros[1] = 2; // Asignar valor al segundo elemento
    // ...
    return 0;
}`;

  const stringExample = `#include <bits/stdc++.h>
using namespace std;

int main() {
    string miCadena = "Hola Cetis120";
    cout << miCadena;
    return 0;
    //esto te imprime Hola Cetis120
}`;

  const charArrayExample = `#include <bits/stdc++.h>
using namespace std;

int main() {
    char miCadena[] = "Hola, mundo";
    cout << miCadena;
    return 0;
}`;

  const iterationExample = `//declaras tu variable de string y un contador que aumenta su valor cada iteracion.
string a; int cont=0; cin >> a;

//en un for haremos uso de una funcion de libreria llamada .size() o .length()
//esto hace que automaticamente la condicion del for tome el tamaño del arreglo
for(int i=0; i < a.size(); i++) {
    cont++;
}
cout << cont;`;

  return (
    <PageTransition>
      <div className="post topic-content">
        <Reveal>
          <h2>Arreglos y Cadenas en C++</h2>
          <p>
            Los arreglos y las cadenas son elementos fundamentales en C++ para almacenar y manipular datos. Aquí tienes información sobre cómo trabajar con arreglos y cadenas en C++:
          </p>
        </Reveal>

        <Reveal>
          <h3>Arreglos</h3>
          <p>
            Un arreglo es una colección de elementos del mismo tipo. Puedes acceder a cada elemento individualmente mediante un índice. La declaración de un arreglo se hace de la siguiente manera:
          </p>
          <CodeBlock code={arraySyntax} />
          
          <p>
            Ejemplo de declaración de un arreglo:
          </p>
          <CodeBlock code={arrayExample} />
        </Reveal>

        <Reveal>
          <h3>Cadenas de Caracteres</h3>
          <p>
            Las cadenas de caracteres en C++ son arreglos de caracteres terminados con un carácter nulo (<code>'\0'</code>). Puedes trabajar con cadenas
            utilizando el tipo de dato <code>string</code> o arreglos de caracteres pero es poco
            recomendado a la hora de estar en programación competitiva. Ejemplo de declaración de una
            cadena utilizando <code>string namevariable</code>:
          </p>
          <CodeBlock code={stringExample} />
          
          <p>
            Ejemplo de declaración de una cadena utilizando un arreglo de caracteres:
          </p>
          <CodeBlock code={charArrayExample} />
        </Reveal>

        <Reveal>
          <h3>Operaciones con Cadenas</h3>
          <p>
            Puedes realizar varias operaciones con cadenas, como concatenación, longitud, búsqueda de subcadenas, etc. La clase <code>std::string</code> proporciona numerosos métodos para trabajar con cadenas de manera eficiente.
            <br/> Te invito a que indagues más de estas otras formas. :D
          </p>
        </Reveal>

        <Reveal>
          <h3>Iteración a través de Arreglos y Cadenas</h3>
          <p>
            Puedes utilizar ciclos <code>for</code> o <code>while</code> para iterar a través de arreglos y cadenas. Al acceder a los elementos mediante un índice, puedes procesar cada elemento por separado.
          </p>
          <p>Un ejemplo muy claro es que si necesitas saber cuántas letras tiene una palabra, es muy fácil, solo tienes que hacer lo siguiente:
          </p>
          <CodeBlock code={iterationExample} />
        </Reveal>
      </div>
    </PageTransition>
  );
}

export default CadenasArreglos;