import { FC } from "react";
import { MagicCard } from "./magicui/magic-card";

export const Authority: FC = () => (
  <section className="my-12 flex flex-col items-center">
    <MagicCard className="max-w-xl w-full p-6">
      <h3 className="text-2xl font-semibold mb-2">Quem somos</h3>
      <p className="mb-2">
        Somos especialistas em reabilitação de crédito, atuando com respaldo jurídico e transparência.
      </p>
      <p className="mb-2">
        <strong>Base legal:</strong> Art. 43, §2º do CDC, Art. 71 do CDC, Art. 42 do CDC.
      </p>
      {/* Se houver vídeo, insira aqui */}
      {/* <video src="/video-ceo.mp4" controls className="w-full rounded mt-4" /> */}
    </MagicCard>
  </section>
);