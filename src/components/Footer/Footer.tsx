import { FooterWrapper, FooterContent, Copyright } from './Footer.style';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <p>Desenvolvido por Ubiratan Bernardo</p>
        <Copyright>
          &copy; {new Date().getFullYear()} jbdeveloper.com.br. Todos os direitos reservados.
        </Copyright>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
