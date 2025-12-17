// src/topics/Grafos.tsx
import PageTransition from '../components/PageTransition';
import { Reveal } from '../components/Reveal';

function Grafos() {
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
          <pre>
            <code className="language-cpp">
              #include &lt;bits/stdc++.h&gt;
              using namespace std;

              // Definición de un grafo con listas de adyacencia
              vector&lt;vector&lt;int&gt;&gt; grafo;

              int main() {'{'}
                  // Agregar nodos y conexiones al grafo
                  int numNodos = 5;
                  grafo.resize(numNodos);
                  grafo[0].push_back(1);
                  grafo[1].push_back(2);
                  grafo[2].push_back(3);
                  grafo[3].push_back(4);

                  // Recorrer y mostrar el grafo
                  for (int nodo = 0; nodo &lt; numNodos; nodo++) {'{'}
                      cout {"<"}{"<"} "Nodo " {"<"}{"<"} nodo {"<"}{"<"} ": ";
                      for (int vecino : grafo[nodo]) {'{'}
                          cout {"<"}{"<"} vecino {"<"}{"<"} " ";
                      {'}'}
                      cout {"<"}{"<"} endl;
                  {'}'}

                  return 0;
              {'}'}
            </code>
          </pre>
        </Reveal>

        <Reveal>
          <h3>Búsqueda en Profundidad (DFS)</h3>
          <p>
            La búsqueda en profundidad (Depth-First Search, DFS) es un algoritmo para recorrer grafos de manera recursiva. Puedes utilizar una función recursiva para explorar todos los nodos conectados a partir de un nodo inicial. Ejemplo de DFS:
          </p>
          <pre>
            <code className="language-cpp">
              #include &lt;bits/stdc++.h&gt;
              using namespace std;

              vector&lt;vector&lt;int&gt;&gt; grafo;

              void dfs(int nodo, vector&lt;bool&gt; &amp;visitados) {'{'}
                  visitados[nodo] = true;
                  cout {"<"}{"<"} "Visitando nodo " {"<"}{"<"} nodo;
                  for (int vecino : grafo[nodo]) {'{'}
                      if (!visitados[vecino]) {'{'}
                          dfs(vecino, visitados);
                      {'}'}
                  {'}'}
              {'}'}

              int main() {'{'}
                  int numNodos = 5;
                  grafo.resize(numNodos);
                  grafo[0].push_back(1);
                  grafo[1].push_back(2);
                  grafo[2].push_back(3);
                  grafo[3].push_back(4);

                  vector&lt;bool&gt; visitados(numNodos, false);
                  dfs(0, visitados);

                  return 0;
              {'}'}
            </code>
          </pre>
        </Reveal>

        <Reveal>
          <h3>Búsqueda en Amplitud (BFS)</h3>
          <p>
            La búsqueda en amplitud (Breadth-First Search, BFS) es un algoritmo que explora un grafo de manera iterativa, visitando todos los vecinos de un nodo antes de pasar a los vecinos de sus vecinos. Puedes utilizar una cola para implementar BFS. Ejemplo de BFS:
          </p>
          <pre>
            <code className="language-cpp">
              #include &lt;bits/stdc++.h&gt;
              using namespace std;

              vector&lt;vector&lt;int&gt;&gt; grafo;

              void bfs(int nodo, vector&lt;bool&gt; &amp;visitados) {'{'}
                  queue&lt;int&gt; cola;
                  cola.push(nodo);
                  visitados[nodo] = true;

                  while (!cola.empty()) {'{'}
                      int actual = cola.front();
                      cola.pop();
                      cout {"<"}{"<"} "Visitando nodo " {"<"}{"<"} actual;

                      for (int vecino : grafo[actual]) {'{'}
                          if (!visitados[vecino]) {'{'}
                              visitados[vecino] = true;
                              cola.push(vecino);
                          {'}'}
                      {'}'}
                  {'}'}
              {'}'}

              int main() {'{'}
                  int numNodos = 5;
                  grafo.resize(numNodos);
                  grafo[0].push_back(1);
                  grafo[1].push_back(2);
                  grafo[2].push_back(3);
                  grafo[3].push_back(4);

                  vector&lt;bool&gt; visitados(numNodos, false);
                  bfs(0, visitados);

                  return 0;
              {'}'}
            </code>
          </pre>
          <p>
            Los grafos y los algoritmos de búsqueda son fundamentales en la programación para resolver problemas de redes, rutas, estructuras de datos y más. Asegúrate de adaptar estos ejemplos a tus necesidades específicas y explorar más sobre grafos y algoritmos de búsqueda.
          </p>
        </Reveal>
      </div>
    </PageTransition>
  );
}

export default Grafos;