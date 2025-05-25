import { FC } from "react";
import { MagicCard } from "./magicui/magic-card";

export const HowItWorks: FC = () => (
  <section className="my-12 flex flex-col items-center">
    <MagicCard className="max-w-xl w-full p-6">
      <h3 className="text-2xl font-semibold mb-4">Como Funciona</h3>
      <ol className="list-decimal ml-6 space-y-2">
        <li>Informe seu endividamento ou solicite uma consulta personalizada.</li>
        <li>Receba as orientações e proposta no WhatsApp.</li>
        <li>Efetue o pagamento.</li>
        <li>Aguarde a ordem judicial e veja seu nome limpo em até 30 dias.</li>
      </ol>
    </MagicCard>
  </section>
);