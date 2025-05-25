import { FC } from "react";
import { PulsatingButton } from "./magicui/pulsating-button";
import { FaWhatsapp } from "react-icons/fa";

export const CTA: FC = () => (
  <section className="my-12 flex flex-col items-center">
    <h3 className="text-2xl font-bold mb-4 text-center">
      🎯 Quer limpar seu nome hoje mesmo? Fale com um especialista via WhatsApp agora:
    </h3>
    <PulsatingButton
      rel="noopener noreferrer"
      className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-xl rounded shadow-lg flex items-center gap-2"
    >
      <FaWhatsapp size={24} />
      Quero Limpar Meu Nome Agora - Ir para o WhatsApp
    </PulsatingButton>
  </section>
);