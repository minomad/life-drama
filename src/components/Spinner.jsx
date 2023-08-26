function Spinner() {
  return (
    <div className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="130"
        height="130"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 100 100"
      >
        <g>
          <path fill="none" stroke="#4263eb" strokeWidth="12" d="M50 15a35 35 0 1024.749 10.251"></path>
          <path fill="#4263eb" d="M49 3v24l12-12L49 3"></path>
          <animateTransform
            attributeName="transform"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="rotate"
            values="0 50 50;360 50 50"
          ></animateTransform>
        </g>
      </svg>
    </div>
  );
}
export default Spinner;
