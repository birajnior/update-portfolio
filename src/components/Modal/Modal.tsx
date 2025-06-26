import { Body, CloseButton, Content, Footer, Header, Overlay, Title } from './Modal.styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  type?: 'success' | 'error';
}

const Modal = ({ isOpen, onClose, title, children, type = 'success' }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <Overlay role="dialog" aria-modal="true">
      <Content type={type}>
        <Header>
          <Title>{title}</Title>
          <CloseButton onClick={onClose} aria-label="Fechar modal">
            ×
          </CloseButton>
        </Header>
        <Body>{children}</Body>
        <Footer>
          <button
            className={`px-4 py-2 rounded font-semibold ${
              type === 'success' ? 'bg-primary' : 'bg-red-600'
            } text-white`}
            onClick={onClose}
          >
            Fechar
          </button>
        </Footer>
      </Content>
    </Overlay>
  );
};

export default Modal;
