import React from "react";

export default function Input({ children, id, textAr = false, ...props }) {
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label
        htmlFor={id}
        className="uppercase text-lg text-stone-500 font-bold"
      >
        {children}
      </label>
      {textAr ? (
        <textarea
          id={id}
          {...props}
          className="bg-stone-300 min-h-25 max-h-100 shadow-lg rounded-lg p-3 text-xl font-bold  border-0 focus:outline-stone-700 focus:outline-2"
        ></textarea>
      ) : (
        <input
          {...props}
          className="bg-stone-300 h-15 shadow-lg rounded-lg p-3 text-xl font-bold  border-0 focus:outline-stone-700 focus:outline-2"
        />
      )}
    </div>
  );
}
