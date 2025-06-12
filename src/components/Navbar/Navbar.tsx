import { Container } from "../Layout/Container";
import { Menu } from "./Navbar.styles";

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-md">
      <Container className="flex justify-between items-centernp">
        <h1 className="text-xl font-bold">
          jb<span className="text-blue-500">developer</span>
        </h1>
        <Menu>
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Serviços</a>
          </li>
          <li>
            <a href="#">Projetos</a>
          </li>
          <li>
            <a href="#">Depoimentos</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </Menu>
      </Container>
    </header>
  );
};
