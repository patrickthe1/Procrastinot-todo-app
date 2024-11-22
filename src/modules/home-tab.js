//Home Tab
import ProjectManager from "./project-manager";
import ProjectsTab from "./projects-tab";

const HomeTab = (() => {
    const renderHome = () => {
      const contentDiv = document.getElementById("content");
      contentDiv.innerHTML = `
        <div id="home-container">
          <h2>Add a Project</h2>
          <form id="project-form">
            <input id="project-name" type="text" placeholder="Enter project name" />
            <button id="project-submit" type="button">Add Project</button>
          </form>
        </div>
      `;
    };
  
    const attachListeners = () => {
      const submitButton = document.getElementById("project-submit");
      submitButton.addEventListener("click", () => {
        try {
          const projectName = document.getElementById("project-name").value.trim();
          if (!projectName) {
            alert("Project name cannot be empty!");
            return;
          }
          ProjectManager.addProject(projectName);
          ProjectsTab.renderProjects();
          document.getElementById("project-name").value = ""; // Clear input
        } catch (error) {
          alert(error.message);
        }
      });
    };
  
    const initialize = () => {
      renderHome();
      attachListeners();
    };
  
    return {
      initialize,
    };
  })();
  
  export default HomeTab;
  