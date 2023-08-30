

function Text({ children, type, className, onClick, ...restProps}) {


  return (
    <button type={type} className={className} onClick={onClick} {...restProps}>
      {children}
    </button>
  );
}

export default Text;
