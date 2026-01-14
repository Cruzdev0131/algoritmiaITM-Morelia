// src/topics/Grafos.tsx
import PageTransition from '../components/PageTransition';
import { Reveal } from '../components/Reveal';
import { CodeBlock } from '../components/CodeBlock'; // <--- 1. Importar componente

function Grafos() {

  // --- SNIPPETS DE CÓDIGO ---

  const graphDefinition = `#include <bits/stdc++.h>
using namespace std;

// Definición de un grafo con listas de adyacencia
vector<vector<int>> grafo;

int main() {
    // Agregar nodos y conexiones al grafo
    int numNodos = 5;
    grafo.resize(numNodos);
    grafo[0].push_back(1);
    grafo[1].push_back(2);
    grafo[2].push_back(3);
    grafo[3].push_back(4);

    // Recorrer y mostrar el grafo
    for (int nodo = 0; nodo < numNodos; nodo++) {
        cout << "Nodo " << nodo << ": ";
        for (int vecino : grafo[nodo]) {
            cout << vecino << " ";
        }
        cout << endl;
    }

    return 0;
}`;

  const dfsExample = `#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> grafo;

void dfs(int nodo, vector<bool> &visitados) {
    visitados[nodo] = true;
    cout << "Visitando nodo " << nodo << endl;
    for (int vecino : grafo[nodo]) {
        if (!visitados[vecino]) {
            dfs(vecino, visitados);
        }
    }
}

int main() {
    int numNodos = 5;
    grafo.resize(numNodos);
    grafo[0].push_back(1);
    grafo[1].push_back(2);
    grafo[2].push_back(3);
    grafo[3].push_back(4);

    vector<bool> visitados(numNodos, false);
    dfs(0, visitados);

    return 0;
}`;

  const bfsExample = `#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> grafo;

void bfs(int nodo, vector<bool> &visitados) {
    queue<int> cola;
    cola.push(nodo);
    visitados[nodo] = true;

    while (!cola.empty()) {
        int actual = cola.front();
        cola.pop();
        cout << "Visitando nodo " << actual << endl;

        for (int vecino : grafo[actual]) {
            if (!visitados[vecino]) {
                visitados[vecino] = true;
                cola.push(vecino);
            }
        }
    }
}

int main() {
    int numNodos = 5;
    grafo.resize(numNodos);
    grafo[0].push_back(1);
    grafo[1].push_back(2);
    grafo[2].push_back(3);
    grafo[3].push_back(4);

    vector<bool> visitados(numNodos, false);
    bfs(0, visitados);

    return 0;
}`;

  // --- RENDERIZADO ---
  return (
    <PageTransition>
      <div className="post topic-content">
        <Reveal>
          <h2>Grafos y Algoritmos de Búsqueda en C++</h2>
          <p>
            Los grafos son estructuras de datos que representan relaciones entre elementos. En C++, puedes implementar grafos y utilizar algoritmos de búsqueda en profundidad (DFS) y búsqueda en amplitud (BFS) para explorarlos. Aquí tienes información, ejemplos y recomendaciones sobre cómo trabajar con grafos en C++:
          </p>
        </Reveal>

        <Reveal>
          <h3>Grafos</h3>
          <p>
            Un grafo está compuesto por nodos (vértices) y conexiones (aristas) que unen los nodos. Puedes implementar un grafo utilizando estructuras de datos como listas de adyacencia o matrices de adyacencia. Ejemplo de representación de un grafo con listas de adyacencia:
          </p>
          <CodeBlock code={graphDefinition} />
        </Reveal>

        <Reveal>
          <h3>Búsqueda en Profundidad (DFS)</h3>
          <p>
            La búsqueda en profundidad (Depth-First Search, DFS) es un algoritmo para recorrer grafos de manera recursiva. Puedes utilizar una función recursiva para explorar todos los nodos conectados a partir de un nodo inicial. Ejemplo de DFS:
          </p>
          <CodeBlock code={dfsExample} />
        </Reveal>

        <Reveal>
          <h3>Búsqueda en Amplitud (BFS)</h3>
          <p>
            La búsqueda en amplitud (Breadth-First Search, BFS) es un algoritmo que explora un grafo de manera iterativa, visitando todos los vecinos de un nodo antes de pasar a los vecinos de sus vecinos. Puedes utilizar una cola para implementar BFS. Ejemplo de BFS:
          </p>
          <CodeBlock code={bfsExample} />
          
          <p>
            Los grafos y los algoritmos de búsqueda son fundamentales en la programación para resolver problemas de redes, rutas, estructuras de datos y más. Asegúrate de adaptar estos ejemplos a tus necesidades específicas y explorar más sobre grafos y algoritmos de búsqueda.
          </p>
        </Reveal>
      </div>
    </PageTransition>
  );
}

export default Grafos;