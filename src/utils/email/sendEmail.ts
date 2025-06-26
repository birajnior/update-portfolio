import emailjs from '@emailjs/browser';

export async function enviarFormulario(
  form: HTMLFormElement,
  onSuccess: () => void,
  onError: () => void,
  updateButton: (loading: boolean) => void
) {
  updateButton(true); // botão: "Enviando..."

  try {
    await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    form.reset();
    onSuccess(); // Abre modal de sucesso
  } catch (error) {
    console.error('Erro ao enviar formulário:', error);
    onError(); // Abre modal de erro
  } finally {
    updateButton(false); // botão: "Enviar"
  }
}
