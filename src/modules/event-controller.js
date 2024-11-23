import ProjectsTab from "./projects-tab";
import HomeTab from "./home-tab";

const EventController = (() => {
  const attachTabSwitchListeners = () => {
      const homeTabButton = document.getElementById("home-tab");
      const projectsTabButton = document.getElementById("projects-tab");
      const projectList =  document.getElementById("projects-list"); 
      const highPriorityTabButton = document.getElementById("high-priority-tab");

      // Track the visibility state of the Projects tab
      let isProjectsTabVisible = false;

      homeTabButton.addEventListener("click", () => {
          HomeTab.initialize();
          isProjectsTabVisible = false; // Reset visibility state for consistency
      });

      projectsTabButton.addEventListener("click", () => {
          if (isProjectsTabVisible) {
              // If the tab is visible, clear the content
              projectList.innerHTML = "";
              isProjectsTabVisible = false;
          } else {
              // Otherwise, render the projects and set visibility to true
              ProjectsTab.renderProjects();
              isProjectsTabVisible = true;
          }
      });

      highPriorityTabButton.addEventListener("click", () => {
        ProjectsTab.renderHighPriorityProjects();
    });
  };

  return {
      initialize: attachTabSwitchListeners,
  };
})();

  export default EventController;
  