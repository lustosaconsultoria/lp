"use client"
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Carlos Souza',
    location: 'São Paulo, SP',
    text: 'Em menos de 30 dias, meu nome estava limpo novamente. Pude financiar meu apartamento sem problemas. A Lustosa fez tudo dentro da lei e me explicou cada passo do processo.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    name: 'Márcia Oliveira',
    location: 'Recife, PE',
    text: 'Estava há anos tentando limpar meu nome sozinha sem sucesso. A Lustosa resolveu em poucas semanas o que eu não consegui em anos. Processo sério e transparente.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    name: 'Roberto Almeida',
    location: 'Brasília, DF',
    text: 'Como empresário, precisava regularizar meu CNPJ urgentemente. A Lustosa não só resolveu como me orientou para evitar novos problemas. Serviço excepcional!',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const Testimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const testimonialIndex = Math.abs(page % testimonials.length);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      paginate(1);
    }

    if (touchStart - touchEnd < -150) {
      paginate(-1);
    }
  };

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      paginate(1);
    }, 6000);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [page]);

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C3D5A] dark:text-white mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Centenas de clientes recuperaram seu crédito e sua tranquilidade financeira
            com nossa assessoria jurídica especializada.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div 
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="w-full px-4"
              >
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <img
                          src={testimonials[testimonialIndex].image}
                          alt={testimonials[testimonialIndex].name}
                          className="w-20 h-20 object-cover rounded-full border-2 border-emerald-500"
                        />
                        <div className="absolute -top-2 -left-2 bg-emerald-500 rounded-full p-1">
                          <Quote className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-slate-600 dark:text-slate-300 text-lg italic mb-4">
                        "{testimonials[testimonialIndex].text}"
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-[#1C3D5A] dark:text-white">
                          {testimonials[testimonialIndex].name}
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {testimonials[testimonialIndex].location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <Button
            size="icon"
            variant="outline"
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-5 bg-white dark:bg-slate-700 h-10 w-10 rounded-full shadow-md"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            size="icon"
            variant="outline"
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-5 bg-white dark:bg-slate-700 h-10 w-10 rounded-full shadow-md"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div className="mt-6 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setPage([index, index > testimonialIndex ? 1 : -1])}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                  index === testimonialIndex
                    ? 'bg-emerald-500'
                    : 'bg-slate-300 dark:bg-slate-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;