import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

export default function ProjectForm({
  saveProject,
  projectTitle,
  projectDescription,
  projectDate,
  display,
  manageDisplay,
}) {
  return (
    <div className={display === 1 ? "block" : "hidden"}>
      <div id="button-container" className="flex gap-2 text-xl justify-end">
        <Button classesName="hover:text-white hover:bg-black" onClick={() => manageDisplay(0)}>Close</Button>
        <Button
          classesName="bg-black hover:bg-gray-500 text-white"
          onClick={saveProject}
        >
          Save
        </Button>
      </div>
      <div id="input-container">
        <Input
          id="project-title"
          type="text"
          placeholder="Enter your project Title"
          ref={projectTitle}
        >
          Title
        </Input>
        <Input
          id="project-description"
          textAr={true}
          placeholder="Enter your project Description"
          ref={projectDescription}
        >
          Description
        </Input>
        <Input
          id="project-date"
          type="date"
          placeholder="Enter your project Description"
          ref={projectDate}
        >
          Date
        </Input>
      </div>
    </div>
  );
}
