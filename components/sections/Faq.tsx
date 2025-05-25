"use client"
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'O serviço é legal mesmo sem pagar as dívidas?',
    answer:
      'Sim, nosso serviço é 100% legal. Trabalhamos com base nas leis de defesa do consumidor, que garantem direitos contra práticas abusivas, erros cadastrais e violações de privacidade.',
  },
  {
    question: 'Como funciona a exclusão do nome?',
    answer:
      'Analisamos seu caso individualmente e utilizamos instrumentos jurídicos para remover restrições indevidas com base na legislação brasileira.',
  },
  {
    question: 'Em quanto tempo terei resultado?',
    answer:
      'Em geral, entre 15 a 30 dias, dependendo da complexidade do seu caso. Enviamos atualizações frequentes durante o processo.',
  },
  {
    question: 'Como sei que é confiável?',
    answer:
      'A Lustosa Consultoria tem CNPJ ativo, mais de 5 anos de experiência e centenas de clientes satisfeitos com casos documentados.',
  },
  {
    question: 'Qual a diferença entre o serviço de vocês e tentar negociar diretamente?',
    answer:
      'Identificamos irregularidades legais que podem limpar seu nome mesmo sem quitar imediatamente, algo que não ocorre na negociação comum.',
  },
  {
    question: 'Vocês atendem em todo o Brasil?',
    answer:
      'Sim! Nosso atendimento é 100% remoto e abrange todo o território nacional.',
  },
];

const Faq = () => {
  return (
    <section id='faq' className="py-20 bg-[#f9fafb]">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-4xl font-bold text-[#1C3D5A] mb-4">Perguntas Frequentes</h2>
          <p className="text-lg text-slate-600">
            Esclareça suas dúvidas sobre o processo jurídico de regularização de CPF e CNPJ.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          <Accordion type="multiple" className="w-full rounded-xl shadow-sm bg-white border border-slate-200">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200">
                <AccordionTrigger className="text-left text-gray-900 font-semibold text-base px-4 py-3 transition-all">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-black px-4 pb-4 text-sm">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
