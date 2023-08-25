
function Input({ label, type, id, inputRef, placeholder }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input
        ref={inputRef}
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        className="my-1 h-12 w-80 rounded-md border border-borderColor bg-secondary p-4"
      />
    </div>
  );
}
export default Input;
