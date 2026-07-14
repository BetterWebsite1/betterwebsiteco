export const WHATSAPP_NUMBER = '2347049891302'
export const CONTACT_EMAIL = 'shadowgrowthcoofficial@gmail.com'
export const TIKTOK_URL = 'https://www.tiktok.com/@highfunctioningzone'

export function buildWhatsAppLink(tierName) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  const text = tierName
    ? `Hi! I'm interested in the ${tierName} plan from Better Website Co.`
    : `Hi! I'd like to talk to Better Website Co. about a new website.`
  return `${base}?text=${encodeURIComponent(text)}`
}
