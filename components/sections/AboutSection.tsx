"use client"
import { motion } from 'framer-motion';
import { MapPin, UserCheck, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  delay: number;
}

const FeatureCard = ({ icon: Icon, title, description, color, delay }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className={cn(
        "p-6 rounded-xl shadow-md bg-white dark:bg-slate-800",
        "border-l-4 border-l-[#1C3D5A] dark:border-l-blue-600"
      )}
    >
      <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-4", color)}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-[#1C3D5A] dark:text-white">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300">{description}</p>
    </motion.div>
  );
};

const AboutSection = () => {
  const features = [
    {
      icon: MapPin,
      title: "Atendimento Nacional",
      description: "Atendemos clientes em todo o Brasil com o mesmo padrão de excelência e eficiência.",
      color: "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
      delay: 0.1,
    },
    {
      icon: UserCheck,
      title: "Consultoria Personalizada",
      description: "Cada caso é único e recebe um tratamento individualizado com estratégias específicas.",
      color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300",
      delay: 0.2,
    },
    {
      icon: Shield,
      title: "Mais de 500 clientes satisfeitos",
      description: "Histórico comprovado de sucesso em casos de regularização de CPF e CNPJ.",
      color: "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300",
      delay: 0.3,
    },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C3D5A] dark:text-white mb-4">
              Experiência que traz tranquilidade financeira
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              Com sede no Recife e atuação em todo o Brasil, a Lustosa Consultoria é especialista na regularização jurídica de CPF e CNPJ. Nosso compromisso é devolver sua tranquilidade financeira com embasamento legal, atendimento ético e processos transparentes.
            </p>
            
            <div className="flex items-center space-x-4 text-slate-700 dark:text-slate-300 mb-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <p>Resultados ágeis e eficazes</p>
            </div>
            
            <div className="flex items-center space-x-4 text-slate-700 dark:text-slate-300 mb-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <p>Equipe jurídica especializada</p>
            </div>
            
            <div className="flex items-center space-x-4 text-slate-700 dark:text-slate-300">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <p>Processos 100% amparados pela legislação</p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;