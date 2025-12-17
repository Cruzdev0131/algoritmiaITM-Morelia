import  { type ComponentType } from 'react';
import AlgoritmosBusqueda from './AlgoritmosBusqueda';
import CadenasArreglos from './CadenasArreglos';
import Ciclos from './Ciclos';
import Conceptos from './Conceptos';
import Condicionales from './Condicionales';
import DSU from './DSU';
import EntradaSalida from './EntradaSalida';
import Estructuras from './Estructuras';
import Grafos from './Grafos';
import Matrices from './Matrices';
import Vectores from './Vectores';

const topics: Record<string, ComponentType> = {
  // ⬅️ ¡SLUGS ACTUALIZADOS!
  'conceptos': Conceptos,
  'entrada-salida': EntradaSalida,
  'ciclos': Ciclos,
  'condicionales': Condicionales,
  'cadenas-arreglos': CadenasArreglos,
  'vectores': Vectores,
  'matrices': Matrices,
  'algoritmos-busqueda': AlgoritmosBusqueda,
  'estructuras': Estructuras,
  'grafos': Grafos,
  'dsu': DSU,
};

export default topics;