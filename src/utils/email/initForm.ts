import {
  validarNome,
  validarEmail,
  validarTelefone,
  validarMensagem,
  formatarTelefone,
} from './formValidation';

export function inicializarValidacoes(): void {
  const nome = document.querySelector('input[name="user_name"]') as HTMLInputElement | null;
  const email = document.querySelector('input[name="user_email"]') as HTMLInputElement | null;
  const telefone = document.querySelector('input[name="user_phone"]') as HTMLInputElement | null;
  const mensagem = document.querySelector(
    'textarea[name="project_description"]'
  ) as HTMLTextAreaElement | null;

  if (nome) {
    nome.addEventListener('blur', () => {
      const erro = validarNome(nome.value);
      if (erro) {
        nome.classList.add('border-red-500');
        // Você pode mostrar o erro visualmente com span, toast, etc.
      } else {
        nome.classList.remove('border-red-500');
      }
    });
  }

  if (email) {
    email.addEventListener('blur', () => {
      const erro = validarEmail(email.value);
      if (erro) {
        email.classList.add('border-red-500');
      } else {
        email.classList.remove('border-red-500');
      }
    });
  }

  if (telefone) {
    telefone.addEventListener('blur', () => {
      const erro = validarTelefone(telefone.value);
      if (erro) {
        telefone.classList.add('border-red-500');
      } else {
        telefone.classList.remove('border-red-500');
      }
    });

    formatarTelefone(telefone);
  }

  if (mensagem) {
    mensagem.addEventListener('blur', () => {
      const erro = validarMensagem(mensagem.value);
      if (erro) {
        mensagem.classList.add('border-red-500');
      } else {
        mensagem.classList.remove('border-red-500');
      }
    });
  }
}
