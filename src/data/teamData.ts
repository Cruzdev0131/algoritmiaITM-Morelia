// src/data/teamData.ts

export interface TeamMember {
  role: string;
  name: string;
  image: string;
  degree?: string; // Opcional
}

export const teamMembers: TeamMember[] = [
  {
    role: "Presidente",
    name: "Adolfo Emiliano Cruz", // Pon el nombre real
    image: "/assets/images/team/lead2.jpg",
    degree: "Ing. en Sistemas Computacionales"
  },
  {
    role: "Secretario General",
    name: "Nombre del Secretario",
    image: "/assets/images/team/vicelead.jpeg",
    degree: "Ing. en Sistemas Computacionales"
  },
  {
    role: "Equipo de Formación",
    name: "Nombre del Coordinador",
    image: "/assets/images/team/coordinadordecomunicacion.jpg",
    degree: "Ing. en Sistemas Computacionales"
  },
  {
    role: "Responsable Académico",
    name: "Nombre del Responsable",
    image: "/assets/images/team/responsableacademico.jpg",
    degree: "Ing. en Sistemas Computacionales"
  }
];