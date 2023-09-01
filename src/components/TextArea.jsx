import { func, shape, instanceOf, number, oneOfType, string } from 'prop-types';

function TextArea({ textareaRef, id, placeholder, height = 'h-36' }) {
  const textareaStyle = `${height} w-80 resize-none rounded-lg bg-secondary p-2 text-lg text-white`;

  return (
    <textarea
      ref={textareaRef}
      name={id}
      id={id}
      maxLength="400"
      className={textareaStyle}
      placeholder={placeholder}
    ></textarea>
  );
}

TextArea.propTypes = {
  id: string,
  textareaRef: oneOfType([func, shape({ current: instanceOf(Element) })]),
  height: string,
  placeholder: oneOfType([string, number]),
};
export default TextArea;
