import ProjectsTab from "./projects-tab";
import HomeTab from "./home-tab";

const EventController = (() => {
    const attachTabSwitchListeners = () => {
      const homeTabButton = document.getElementById("home-tab");
      const projectsTabButton = document.getElementById("projects-tab");
  
      homeTabButton.addEventListener("click", () => {
        HomeTab.initialize();
      });
  
      projectsTabButton.addEventListener("click", () => {
        ProjectsTab.renderProjects();
      });
    };
  
    return {
      initialize: attachTabSwitchListeners,
    };
  })();
  
  export default EventController;
  