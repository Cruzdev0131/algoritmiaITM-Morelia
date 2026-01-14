// src/topics/DSU.tsx
import PageTransition from '../components/PageTransition';
import { Reveal } from '../components/Reveal';
import { CodeBlock } from '../components/CodeBlock'; // <--- 1. Importar componente

function DSU() {

  // --- SNIPPETS DE CÓDIGO ---

  const dsuImplementation = `#include <bits/stdc++.h>
using namespace std;

class DSU {
private:
    vector<int> parent;
    vector<int> rank;

public:
    DSU(int n) {
        parent.resize(n);
        rank.resize(n, 1); // Inicialmente, cada elemento es su propio conjunto de tamaño 1
        for (int i = 0; i < n; ++i)
            parent[i] = i; // Cada elemento es su propio representante al inicio
    }

    int find(int x) {
        if (parent[x] != x)
            parent[x] = find(parent[x]); // Path compression
        return parent[x];
    }

    void unite(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);
        if (rootX != rootY) {
            if (rank[rootX] > rank[rootY])
                swap(rootX, rootY);
            parent[rootX] = rootY;
            if (rank[rootX] == rank[rootY])
                rank[rootY]++;
        }
    }
};`;

  const dsuExample = `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n = 5; // Número de elementos
    DSU dsu(n);

    // Unir algunos conjuntos
    dsu.unite(0, 1);
    dsu.unite(2, 3);
    dsu.unite(0, 4);

    // Encontrar representantes de algunos elementos
    cout << "Representante de 1: " << dsu.find(1) << endl;
    cout << "Representante de 3: " << dsu.find(3) << endl;

    return 0;
}`;

  // --- RENDERIZADO ---
  return (
    <PageTransition>
      <div className="post topic-content">
        <Reveal>
          <h2>DSU en C++</h2>
          <p>La técnica de DSU se puede implementar en C++ utilizando una estructura de datos eficiente llamada "Union-Find". Aquí tienes una implementación básica:</p>
          <CodeBlock code={dsuImplementation} />
        </Reveal>
        
        <Reveal>
          <p>Aquí hay un ejemplo de cómo usar esta implementación de DSU:</p>
          <CodeBlock code={dsuExample} />
        </Reveal>

        <Reveal>
          <h3>¿Qué es DSU?</h3>
          <p>
            DSU (Disjoint Set Union) o Union-Find es una estructura de datos que mantiene una colección de conjuntos disjuntos (que no se superponen). Permite realizar dos operaciones principales de manera eficiente:
          </p>
          <ul>
            <li><strong>Find:</strong> Determinar a qué conjunto pertenece un elemento específico</li>
            <li><strong>Union:</strong> Unir dos conjuntos en uno solo</li>
          </ul>
        </Reveal>

        <Reveal>
          <h3>Aplicaciones de DSU</h3>
          <p>DSU es especialmente útil en problemas que involucran:</p>
          <ul>
            <li>Detección de ciclos en grafos</li>
            <li>Algoritmo de Kruskal para encontrar el árbol de expansión mínima</li>
            <li>Problemas de conectividad en redes</li>
            <li>Agrupación dinámica de elementos</li>
          </ul>
        </Reveal>

        <Reveal>
          <h3>Optimizaciones</h3>
          <p>La implementación mostrada incluye dos optimizaciones importantes:</p>
          <ul>
            <li><strong>Path Compression:</strong> En la función find, hacemos que todos los nodos en el camino apunten directamente a la raíz</li>
            <li><strong>Union by Rank:</strong> Siempre unimos el árbol más pequeño al más grande para mantener la altura mínima</li>
          </ul>
          <p>Estas optimizaciones hacen que las operaciones sean prácticamente constantes en tiempo amortizado.</p>
        </Reveal>
      </div>
    </PageTransition>
  );
}

export default DSU;