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

    const deleteProject = (projectName) => {
        let projects = StorageModule.loadFromStorage();
        projects = projects.filter(project => project.name !== projectName);
        StorageModule.saveToStorage(projects);
    };
    

    return{
        addProject,
        deleteProject
    }
})();

export default ProjectManager;