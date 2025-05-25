"use client";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const whatsappLink =
    "https://wa.me/558130350319?text=Olá,%20gostaria%20de%20limpar%20meu%20nome%20com%20ajuda%20da%20Lustosa%20Consultoria.";

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container px-4 py-16 md:py-24 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge 
              variant="outline"
              className="bg-white/90 text-[#1C3D5A] border-[#1C3D5A]/20 px-4 py-1.5 text-sm font-medium"
            >
              Consultoria Jurídica Especializada
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#1C3D5A] dark:text-white">
              Recupere seu nome.<br />
              <span className="text-emerald-600 dark:text-emerald-500">Restaure sua credibilidade.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-lg">
              Assessoria jurídica em proteção de crédito com respaldo legal. 
              Sem constrangimentos, sem burocracia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium w-full sm:w-auto"
                  >
                    LIMPAR MEU NOME AGORA
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-2 pl-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
                <span className="text-sm text-slate-600 dark:text-slate-400">Amparado pelo CDC</span>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg" 
                alt="Profissional jurídico analisando documentos" 
                className="w-full h-auto object-cover rounded-lg"
                width={500}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C3D5A]/60 to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4">
                <Badge className="bg-white text-[#1C3D5A] hover:bg-white/90">
                  Respaldo jurídico completo
                </Badge>
                <p className="text-white text-sm mt-2">
                  Processos 100% legais baseados no Código de Defesa do Consumidor
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
