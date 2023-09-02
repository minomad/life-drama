import { node, string, func } from 'prop-types';

function Button({ children, className, type = 'button', onClick }) {


  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: node,
  className: string,
  type: string,
  onClick: func,
};
export default Button;
