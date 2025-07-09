import { MessageCircle, Mail, MapPin, Building } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C3D5A] text-white pt-16 pb-8">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Lustosa Consultoria</h3>
            <p className="text-slate-300 mb-6">
              Especialistas em regularização jurídica de CPF e CNPJ com respaldo legal e processos transparentes.
            </p>
            <div className="flex items-center space-x-2 text-slate-300">
              <Building className="h-4 w-4" />
              <span>CNPJ: 55.336.752/0001-10</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/558185034115?text=Olá,%20gostaria%20de%20limpar%20meu%20nome%20com%20ajuda%20da%20Lustosa%20Consultoria."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp: 81 3035-0319</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:lustosa.acessoria@gmail.com"
                  className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>lustosa.acessoria@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center space-x-2 text-slate-300">
                <MapPin className="h-4 w-4" />
                <span>Av. Dantas Barreto, 512 - São José</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <a href="#faq" className="text-slate-300 hover:text-white transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Horário de Atendimento</h3>
            <p className="text-slate-300 mb-2">Segunda a Sexta: 10h às 16h</p>

            <div className={cn(
              "mt-6 p-4 rounded-lg",
              "bg-white/10 backdrop-blur-sm"
            )}>
              <p className="text-sm font-medium">
                Nossa missão é restaurar sua credibilidade financeira com segurança jurídica.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-slate-300 text-sm">
          <p>
            &copy; {currentYear} Lustosa Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;