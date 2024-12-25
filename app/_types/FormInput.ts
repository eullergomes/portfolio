export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export interface TemplateParams {
  from_name: string;
  email: string;
  message: string;
  [key: string]: unknown; // Allows for any additional fields
}

export interface ContactFormProps {
  required_name: string;
  short_name: string;
  long_name: string;
  required_email: string;
  invalid_email: string;
  short_email: string;
  long_email: string;
  required_message: string;
  short_message: string;
  long_message: string;
  success_message: string;
  input_name: string;
  placeholder_name: string;
  placeholder_email: string;
  placeholder_project: string;
  description_message: string;
  submit_button: string;
  loader_button: string;
  environment_variable_error: string;
  error_email: string;
  error_emailjs: string;
}
