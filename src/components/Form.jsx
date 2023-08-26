import { func, node, string } from 'prop-types';

function Form({ children, onSubmit, addStyle }) {
  const FormStyle = `flex flex-col items-center gap-4 ${addStyle} } `;

  return (
    <form onSubmit={onSubmit} className={FormStyle}>
      {children}
    </form>
  );
}

Form.propTypes = {
  children: node,
  onSubmit: func,
  addStyle: string,
};
export default Form;
