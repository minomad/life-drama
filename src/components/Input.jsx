import { any, number, oneOfType, string } from 'prop-types';

function Input({ label, type, id, inputRef, placeholder }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className='sr-only'>{label}</label>
      <input
        ref={inputRef}
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        className="my-1 h-12 w-80 rounded-md border border-borderColor bg-secondary p-4 text-lg text-white"
      />
    </div>
  );
}

Input.propTypes = {
  label: string,
  type: string,
  id: string,
  inputRef: any,
  placeholder: oneOfType([string, number]),
};
export default Input;
