"use client"
import { motion } from 'framer-motion';
import { ClipboardCheck, FileSearch, Square as GavelSquare, CalendarCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  {
    id: "Fase 1",
    title: 'Envie suas informações',
    description: 'Preencha um formulário rápido com seus dados para análise inicial.',
    icon: ClipboardCheck,
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
  },
  {
    id: "Fase 2",
    title: 'Receba a análise personalizada',
    description: 'Nossa equipe jurídica avalia seu caso e desenvolve uma estratégia específica.',
    icon: FileSearch,
    color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
  },
  {
    id: "Fase 3",
    title: 'Ativação do processo judicial',
    description: 'Iniciamos as medidas legais para limpar seu nome com base na legislação vigente.',
    icon: GavelSquare,
    color: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
  },
  {
    id: "Fase 4",
    title: 'Nome limpo em até 30 dias',
    description: 'Acompanhe o progresso e veja seu nome livre de restrições em tempo recorde.',
    icon: CalendarCheck,
    color: 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const StepSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C3D5A] dark:text-white mb-4">
            Descomplicado. Seguro. Amparado pela lei.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Nosso processo é simples e transparente, seguindo todas as diretrizes legais para garantir
            a restauração da sua credibilidade financeira.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={item}
              className="relative"
            >
              <div className="flex flex-col items-center text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mb-4", step.color)}>
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#1C3D5A] dark:text-white">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {step.description}
                </p>
                <div className="absolute top-0 right-0 -mt-3 -mr-3">
                  <div className="bg-[#1C3D5A] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                    {step.id}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StepSection;