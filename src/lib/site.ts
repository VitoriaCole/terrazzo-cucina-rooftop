// Official contact data for Terrazzo Cucina. Change values here only.
export const WHATSAPP_NUMBER = "5514991810154";
export const WHATSAPP_DISPLAY = "+55 14 99181-0154";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const INSTAGRAM_HANDLE = "@terrazzocucina";
export const INSTAGRAM_URL = "https://www.instagram.com/terrazzocucina/";

export const ADDRESS = {
  venue: "Hotel Tulip Inn",
  street: "Rua Engenheiro Alpheu José Ribas Sampaio, 1-23",
  district: "Jardim Infante Dom Henrique",
  city: "Bauru",
  state: "SP",
  country: "BR",
} as const;

const mapsQuery = `Tulip Inn Bauru, ${ADDRESS.street}, ${ADDRESS.district}, ${ADDRESS.city} - ${ADDRESS.state}`;

export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed`;
export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapsQuery)}`;

export const WHATSAPP_MESSAGES = {
  reserva: "Olá! Gostaria de reservar uma mesa no Terrazzo Cucina.",
  momento: "Olá! Gostaria de planejar um momento especial no Terrazzo Cucina.",
  cardapio: "Olá! Gostaria de conhecer o cardápio do Terrazzo Cucina.",
  horarios: "Olá! Quais são os horários de funcionamento do Terrazzo Cucina?",
} as const;

export function whatsappLink(message?: string) {
  return message ? `${WHATSAPP_URL}?text=${encodeURIComponent(message)}` : WHATSAPP_URL;
}
