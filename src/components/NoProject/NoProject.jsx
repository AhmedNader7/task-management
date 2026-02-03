import React from "react";
import logo from "../../assets/no-projects.png";
import Button from "../Button/Button";

export default function NoProject({ display, manageDisplay }) {
  return (
    <div className={display === 0 ? "block h-full" : "hidden"}>
      <div className="h-full flex flex-col items-center justify-center gap-5">
        <img src={logo} alt="no project logo" className="w-30" />
        <h1 className="text-3xl font-bold text-stone-700">
          No Project Selected
        </h1>
        <p className="text-xl text-stone-500">
          Select a project or get started with a new one
        </p>
        <Button classesName="bg-stone-700 hover:bg-gray-500 text-stone-400 hover:text-stone-200" onClick={() => manageDisplay(1)}>
          Create new project
        </Button>
      </div>
    </div>
  );
}
