import { FC } from "react";
import { MagicCard } from "./magicui/magic-card";

export const ProblemPromise: FC = () => (
  <section className="my-12 flex flex-col items-center gap-6">
    <MagicCard className="max-w-xl w-full p-6">
      <h3 className="text-2xl font-semibold mb-2">O Problema</h3>
      <p className="mb-4">Dívidas, nome sujo, constrangimento, sem crédito.</p>
      <h3 className="text-2xl font-semibold mb-2">Nossa Promessa</h3>
      <p className="mb-4">
        Retome sua dignidade financeira sem constrangimentos e com amparo jurídico.
      </p>
      <p className="text-green-600 font-medium">
        +1200 clientes limparam seus nomes com segurança jurídica.
      </p>
    </MagicCard>
  </section>
);