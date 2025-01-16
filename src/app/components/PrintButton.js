function PrintButton() {
  return (
    <>
      <button
  onClick={() => window.print()}
  className="flex items-center px-2 py-2 text-white bg-blue-500 hover:bg-blue-600 border border-blue-500 rounded-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-200"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 9V4h12v5m-1 11h2a2 2 0 002-2v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2h2m10 0v2H6v-2h10z"
    />
  </svg>
  
</button>

    </>
  );
}

export default PrintButton;
