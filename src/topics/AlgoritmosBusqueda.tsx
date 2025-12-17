// src/topics/AlgoritmosBusqueda.tsx
import PageTransition from '../components/PageTransition';
import { Reveal } from '../components/Reveal';

function AlgoritmosBusqueda() {
  return (
    <PageTransition>
      <div className="post topic-content">
        <Reveal>
          <h2>Algoritmos de Búsqueda y Estructuras en C++</h2>
          <p>
            Los algoritmos de búsqueda son fundamentales en la programación para encontrar elementos en conjuntos de datos. Además, en C++, puedes utilizar estructuras (structs) para organizar datos de manera eficiente. Aquí tienes información sobre los algoritmos de búsqueda lineal y binaria, así como una introducción a las estructuras en C++:
          </p>
        </Reveal>

        <Reveal>
          <h3>Búsqueda Lineal</h3>
          <p>
            La búsqueda lineal es un algoritmo simple que recorre secuencialmente un conjunto de datos para encontrar un elemento específico. Puedes implementar una búsqueda lineal en C++ con un bucle <code>for</code> o <code>while</code>. Ejemplo de búsqueda lineal:
          </p>
          <pre>
            <code className="language-cpp">
              #include &lt;bits/stdc++.h&gt;
              using namespace std;

              int busquedaLineal(vector&lt;int&gt; datos, int objetivo) {'{'}
                  for (int i = 0; i &lt; datos.size(); i++) {'{'}
                      if (datos[i] == objetivo) {'{'}
                          return i; // Se encontró el elemento
                      {'}'}
                  {'}'}
                  return -1; // El elemento no se encontró
              {'}'}

              int main() {'{'}
                  vector&lt;int&gt; miVector = {'{'}1, 2, 3, 4, 5{'}'};
                  int objetivo = 3;
                  int resultado = busquedaLineal(miVector, objetivo);
                  if (resultado != -1) {'{'}
                      cout {"<"}{"<"} "El elemento " {"<"}{"<"} objetivo {"<"}{"<"} " se encontró en la posición " {"<"}{"<"} resultado {"<"}{"<"} endl;
                  {'}'} else {'{'}
                      cout {"<"}{"<"} "El elemento " {"<"}{"<"} objetivo {"<"}{"<"} " no se encontró en el vector" {"<"}{"<"} endl;
                  {'}'}
                  return 0;
              {'}'}
            </code>
          </pre>
        </Reveal>

        <Reveal>
          <h3>Búsqueda Binaria</h3>
          <p>
            La búsqueda binaria es un algoritmo eficiente para buscar elementos en conjuntos de datos ordenados. Divide repetidamente el conjunto a la mitad y compara el elemento con el valor deseado. Ejemplo de búsqueda binaria:
          </p>
          <pre>
            <code className="language-cpp">
              #include &lt;bits/stdc++.h&gt;
              using namespace std;

              int busquedaBinaria(vector&lt;int&gt; datos, int objetivo) {'{'}
                  int izquierda = 0;
                  int derecha = datos.size() - 1;
                  while (izquierda &lt;= derecha) {'{'}
                      int medio = izquierda + (derecha - izquierda) / 2;
                      if (datos[medio] == objetivo) {'{'}
                          return medio; // Se encontró el elemento
                      {'}'}
                      if (datos[medio] &lt; objetivo) {'{'}
                          izquierda = medio + 1;
                      {'}'} else {'{'}
                          derecha = medio - 1;
                      {'}'}
                  {'}'}
                  return -1; // El elemento no se encontró
              {'}'}

              int main() {'{'}
                  vector&lt;int&gt; miVector = {'{'}1, 2, 3, 4, 5{'}'};
                  int objetivo = 3;
                  int resultado = busquedaBinaria(miVector, objetivo);
                  if (resultado != -1) {'{'}
                      cout {"<"}{"<"} "El elemento " {"<"}{"<"} objetivo {"<"}{"<"} " se encontró en la posición " {"<"}{"<"} resultado {"<"}{"<"} endl;
                  {'}'} else {'{'}
                      cout {"<"}{"<"} "El elemento " {"<"}{"<"} objetivo {"<"}{"<"} " no se encontró en el vector";
                  {'}'}
                  return 0;
              {'}'}
            </code>
          </pre>
        </Reveal>

        <Reveal>
          <h3>Estructuras en C++ (Structs)</h3>
          <p>
            En C++, puedes utilizar estructuras (structs) para crear tus propios tipos de datos personalizados. Las estructuras te permiten combinar diferentes tipos de datos en una única entidad. Aquí hay un ejemplo simple de una estructura:
          </p>
          <pre>
            <code className="language-cpp">
              #include &lt;iostream&gt;
              using namespace std;

              // Definición de una estructura
              struct Persona {'{'}
                  std::string nombre;
                  int edad;
              {'}'};

              int main() {'{'}
                  // Crear una instancia de la estructura Persona
                  Persona persona1;
                  persona1.nombre = "Ejemplo";
                  persona1.edad = 30;

                  // Acceder a los miembros de la estructura
                  std::cout {"<"}{"<"} "Nombre: " {"<"}{"<"} persona1.nombre {"<"}{"<"} std::endl;
                  std::cout {"<"}{"<"} "Edad: " {"<"}{"<"} persona1.edad {"<"}{"<"} std::endl;

                  return 0;
              {'}'}
            </code>
          </pre>
          <p>
            Las estructuras son útiles para organizar datos relacionados en tus programas de C++.
          </p>
        </Reveal>
      </div>
    </PageTransition>
  );
}

export default AlgoritmosBusqueda;