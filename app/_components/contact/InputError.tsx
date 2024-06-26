interface ErrorProps {
  error: string | undefined;
}

const InputError = ({ error }: ErrorProps) => {
  return (
    <div className="contact__input-error">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        style={{ fill: '#FF0000' }}
      >
        <path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
      </svg>
      <span>{error}</span>
    </div>
  );
};

export default InputError;
