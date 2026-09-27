/**
 * WhatsApp Helper Utilities for The Rich Skills
 * Official Number: 8653979065 (+91 8653979065)
 */

export const WHATSAPP_NUMBER = '8653979065';
export const WHATSAPP_COUNTRY_CODE = '91';
export const WHATSAPP_DISPLAY = '+91 8653979065';

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg = 'Hello The Rich Skills, I want to get started and know more details.';
  const message = customMessage || defaultMsg;
  const fullPhone = `${WHATSAPP_COUNTRY_CODE}${WHATSAPP_NUMBER.replace(/\D/g, '')}`;
  return `https://wa.me/${fullPhone}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(customMessage?: string): void {
  const url = getWhatsAppUrl(customMessage);
  window.open(url, '_blank', 'noopener,noreferrer');
}
