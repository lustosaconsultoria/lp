"use client"
import { motion } from 'framer-motion';
import { Gavel, FileText, ShieldAlert } from 'lucide-react';

interface LegalItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

const LegalItem = ({ icon: Icon, title, description, delay }: LegalItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex gap-4"
    >
      <div className="flex-shrink-0 mt-1">
        <div className="w-10 h-10 rounded-full bg-[#1C3D5A]/10 dark:bg-[#1C3D5A]/30 flex items-center justify-center">
          <Icon className="w-5 h-5 text-[#1C3D5A] dark:text-blue-400" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1 text-[#1C3D5A] dark:text-white">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400">{description}</p>
      </div>
    </motion.div>
  );
};

const LegalSupport = () => {
  const legalItems = [
    {
      icon: Gavel,
      title: "Constituição Federal – Art. 5º",
      description: "Garantimos seu direito à privacidade, proteção da imagem e dignidade.",
      delay: 0.1,
    },
    {
      icon: FileText,
      title: "CDC – Art. 42",
      description: "Proteção contra cobranças abusivas e exposição ao ridículo em situações de dívida.",
      delay: 0.2,
    },
    {
      icon: ShieldAlert,
      title: "Lei Complementar 105/2001 – Art. 1º",
      description: "Resguardamos o sigilo das operações financeiras e protegemos seus dados pessoais.",
      delay: 0.3,
    },
  ];

  return (
    <section id='legal' className="py-20 bg-white dark:bg-slate-900">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              {legalItems.map((item, index) => (
                <LegalItem key={index} {...item} />
              ))}
            </div>
          </div>
          
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C3D5A] dark:text-white mb-4">
              Seu direito está <span className="text-emerald-600 dark:text-emerald-500">na lei</span>
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              Atuamos com respaldo legal, garantindo seus direitos de imagem, privacidade e proteção contra cobrança abusiva.
            </p>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <blockquote className="italic text-slate-600 dark:text-slate-300 border-l-4 border-emerald-500 pl-4">
                "É assegurado a todos o acesso à informação e resguardado o sigilo da fonte, quando necessário ao exercício profissional."
                <footer className="mt-2 text-sm font-semibold text-[#1C3D5A] dark:text-white">
                  — Constituição Federal, Art. 5º, inciso XIV
                </footer>
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LegalSupport;