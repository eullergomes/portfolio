import React, { useState } from 'react';
import { Toaster, toast } from 'sonner';
import InputError from './InputError';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (
    fieldName: keyof FormData,
    value: string
  ): string | undefined => {
    if (fieldName === 'name') {
      if (!value) {
        return 'O nome é obrigatório!';
      } else if (value.length < 4) {
        return 'Nome muito curto';
      } else if (value.length > 100) {
        return 'Nome muito longo';
      }
    } else if (fieldName === 'email') {
      if (!value) {
        return 'O e-mail é obrigatório!';
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        return 'Endereço de e-mail inválido!';
      } else if (value.length < 7) {
        return 'Endereço de e-mail muito curto';
      } else if (value.length > 100) {
        return 'Endereço de e-mail muito longo';
      }
    } else if (fieldName === 'message') {
      if (!value) {
        return 'A mensagem é obrigatória!';
      } else if (value.length < 10) {
        return 'Mensagem muito curta';
      } else if (value.length > 500) {
        return 'Mensagem muito longa';
      }
    }
    return undefined;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({
      ...errors,
      [name]: validateField(name as keyof FormData, value)
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const newErrors: FormErrors = {};
    (Object.keys(formData) as Array<keyof FormData>).forEach((fieldName) => {
      const fieldError = validateField(fieldName, formData[fieldName]);
      if (fieldError) {
        newErrors[fieldName] = fieldError;
      }
    });

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        toast.success('Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', message: '' });
      }, 2000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__form-div">
          <div>
            <label className="contact__form-tag">Name</label>
            <input
              type="text"
              name="name"
              className="contact__form-input"
              placeholder="Insera seu nome"
              value={formData.name}
              onChange={handleChange}
              style={{ borderColor: errors.name ? 'red' : '' }}
            />
          </div>
          {errors.name && <InputError error={errors.name} />}
        </div>

        <div className="contact__form-div">
          <label className="contact__form-tag">E-mail</label>
          <input
            type="email"
            name="email"
            className="contact__form-input"
            placeholder="Insira seu e-mail"
            value={formData.email}
            onChange={handleChange}
            style={{ borderColor: errors.email ? 'red' : '' }}
          />
          {errors.email && <InputError error={errors.email} />}
        </div>

        <div className="contact__form-div contact__form-area">
          <label className="contact__form-tag">Project</label>
          <textarea
            name="message"
            cols={30}
            rows={10}
            className="contact__form-input"
            placeholder="Descreva seu pedido de projeto aqui"
            value={formData.message}
            onChange={handleChange}
            style={{ borderColor: errors.message ? 'red' : '' }}
          />
          {errors.message && <InputError error={errors.message} />}
        </div>

        <button
          className="button button--flex"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? <span>Enviando...</span> : 'Enviar mensagem'}
        </button>
      </form>
      <Toaster position="bottom-center" />
    </>
  );
};

export default Form;
