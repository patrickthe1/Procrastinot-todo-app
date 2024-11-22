import StorageModule from "./storage-module";

const TodoManager = (() => {
    const addTodoToProject = (projectName, todo) => {
        const projects = StorageModule.loadFromStorage();
        const project = projects.find(proj => proj.name === projectName);

        if (project) {
            project.todos.push(todo);
            StorageModule.saveToStorage(projects);
        }
    };

    const deleteTodoFromProject = (projectName, index) => {
        const projects = StorageModule.loadFromStorage();
        const project = projects.find(proj => proj.name === projectName);

        if (project) {
            project.todos.splice(index, 1);
            StorageModule.saveToStorage(projects);
        }
    };

    return {
        addTodoToProject,
        deleteTodoFromProject,
    };
})();

export default TodoManager
