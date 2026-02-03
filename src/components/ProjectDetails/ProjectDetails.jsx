import React, { useRef } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

export default function ProjectDetails({
  display,
  manageDisplay,
  project,
  deleteProject,
  index,
  addTask,
  deleteTask,
}) {
  const taskValue = useRef();

  console.log(project);

  return (
    <div className={display === 2 ? "block" : "hidden"}>
      {project ? (
        <>
          <div className="flex justify-between items-center ">
            <h1 className="text-4xl font-bold text-stone-700 capitalize">
              {project.title}
            </h1>
            <Button
              classesName={"hover:bg-red-600 hover:text-white"}
              onClick={() => deleteProject(index)}
            >
              Delete
            </Button>
          </div>
          <p className="text-lg text-stone-500 mb-15">{project.date}</p>
          <p className="whitespace-pre-line text-2xl leading-13">
            {project.description}
          </p>
          <div className="bg-stone-400 h-0.5 w-full my-8"></div>
          <h1 className="text-4xl font-bold text-stone-700">Tasks</h1>
          <div className="flex flex-col lg:flex-row items-center mb-10">
            <Input ref={taskValue} placeholder="Enter your task" />
            <Button
              classesName={"hover:animate-pulse"}
              onClick={() => {
                addTask(taskValue.current.value, index);
                taskValue.current.value = "";
              }}
            >
              Add Task
            </Button>
          </div>
          <div className="bg-stone-200/50 p-5 rounded-2xl">
            {project.tasks.length > 0 ? (
              <>
                {project.tasks.map((task, i) => (
                  <div className="flex items-center justify-between mb-3 text-xl p-2 rounded-xl bg-stone-300">
                    <p>{task}</p>
                    <div
                      onClick={() => deleteTask(index, i)}
                      className="transition hover:bg-red-600 hover:text-white py-1 px-4 rounded-xl cursor-pointer"
                    >
                      clear
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <p className="text-xl font-bold text-center">
                No tasks yet, Add your task now
              </p>
            )}
          </div>
        </>
      ) : (
        display === 2 && manageDisplay(0)
      )}
    </div>
  );
}
