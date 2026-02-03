import React from "react";

export default function Button({ children, classesName, ...props }) {
  return (
    <button
      className={`transition duration-400 py-3 px-6 lg:text-xl rounded-lg cursor-pointer mb-10 ${classesName}`}
      {...props}
    >
      {children}
    </button>
  );
}
