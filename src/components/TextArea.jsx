
function TextArea({ textareaRef, id, placeholder }) {
  return (
    <textarea
      ref={textareaRef}
      name={id}
      id={id}
      maxLength="400"
      className="h-36 w-80 resize-none rounded-lg bg-secondary p-2 text-lg text-white"
      placeholder={placeholder}
    ></textarea>
  );
}
export default TextArea;
