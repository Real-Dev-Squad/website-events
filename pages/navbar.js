import React from 'react';

export default function NavBar() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-gray-900">
      <div>
        <img className="h-6" src="/workcation.svg" alt="Workcation" />
      </div>
      <div className="">
        <button
          type="button"
          className="block text-gray-500 focus:text-white focus:outline-none"
        >
          <svg
            className="h-6 w-6 fill-current"
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
