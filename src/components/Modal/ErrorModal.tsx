// ErrorModal.tsx
import Modal from './Modal';

export const ErrorModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <Modal isOpen={isOpen} onClose={onClose} title="❌ Ocorreu um erro!" type="error">
    <p>Houve um problema ao enviar o formulário. Tente novamente mais tarde.</p>
  </Modal>
);

export default ErrorModal;
