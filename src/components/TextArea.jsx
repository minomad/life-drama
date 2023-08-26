
function TextArea({ textareaRef, id, placeholder }) {
  return (
    <textarea
      ref={textareaRef}
      name={id}
      id={id}
      maxLength="400"
      className="h-40 w-80 resize-none p-2 text-black"
      placeholder={placeholder}
    ></textarea>
  );
}
export default TextArea;
