function Form({ children, onSubmit, addStyle }) {
  
  const FormStyle = `flex flex-col items-center gap-4 ${addStyle} } `;

  return (
    <form onSubmit={onSubmit} className={FormStyle}>
      {children}
    </form>
  );
}
export default Form;
