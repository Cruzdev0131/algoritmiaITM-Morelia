export interface BlogPost {
  title: string;
  content: string[]; // Lista de puntos
  mediaType?: 'image' | 'video';
  mediaSrc?: string;
}

export interface BlogYear {
  year: string;
  id: string;
  posts: BlogPost[];
}

export const blogData: BlogYear[] = [
  {
    year: "2024",
    id: "agendas-2024",
    posts: [
      {
        title: "Curso: The Last Chance",
        content: [
          "Los integrantes del capítulo Adolfo Cruz, Roberto García y Daniel Merlos impartieron curso de fundamentos de programación 'The Last Chance', enfocado al lenguaje Java, durante el evento Tekhne 2024."
        ],
        mediaType: "video",
        mediaSrc: "/assets/videos/thekne.mp4"
      },
      {
        title: "Participación destacada: Concurso de fundamentos de programación",
        content: [
          "Adolfo Cruz y Daniel Merlos representaron al capítulo en el Concurso de Fundamentos de Programación de 2024.",
          "Daniel Merlos obtuvo un destacado 2.º lugar en la competencia."
        ],
        mediaType: "image",
        mediaSrc: "/assets/images/events/fundamentosdeprogramacion.jpg"
      },
      {
        title: "Participación: IEEEXTREME",
        content: [
          "El equipo Full Snack Developers, conformado por miembros del capítulo, participó en el concurso internacional IEEEXTREME, logrando posicionarse en el 11.º lugar a nivel nacional."
        ]
      }
    ]
  },
  {
    year: "2025",
    id: "agendas-2025",
    posts: [
      {
        title: 'Conferencia especial: "If there is code, there is hope"',
        content: [
          "El día viernes 11 de abril de 2025 se llevó a cabo la conferencia impartida por el ingeniero Miguel Romero, strategic partnership de OmegaUp.",
          "Brindó al capítulo una inspiradora charla acerca de su vida y su recorrido profesional."
        ],
        mediaType: "image",
        mediaSrc: "/assets/images/events/conferenciamiguel.jpg"
      },
      {
        title: "Participación: ICPC región México 2025, primera fecha",
        content: [
          "Divididos en dos equipos, 6 jóvenes miembros del capítulo aceptaron el reto de la International Collegiate Programming Contest (ICPC)."
        ],
        mediaType: "image",
        mediaSrc: "/assets/images/events/icpc1erfecha.jpg"
      },
      {
        title: "Conferencia: Sesión informativa CAPC-ITMorelia y CETis 120",
        content: [
          "El 19 de marzo el TecNM recibió como invitados en sus instalaciones al Ing. Erick Vidar y al capítulo de programación de CETis 120."
        ],
        mediaType: "image",
        mediaSrc: "/assets/images/events/sesioninformativa.jpg"
      },
      {
        title: "Curso: Introducción a C++ y la programación competitiva",
        content: [
          "Del 4 al 6 de junio tuvo lugar el curso intensivo coordinado e impartido por los miembros del capítulo: Daniel Merlos, Adolfo Cruz, Roberto García y Kenneth Gutiérrez."
        ],
        mediaType: "image",
        mediaSrc: "/assets/images/events/curso.jpg"
      },
      {
        title: "Participación: CodingCup Michoacán edición 2025",
        content: [
          "El sábado 7 de junio nuestra institución fue representada por 3 equipos conformados por miembros del capítulo:",
          "1. Full Snack Developers: 7mo lugar.",
          "2. Flippers: 9no lugar.",
          "3. CtrlAltWin: 10mo lugar."
        ],
        mediaType: "image",
        mediaSrc: "/assets/images/events/codingcup.jpg"
      }
    ]
  }
];