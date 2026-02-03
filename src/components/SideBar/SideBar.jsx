import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function SideBar({
  projectsList,
  deletProject,
  manageDisplay,
  getProjectIndex,
}) {
  return (
    <>
      <div className="bg-black text-white px-10 py-20 lg:w-1/4 lg:mt-10 lg:rounded-tr-3xl">
        <h1 className="uppercase lg:text-3xl mb-10">Your Projects</h1>
        <Button
          onClick={() => manageDisplay(1)}
          classesName="bg-stone-800 hover:bg-stone-600 text-stone-500 hover:text-stone-50"
        >
          + Add Project
        </Button>
        <ul>
          {projectsList.map((project, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  manageDisplay(2);
                  getProjectIndex(index);
                }}
                className="transition duration-400 rounded-md hover:bg-stone-800 p-2 mb-5 flex justify-between items-center cursor-pointer"
              >
                <p className="text-xl">{project.title}</p>
                <span
                  onClick={() => {
                    deletProject(index);
                    manageDisplay(0);
                  }}
                  className=" hover:animate-pulse"
                >
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className="cursor-pointer hover:text-red-500 text-xl transition"
                  />
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
