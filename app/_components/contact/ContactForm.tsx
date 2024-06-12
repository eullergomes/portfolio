'use client';

import React, { useState } from 'react';
import { Toaster, toast } from 'sonner';
import InputError from './InputError';
import emailjs from '@emailjs/browser';
import {
  ContactFormProps,
  FormData,
  FormErrors,
  TemplateParams
} from '@/app/_types/FormInput';

const Form: React.FC<ContactFormProps> = ({
  required_name,
  short_name,
  long_name,
  required_email,
  invalid_email,
  short_email,
  long_email,
  required_message,
  short_message,
  long_message,
  success_message,
  input_name,
  placeholder_name,
  placeholder_email,
  description_message,
  submit_button,
  loader_button,
  environment_variable_error,
  error_email,
  error_emailjs
}) => {
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
        return required_name;
      } else if (value.length < 4) {
        return short_name;
      } else if (value.length > 100) {
        return long_name;
      }
    } else if (fieldName === 'email') {
      if (!value) {
        return required_email;
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        return invalid_email;
      } else if (value.length < 7) {
        return short_email;
      } else if (value.length > 100) {
        return long_email;
      }
    } else if (fieldName === 'message') {
      if (!value) {
        return required_message;
      } else if (value.length < 10) {
        return short_message;
      } else if (value.length > 700) {
        return long_message;
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

  const sendEmail = async (templateParams: TemplateParams) => {
    try {
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceID || !templateID || !publicKey) {
        throw new Error(environment_variable_error);
      }

      const response = await emailjs.send(
        serviceID as string,
        templateID as string,
        templateParams,
        publicKey
      );

      return response;
    } catch (error) {
      throw new Error(`${error_email}: ${error}`);
    }
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

      const templateParams = {
        from_name: formData.name,
        email: formData.email,
        message: formData.message
      };

      try {
        const response = await sendEmail(templateParams);

        if (response.status === 200) {
          toast.success(success_message);
          setFormData({ name: '', email: '', message: '' });
        } else {
          toast.error(`${error_email}: ${error_emailjs}`);
        }
      } catch (error) {
        console.error(error);
        toast.error(error as string);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__form-div">
          <div>
            <label className="contact__form-tag">{input_name}</label>
            <input
              type="text"
              name="name"
              className="contact__form-input"
              placeholder={placeholder_name}
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
            placeholder={placeholder_email}
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
            placeholder={description_message}
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
          {isSubmitting ? <span>{loader_button}</span> : submit_button}
        </button>
      </form>
      <Toaster position="bottom-center" />
    </>
  );
};

export default Form;
