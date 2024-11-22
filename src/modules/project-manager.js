//Projects Module
import StorageModule from "./storage-module";
 const ProjectManager = (() => {
    const createProject = (name,todos = []) => ({name,todos});

    const addProject = (name) => {
        const existingProjects = StorageModule.loadFromStorage();

        const projectExists = existingProjects.some((project) => project.name === name);

        if(projectExists){
            throw new Error('Project with that name already exists');
        } else {
            const newProject = createProject(name);
            existingProjects.push(newProject);
            StorageModule.saveToStorage(existingProjects);

            return newProject;
        }       
    }

    return{
        addProject
    }
})();

export default ProjectManager;