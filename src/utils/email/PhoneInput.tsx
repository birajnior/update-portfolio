import React from 'react';
import { ErrorMessage, Input } from '../../components/ContactSection/ContactSection.style';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ value, onChange, error }) => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const onlyNumbers = e.target.value.replace(/\D/g, '');
    onChange(onlyNumbers);
  }

  function formatPhone(phone: string) {
    if (phone.length === 0) return '';
    if (phone.length <= 2) return `(${phone}`;
    if (phone.length <= 7) return `(${phone.slice(0, 2)}) ${phone.slice(2)}`;
    return `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7, 11)}`;
  }

  return (
    <>
      <Input
        type="tel"
        name="user_phone"
        placeholder="Telefone"
        value={formatPhone(value)}
        onChange={handleChange}
        hasError={!!error}
        required
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

export default PhoneInput;
