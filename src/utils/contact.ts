import { PhoneNumber, WhatsappLink } from "../constants";

export const getWhatsappContactLinkWithMessage = (message: string) => {
  return `${WhatsappLink}/${PhoneNumber}?text=${encodeURIComponent(message)}`;
};
