interface ErrorProps {
  error: string | undefined;
}

const InputError = ({ error }: ErrorProps) => {
  return (
    <div className="contact__input-error">
      <i className="bx bxs-error-circle"></i>
      <span>{error}</span>
    </div>
  );
};

export default InputError;
