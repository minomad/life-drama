import { node, string, func } from 'prop-types';

function Button({ children, hoverColor, type = 'button', onClick }) {
  const hoverClass = hoverColor || 'hover:bg-hoverColor';

  const buttonStyle = `h-12 rounded-lg bg-secondary p-3 w-auto font-semibold ${hoverClass}`;

  return (
    <button type={type} className={`${buttonStyle}`} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: node,
  hoverColor: string,
  type: string,
  onClick: func,
};
export default Button;
