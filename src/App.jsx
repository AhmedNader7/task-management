import { useEffect, useRef, useState } from "react";
import ProjectForm from "./components/ProjectForm/ProjectForm";
import SideBar from "./components/SideBar/SideBar";
import NoProject from "./components/NoProject/NoProject";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";

function App() {
  const projectTitle = useRef("");
  const projectDescription = useRef("");
  const projectDate = useRef("");

  const storedProjects = JSON.parse(localStorage.getItem('projects'))

  const [projects, setProjects] = useState(storedProjects === null ? [] : storedProjects);

  const [display, setDisplay] = useState(0);

  const [getProgectIndex, setGetProjectIndex] = useState(null);

  function handleProject() {
    let title = projectTitle.current.value;
    let description = projectDescription.current.value;
    let date = projectDate.current.value;

    setProjects((prev) => [
      ...prev,
      { title: title, description: description, date: date, tasks: [] },
    ]);

    projectTitle.current.value = "";
    projectDescription.current.value = "";
    projectDate.current.value = "";
  }

  function handleDeleteProject(i) {
    setProjects((prev) => prev.filter((_, index) => index !== i));
  }

  function handleDeleteTask(projectIndex, i) {
    setProjects((prev) => {
      const updatedTasksList = [...prev];
      updatedTasksList[projectIndex] = {
        ...updatedTasksList[projectIndex],
        tasks: updatedTasksList[projectIndex].tasks.filter(
          (_, index) => index !== i
        ),
      };
      return updatedTasksList;
    });
  }

  function handleAddTask(task, i) {
    setProjects((prev) => {
      const updatedList = [...prev];
      updatedList[i] = {
        ...updatedList[i],
        tasks: [...updatedList[i].tasks, task],
      };
      return updatedList;
    });
  }

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify([...projects]))
  }, [projects])

  return (
    <>
      <div className="flex lg:flex-row h-screen">
        <SideBar
          projectsList={projects}
          deletProject={handleDeleteProject}
          manageDisplay={setDisplay}
          getProjectIndex={setGetProjectIndex}
        />
        <div id="container" className="w-full px-10 py-20">
          <NoProject display={display} manageDisplay={setDisplay} />
          <ProjectForm
            display={display}
            manageDisplay={setDisplay}
            saveProject={handleProject}
            projectTitle={projectTitle}
            projectDescription={projectDescription}
            projectDate={projectDate}
          />
          <ProjectDetails
            display={display}
            manageDisplay={setDisplay}
            project={projects[getProgectIndex]}
            index={getProgectIndex}
            deleteProject={handleDeleteProject}
            addTask={handleAddTask}
            deleteTask={handleDeleteTask}
          />
        </div>
      </div>
    </>
  );
}

export default App;
