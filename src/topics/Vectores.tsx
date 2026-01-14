// src/topics/Vectores.tsx
import PageTransition from '../components/PageTransition';
import { Reveal } from '../components/Reveal';
import { CodeBlock } from '../components/CodeBlock'; // <--- 1. Importar componente

function Vectores() {

  // --- SNIPPETS DE CÓDIGO ---

  const vectorSyntax = `#include <bits/stdc++.h>
using namespace std;

vector<tipo> nombreVector(tamaño);`;

  const vectorExample = `#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<int> miVector(5); // Declaración de un vector de enteros con tamaño 5
    return 0;
}`;

  const pushBackExample = `#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<int> miVector;
    miVector.push_back(10); // Agregar el valor 10 al final del vector
    miVector.push_back(20); // Agregar el valor 20 al final del vector
    return 0;
}`;

  const accessExample = `int valor = miVector[0]; // Acceso al primer elemento del vector`;

  const functionsExample = `#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<int> miVector;
    
    // Función push_back para agregar elementos
    miVector.push_back(10); // Agregar el valor 10 al final del vector
    miVector.push_back(20); // Agregar el valor 20 al final del vector

    // Función size para obtener el tamaño
    int tamaño = miVector.size();

    // Función empty para verificar si está vacío
    bool vacío = miVector.empty();

    // Función pop_back para eliminar el último elemento
    miVector.pop_back();

    // Función clear para eliminar todos los elementos
    miVector.clear();

    // Iteración a través de un vector
    for (int i = 0; i < miVector.size(); i++) {
        cout << "Elemento " << i << ": " << miVector[i] << endl;
    }

    return 0;
}`;

  return (
    <PageTransition>
      <div className="post topic-content">
        <Reveal>
          <h2>Vectores en C++</h2>
          <p>
            Los vectores son una estructura de datos dinámica en C++ que te permite almacenar elementos de manera eficiente. Aquí tienes información sobre cómo trabajar con vectores en C++ y ejemplos de sus funciones:
          </p>
        </Reveal>

        <Reveal>
          <h3>Declaración de Vectores</h3>
          <p>
            Puedes declarar un vector especificando su tipo y tamaño. La declaración de un vector se hace de la siguiente manera:
          </p>
          <CodeBlock code={vectorSyntax} />
          
          <p>
            Ejemplo de declaración de un vector:
          </p>
          <CodeBlock code={vectorExample} />
        </Reveal>

        <Reveal>
          <h3>Función `push_back`</h3>
          <p>
            La función <code>push_back</code> se utiliza para agregar un elemento al final de un vector. Esto permite que el vector crezca dinámicamente a medida que se añaden elementos. Ejemplo de uso de <code>push_back</code>:
          </p>
          <CodeBlock code={pushBackExample} />
        </Reveal>

        <Reveal>
          <h3>Acceso a Elementos de Vectores</h3>
          <p>
            Puedes acceder a los elementos de un vector utilizando índices. Los índices comienzan desde 0. Por ejemplo:
          </p>
          <CodeBlock code={accessExample} />
        </Reveal>

        <Reveal>
          <h3>Otras Funciones de Vectores</h3>
          <p>
            Los vectores en C++ proporcionan muchas funciones útiles. Aquí tienes ejemplos de algunas de ellas:
          </p>
          <CodeBlock code={functionsExample} />
        </Reveal>

        <Reveal>
          <h3>Ventajas de los Vectores</h3>
          <p>
            Los vectores son muy versátiles y se utilizan comúnmente en programación para gestionar colecciones de datos dinámicas. Algunas de las ventajas clave de los vectores incluyen:
          </p>
          <ul>
            <li><strong>Tamaño dinámico:</strong> Los vectores pueden cambiar de tamaño según sea necesario.</li>
            <li><strong>Acceso rápido:</strong> Puedes acceder a elementos por índice en tiempo constante.</li>
            <li><strong>Funciones útiles:</strong> Los vectores ofrecen una variedad de funciones incorporadas para simplificar la manipulación de datos.</li>
          </ul>
        </Reveal>
      </div>
    </PageTransition>
  );
}

export default Vectores;