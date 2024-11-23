// headerSearch.js
import StorageModule from "./storage-module";
import ProjectsTab from "./projects-tab";
const HeaderSearch = (() => {
    const attachSearchListener = () => {
        const searchBar = document.getElementById("search-bar");
        const projectsList = document.getElementById("projects-list");
        const allProjects = StorageModule.loadFromStorage();

        searchBar.addEventListener("input", (event) => {
            const searchTerm = event.target.value.toLowerCase().trim();
            projectsList.innerHTML = ""; // Clear existing list

            if (!searchTerm) {
                allProjects.forEach((project) => renderProjectListItem(project));
            } else {
                const filteredProjects = allProjects.filter((project) =>
                    project.name.toLowerCase().includes(searchTerm)
                );

                if (filteredProjects.length > 0) {
                    filteredProjects.forEach((project) => renderProjectListItem(project));
                } else {
                    const noProjectMessage = document.createElement("li");
                    noProjectMessage.textContent = "No projects found.";
                    projectsList.appendChild(noProjectMessage);
                }
            }
        });
    };

    const renderProjectListItem = (project) => {
        const projectsList = document.getElementById("projects-list");
        const projectItem = document.createElement("li");
        projectItem.textContent = project.name;
       

        projectItem.addEventListener("click", () => {
            ProjectsTab.showProjectDetails(project.name);
        });
        
        projectsList.appendChild(projectItem);
    };

    return {
        initialize: attachSearchListener,
    };
})();

export default HeaderSearch;
