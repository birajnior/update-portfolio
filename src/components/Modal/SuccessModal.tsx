// SuccessModal.tsx
import Modal from './Modal';

const SuccessModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    title="✅ Formulário enviado com sucesso!"
    type="success"
  >
    <p>Obrigado por entrar em contato! Em breve retornaremos para conversar sobre o seu projeto.</p>
  </Modal>
);

export default SuccessModal;
