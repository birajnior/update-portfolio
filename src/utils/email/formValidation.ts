// Aplica borda vermelha e exibe mensagem de erro abaixo do campo
export function setError(
  input: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  mensagem: string
): void {
  input.classList.add('border-red-500');
  input.classList.remove('border-green-500');

  let errorSpan = input.parentElement?.querySelector('span.validation-error');

  if (!errorSpan) {
    errorSpan = document.createElement('span');
    errorSpan.className = 'validation-error text-red-500 text-sm mt-1 block';
    input.parentElement?.appendChild(errorSpan);
  }

  errorSpan.textContent = mensagem;
}

export function removerError(
  input: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
): void {
  input.classList.remove('border-red-500');
  input.classList.add('border-green-500');

  const errorSpan = input.parentElement?.querySelector('span.validation-error');
  if (errorSpan) errorSpan.remove();
}

// Validações com valor + input opcional
export function validarNome(valor: string, input?: HTMLInputElement): boolean {
  if (valor.trim().length < 3) {
    if (input) setError(input, 'O nome precisa ter pelo menos 3 caracteres.');
    return false;
  }
  if (input) removerError(input);
  return true;
}

export function validarEmail(valor: string, input?: HTMLInputElement): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(valor.trim())) {
    if (input) setError(input, 'Insira um email válido.');
    return false;
  }
  if (input) removerError(input);
  return true;
}

export function validarTelefone(valor: string, input?: HTMLInputElement): boolean {
  const digits = valor.replace(/\D/g, '');
  if (!/^\d{10,11}$/.test(digits)) {
    if (input) setError(input, 'Telefone deve ter entre 10 e 11 dígitos numéricos.');
    return false;
  }
  if (input) removerError(input);
  return true;
}

export function validarMensagem(valor: string, input?: HTMLTextAreaElement): boolean {
  if (valor.trim().length < 10) {
    if (input) setError(input, 'A mensagem precisa ter pelo menos 10 caracteres.');
    return false;
  }
  if (input) removerError(input);
  return true;
}

export function validarSelect(valor: string, select?: HTMLSelectElement): boolean {
  if (!valor) {
    if (select) setError(select, 'Por favor, selecione uma preferência de contato.');
    return false;
  }
  if (select) removerError(select);
  return true;
}

// Formata o número e bloqueia letras
export function formatarTelefone(telefone: HTMLInputElement): void {
  telefone.addEventListener('keydown', (e) => {
    const isCtrlOrCmd = e.ctrlKey || e.metaKey;
    const allowedKeys = ['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight'];

    if (!/^\d$/.test(e.key) && !allowedKeys.includes(e.key) && !isCtrlOrCmd) {
      e.preventDefault();
    }
  });

  telefone.addEventListener('paste', (e) => {
    const pasted = e.clipboardData?.getData('text') || '';
    if (/\D/.test(pasted)) {
      e.preventDefault();
    }
  });

  telefone.addEventListener('input', () => {
    const valor = telefone.value.replace(/\D/g, '').substring(0, 11);
    let formatado = '';

    if (valor.length > 0) formatado += `(${valor.slice(0, 2)}`;
    if (valor.length >= 2) formatado += `) ${valor.slice(2, 7)}`;
    if (valor.length >= 7) formatado += `-${valor.slice(7, 11)}`;

    telefone.value = formatado;
  });
}
