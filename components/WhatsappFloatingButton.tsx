"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";

const WhatsappFloatingButton = () => {
  const whatsappLink =
    "https://wa.me/558185034115?text=Olá,%20gostaria%20de%20limpar%20meu%20nome%20com%20ajuda%20da%20Lustosa%20Consultoria.";

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            className="fixed bottom-6 right-6 z-50 hidden sm:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 1.5,
            }}
          >
            {/* Pulse Effect */}
            <motion.div
              className="absolute -inset-4 rounded-full bg-green-500 opacity-30"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />

            <Button
              className="relative rounded-full p-6 bg-green-500 hover:bg-green-600 text-white shadow-2xl"
              asChild
              size="icon"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fale conosco pelo WhatsApp"
              >
                <Image
                  src="/whatsapp-logo.svg"
                  alt="WhatsApp"
                  width={40}
                  height={40}
                  priority
                />
              </a>
            </Button>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Fale conosco pelo WhatsApp</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default WhatsappFloatingButton;
