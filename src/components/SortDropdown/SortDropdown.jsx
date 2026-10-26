import { useState } from "react";

const options = [
  { label: "Rating", key: "rating" },
  { label: "Number of pages", key: "totalPages" },
  { label: "Publisher year", key: "yearOfPublishing" },
];

const SortDropdown = ({ onSort }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (key) => {
    onSort(key);
    setOpen(false);
  };

  return (
    <div className="relative w-56">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-center gap-4 rounded-xl bg-green-500 px-6 py-4 text-xl font-semibold text-white"
      >
        Sort By
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul className="absolute left-0 top-full z-10 mt-1 w-full rounded-xl bg-[#F3F3F3] py-3 text-center text-lg text-[#131313]/80 shadow-md">
          {options.map(({ label, key }) => (
            <li key={key}>
              <button
                onClick={() => handleSelect(key)}
                className="w-full px-4 py-2 hover:text-[#23BE0A]"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortDropdown;
