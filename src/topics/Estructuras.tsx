// src/topics/Estructuras.tsx
import PageTransition from '../components/PageTransition';
import { Reveal } from '../components/Reveal';
import { CodeBlock } from '../components/CodeBlock'; // <--- 1. Importar componente

function Estructuras() {

  // --- SNIPPETS DE CÓDIGO ---

  const queueExample = `#include <bits/stdc++.h>
using namespace std;

int main() {
    queue<int> miCola;
    miCola.push(1); // Agregar un elemento al final de la cola
    int frente = miCola.front(); // Acceder al primer elemento
    miCola.pop(); // Eliminar el primer elemento
    return 0;
}`;

  const dequeExample = `#include <bits/stdc++.h>
using namespace std;

int main() {
    deque<int> miDeque;
    miDeque.push_back(1); // Agregar un elemento al final
    miDeque.push_front(2); // Agregar un elemento al principio
    int frente = miDeque.front(); // Acceder al primer elemento
    int final = miDeque.back(); // Acceder al último elemento
    miDeque.pop_front(); // Eliminar el primer elemento
    return 0;
}`;

  const priorityQueueExample = `#include <bits/stdc++.h>
using namespace std;

int main() {
    priority_queue<int> miColaDePrioridad;
    miColaDePrioridad.push(3); // Agregar elemento
    int mayor = miColaDePrioridad.top(); // Obtener el elemento con mayor prioridad
    miColaDePrioridad.pop(); // Eliminar el elemento con mayor prioridad
    return 0;
}`;

  const stackExample = `#include <bits/stdc++.h>
using namespace std;

int main() {
    stack<int> miPila;
    miPila.push(1); // Agregar un elemento
    int tope = miPila.top(); // Acceder al elemento en la cima
    miPila.pop(); // Eliminar el elemento en la cima
    return 0;
}`;

  // --- RENDERIZADO ---
  return (
    <PageTransition>
      <div className="post topic-content">
        <Reveal>
          <h2>Estructuras de Datos en C++</h2>
          <p>
            Las estructuras de datos son elementos fundamentales en C++ para organizar y gestionar datos de manera eficiente. Aquí tienes información sobre cómo trabajar con estructuras de datos comunes en C++ y ejemplos de sus funciones:
          </p>
        </Reveal>

        <Reveal>
          <h3>Colas (Queue)</h3>
          <p>
            Una cola es una estructura de datos que sigue el principio "primero en entrar, primero en salir" (FIFO). Puedes declarar una cola utilizando la biblioteca <code>&lt;queue&gt;</code> de C++. Ejemplo de uso de una cola:
          </p>
          <CodeBlock code={queueExample} />
        </Reveal>

        <Reveal>
          <h3>Colas Dobles (Deque)</h3>
          <p>
            Un deque (cola doble) es una estructura de datos que permite agregar y eliminar elementos en ambos extremos. Puedes declarar un deque utilizando la biblioteca <code>&lt;deque&gt;</code> de C++. Ejemplo de uso de un deque:
          </p>
          <CodeBlock code={dequeExample} />
        </Reveal>

        <Reveal>
          <h3>Colas de Prioridad (Priority Queue)</h3>
          <p>
            Una cola de prioridad es una estructura de datos que organiza los elementos en función de su prioridad. Puedes declarar una cola de prioridad utilizando la biblioteca <code>&lt;queue&gt;</code> de C++. Ejemplo de uso de una cola de prioridad:
          </p>
          <CodeBlock code={priorityQueueExample} />
        </Reveal>

        <Reveal>
          <h3>Pilas (Stack)</h3>
          <p>
            Una pila es una estructura de datos que sigue el principio "último en entrar, primero en salir" (LIFO). Puedes declarar una pila utilizando la biblioteca <code>&lt;stack&gt;</code> de C++. Ejemplo de uso de una pila:
          </p>
          <CodeBlock code={stackExample} />
          
          <p>
            Estas estructuras de datos son fundamentales en programación para resolver diversos problemas y optimizar la gestión de datos en tus programas.
          </p>
        </Reveal>
      </div>
    </PageTransition>
  );
}

export default Estructuras;