export const content = {
  meta: {
    title: "Portfolio Cristian Dev",
    copyright: "© 2025 Cristian Dev. Todos los derechos reservados.",
  },
  hero: {
    title: "Desarrollador Backend y QA Engineer",
    subtitle:
      "Especializado en crear APIs robustas, escalables y seguras. Transformo ideas complejas en soluciones backend eficientes.",
    badges: [
      { icon: "MapPin", text: "Santiago, Chile" },
      { icon: "Calendar", text: "5+ años de experiencia en distintos roles" },
      { icon: "Users", text: "Disponible para proyectos" },
    ],
    buttons: [
      { text: "Descargar CV", icon: "Download", variant: "primary", href: "./docs/CV-Cristian_Alvarez.pdf", download: true },
      { text: "Contactar", icon: "Mail", variant: "outline", href: "mailto:cristian.alvarez.pnc@gmail.com" },
    ],
  },
  about: {
    title: "Sobre mí",
    paragraphs: [
      "Soy un desarrollador backend apasionado por crear soluciones tecnológicas que resuelvan problemas reales. Con más de 5 años de experiencia en TI, me especializo en el desarrollo de APIs REST, arquitecturas de microservicios y sistemas distribuidos.",
      "Mi enfoque se centra en escribir código limpio, mantenible y escalable, siempre siguiendo las mejores prácticas de la industria y los principios SOLID.",
    ],
    socialLinks: [
      { name: "GitHub", icon: "Github", href: "https://github.com/Cristian-Alvarez-CL/" },
      { name: "LinkedIn", icon: "Linkedin", href: "https://www.linkedin.com/in/cristian-alvarez-ponce/" },
    ],
    cards: [
      { title: "Performance", description: "Optimización de consultas y rendimiento", icon: "Zap", color: "blue" },
      {
        title: "Seguridad",
        description: "Implementación de medidas de seguridad robustas",
        icon: "Shield",
        color: "green",
      },
      {
        title: "Escalabilidad",
        description: "Arquitecturas que crecen con tu negocio",
        icon: "Server",
        color: "purple",
      },
      { title: "Cloud", description: "Despliegue y gestión en la nube", icon: "Cloud", color: "orange" },
    ],
  },
  skills: {
    title: "Habilidades Técnicas",
    categories: [
      {
        title: "Lenguajes & Frameworks",
        icon: "Code2",
        color: "blue",
        filter: ["Language", "Framework", "Runtime"],
      },
      {
        title: "Bases de Datos & Cache",
        icon: "Database",
        color: "green",
        filter: ["Database", "Cache"],
      },
      {
        title: "DevOps & Arquitectura",
        icon: "Server",
        color: "purple",
        filter: ["DevOps", "Cloud", "API", "Architecture"],
      },
    ],
  },
  projects: {
    title: "Proyectos Destacados",
    buttons: [
      { text: "Código", icon: "Github" },
      { text: "Demo", icon: "ExternalLink" },
    ],
  },
  experience: {
    title: "Experiencia Profesional",
  },
  contact: {
    title: "¿Listo para trabajar juntos?",
    description:
      "Estoy disponible para nuevos proyectos y oportunidades. ¡Hablemos sobre cómo puedo ayudarte a construir tu próxima solución backend!",
    buttons: [
      { text: "Contactar", icon: "Mail", variant: "primary", href: "mailto:cristian.alvarez.pnc@gmail.com" },
      { text: "GitHub", icon: "Github", variant: "outline" , href: "https://github.com/Cristian-Alvarez-CL/"},
      { text: "LinkedIn", icon: "Linkedin", variant: "outline", href: "https://www.linkedin.com/in/cristian-alvarez-ponce/"},
    ],
  },
  navigation: [
    { text: "Sobre mí", href: "#about" },
    { text: "Habilidades", href: "#skills" },
    { text: "Proyectos", href: "#projects" },
    { text: "Experiencia", href: "#experience" },
    { text: "Contacto", href: "#contact" },
  ],
}
