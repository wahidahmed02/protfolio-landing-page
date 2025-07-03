// Primary Button
export const PrimaryButton = ({ children, onClick }) => (
  <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-light py-2 px-6 rounded-full shadow-md transition duration-200 flex items-center justify-center gap-2">
    {children}
  </button>
);

// Secondary Button
export const SecondaryButton = ({ children, onClick }) => (
  <button onClick={onClick} className="border-[1px] border-gray-400 font-light  py-2 px-6 rounded-full shadow-md transition duration-200">
    {children}
  </button>
);

// Icon Button (only icon)
export const IconButton = ({ icon: Icon, onClick }) => (
  <button
    onClick={onClick} className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-xl text-gray-700 transition duration-200" >
    <Icon />
  </button>
);

