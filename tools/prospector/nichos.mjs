// =============================================================
// NICHOS de la agencia — queries optimizadas para Google Places
// =============================================================
// Cada nicho tiene varias queries porque un mismo negocio se busca
// de varias formas. El prospector lanza todas y deduplica resultados.
//
// "dolor_ia" = el dolor concreto que la IA resuelve en ese nicho.
//              Úsalo en el primer email/llamada de prospección.

export const NICHOS = {
  abogados: {
    label: "Abogados / Despachos jurídicos",
    queries: [
      "abogados",
      "despacho de abogados",
      "asesoría jurídica",
      "procurador"
    ],
    dolor_ia: "Horas perdidas redactando documentos repetitivos, respondiendo consultas básicas por teléfono/email, y clasificando casos. Un asistente IA atiende consultas 24/7 y redacta borradores en minutos.",
    ticket: "alto"
  },
  clinicas: {
    label: "Clínicas / Centros médicos",
    queries: [
      "clínica dental",
      "clínica estética",
      "centro médico",
      "fisioterapia",
      "clínica veterinaria"
    ],
    dolor_ia: "Recepción saturada gestionando citas, recordatorios y preguntas frecuentes. Un bot de IA gestiona reservas, reduce no-shows con recordatorios automáticos y responde dudas comunes.",
    ticket: "alto"
  },
  tiendas: {
    label: "Tiendas físicas ($$)",
    queries: [
      "tienda de ropa",
      "joyería",
      "óptica",
      "tienda de muebles",
      "ferretería"
    ],
    dolor_ia: "Atención al cliente manual, sin presencia digital que convierta. IA para responder WhatsApp, gestionar stock-consultas y recuperar clientes con campañas automáticas.",
    ticket: "medio-alto"
  },
  vehiculos: {
    label: "Venta de vehículos / Concesionarios",
    queries: [
      "concesionario de coches",
      "venta de coches de segunda mano",
      "compra venta vehículos",
      "taller mecánico"
    ],
    dolor_ia: "Leads que se enfrían porque no se contesta rápido. IA que califica leads al instante, agenda pruebas de conducción y hace seguimiento automático del comprador.",
    ticket: "alto"
  },
  restaurantes: {
    label: "Restaurantes / Hostelería",
    queries: [
      "restaurante",
      "bar de tapas",
      "cafetería",
      "pizzería"
    ],
    dolor_ia: "WhatsApp y redes saturados con reservas y preguntas repetidas. Bot IA que gestiona reservas, responde el 70% de mensajes y captura clientes para campañas.",
    ticket: "medio"
  }
};

// Permite pasar un nicho libre desde CLI (no predefinido).
export function resolverNicho(nombre) {
  const key = nombre.toLowerCase().trim();
  if (NICHOS[key]) return { key, ...NICHOS[key] };
  // Nicho libre: usa el texto tal cual como única query.
  return {
    key,
    label: nombre,
    queries: [nombre],
    dolor_ia: "(nicho personalizado — define el dolor IA antes de contactar)",
    ticket: "?"
  };
}
