import StorageModule from "./storage-module";
import TodoManager from "./todoManager";
import ProjectManager from "./project-manager";
const ProjectsTab = (() => {

    const renderProjects = () => {
        const projectsList = document.getElementById("projects-list");
        projectsList.innerHTML = ""; // Clear existing content
        const projects = StorageModule.loadFromStorage();
    
        if (projects && projects.length > 0) {
            projects.forEach((project) => {
                const projectItem = document.createElement("li");
                projectItem.classList.add("project-item");
    
                const projectNameSpan = document.createElement("span");
                projectNameSpan.textContent = project.name;
    
                // Add event listener to show project details on click
                projectNameSpan.addEventListener("click", () => {
                    ProjectsTab.showProjectDetails(project.name);
                });
    
                // Create delete button
                const deleteButton = document.createElement("button");
                deleteButton.classList.add("delete-project-btn");
                deleteButton.innerHTML = "&#10005;"; // Unicode for X
    
                deleteButton.addEventListener("click", () => {
                    const confirmDelete = window.confirm(`Are you sure you want to delete the project "${project.name}"?`);
                    if (confirmDelete) {
                        ProjectManager.deleteProject(project.name);
                        renderProjects(); // Re-render the project list
                    }
                });
    
                // Append name and button to the list item
                projectItem.appendChild(projectNameSpan);
                projectItem.appendChild(deleteButton);
    
                // Append the list item to the projects list
                projectsList.appendChild(projectItem);
            });
        } else {
            const noProjectMessage = document.createElement("li");
            noProjectMessage.textContent = "No projects available.";
            projectsList.appendChild(noProjectMessage);
        }
    };

    const renderHighPriorityProjects = () => {
        const contentDiv = document.getElementById("content");
        contentDiv.innerHTML = ""; // Clear existing content

        const heading = document.createElement("h2");
        heading.textContent = "High Priority Projects";

        const highPriorityList = document.createElement("ul");
        highPriorityList.setAttribute("id", "high-priority-list");

        const projects = StorageModule.loadFromStorage();

        // Filter projects with high-priority todos
        const highPriorityProjects = projects.filter((project) =>
            project.todos.some((todo) => todo.priority.toLowerCase() === "high")
        );

        if (highPriorityProjects.length === 0) {
            const noProjectsMessage = document.createElement("li");
            noProjectsMessage.textContent = "No high-priority projects available.";
            highPriorityList.appendChild(noProjectsMessage);
        } else {
            highPriorityProjects.forEach((project) => {
                const projectItem = document.createElement("li");
                projectItem.textContent = project.name;
                projectItem.addEventListener("click", () => {
                    ProjectsTab.showProjectDetails(project.name);
                });

                highPriorityList.appendChild(projectItem);
            });
        }

        contentDiv.appendChild(heading);
        contentDiv.appendChild(highPriorityList);
    };

    
    

    const showProjectDetails = (projectName) => {
      const contentDiv = document.getElementById("content");
      const project = StorageModule.loadFromStorage().find(proj => proj.name === projectName);

  
      if (!project) return;
  
      contentDiv.innerHTML = ""; // Clear content
      const projectCard = document.createElement("div");
      projectCard.setAttribute("id", "project-card");
      const heading = document.createElement("h2");
      heading.textContent = project.name;
  
      const addTodoButton = document.createElement("button");
      addTodoButton.textContent = "Add Todo";
      addTodoButton.setAttribute('id','add-todo');
      addTodoButton.addEventListener("click", () => openTodoForm(projectName));
  
      const todosContainer = document.createElement("ul");
      todosContainer.setAttribute("id", "todos-container");
      project.todos.forEach((todo, index) => renderTodoItem(todo, index, todosContainer, projectName));
  
      projectCard.appendChild(heading);
      projectCard.appendChild(addTodoButton);
      projectCard.appendChild(todosContainer);

      contentDiv.appendChild(projectCard);
  };

  const openTodoForm = (projectName) => {
    const formDialog = document.createElement("div");
    formDialog.setAttribute("id", "todo-form-dialog");

    formDialog.innerHTML = `
        <h3>Add Todo for ${projectName}</h3>
        <form id="todo-form">
            <input type="text" id="todo-title" placeholder="Title" required />
            <textarea id="todo-description" placeholder="Description"></textarea>
            <input type="date" id="todo-due-date" required />
            <select id="todo-priority">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <button type="button" id="confirm-todo">Confirm</button>
            <button type="button" id="cancel-todo">Cancel</button>
        </form>
    `;
    formDialog.classList.add('active');
    document.body.appendChild(formDialog);

    document.getElementById("confirm-todo").addEventListener("click", () => {
        const todo = {
            title: document.getElementById("todo-title").value,
            description: document.getElementById("todo-description").value,
            dueDate: document.getElementById("todo-due-date").value,
            priority: document.getElementById("todo-priority").value,
            completed: false,
        };

        TodoManager.addTodoToProject(projectName, todo);
        document.body.removeChild(formDialog); // Close form
        showProjectDetails(projectName); // Re-render the project
    });

    document.getElementById("cancel-todo").addEventListener("click", () => {
        formDialog.classList.remove('active');
        document.body.removeChild(formDialog); // Close form
    });
};




const renderTodoItem = (todo, index, container, projectName) => {
    // Create a wrapper for the todo item
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    // Checkbox for completed status
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.classList.add("todo-checkbox");
    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked; // Update the status
        StorageModule.saveToStorage(StorageModule.loadFromStorage());
    });

    // Todo details container
    const todoDetails = document.createElement("div");
    todoDetails.classList.add("todo-details");

    const title = document.createElement("h3");
    title.textContent = todo.title;

    const dueDate = document.createElement("p");
    dueDate.textContent = `Due: ${todo.dueDate}`;

    const priority = document.createElement("p");
    priority.textContent = `Priority: ${todo.priority}`;
    priority.classList.add(`priority-${todo.priority.toLowerCase()}`); // For styling based on priority

    // Add details to the details container
    todoDetails.appendChild(title);
    todoDetails.appendChild(dueDate);
    todoDetails.appendChild(priority);

    // Action buttons container
    const actionsContainer = document.createElement("div");
    actionsContainer.classList.add("todo-actions");

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit");
    editButton.addEventListener("click", () => openEditTodoForm(todo, index, projectName));

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", () => {
        TodoManager.deleteTodoFromProject(projectName, index);
        showProjectDetails(projectName); // Re-render the project
    });

    // Add buttons to the actions container
    actionsContainer.appendChild(editButton);
    actionsContainer.appendChild(deleteButton);

    // Append everything to the todo item
    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoDetails);
    todoItem.appendChild(actionsContainer);

    // Append the todo item to the container
    container.appendChild(todoItem);
};

const openEditTodoForm = (todo, index, projectName) => {
    // Create a modal-like dialog for editing
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    const editForm = document.createElement("div");
    editForm.classList.add("edit-todo-form");

    const heading = document.createElement("h3");
    heading.textContent = "Edit Todo";

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title:";
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.value = todo.title;

    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description:";
    const descriptionInput = document.createElement("textarea");
    descriptionInput.value = todo.description || ""; // Handle undefined

    const dueDateLabel = document.createElement("label");
    dueDateLabel.textContent = "Due Date:";
    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.value = todo.dueDate || ""; // Handle undefined

    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority:";
    const prioritySelect = document.createElement("select");
    ["High", "Medium", "Low"].forEach((priority) => {
        const option = document.createElement("option");
        option.value = priority.toLowerCase();
        option.textContent = priority;
        if (todo.priority.toLowerCase() === priority.toLowerCase()) {
            option.selected = true;
        }
        prioritySelect.appendChild(option);
    });

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.classList.add("save-btn");

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.classList.add("cancel-btn");

    // Append all elements to the form
    editForm.appendChild(heading);
    editForm.appendChild(titleLabel);
    editForm.appendChild(titleInput);
    editForm.appendChild(descriptionLabel);
    editForm.appendChild(descriptionInput);
    editForm.appendChild(dueDateLabel);
    editForm.appendChild(dueDateInput);
    editForm.appendChild(priorityLabel);
    editForm.appendChild(prioritySelect);
    editForm.appendChild(saveButton);
    editForm.appendChild(cancelButton);

    overlay.appendChild(editForm);
    document.body.appendChild(overlay);

    // Event listeners
    cancelButton.addEventListener("click", () => {
        overlay.remove();
    });

    saveButton.addEventListener("click", () => {
        // Update the todo with new values
        todo.title = titleInput.value;
        todo.description = descriptionInput.value;
        todo.dueDate = dueDateInput.value;
        todo.priority = prioritySelect.value;

        // Save changes to storage
        const allProjects = StorageModule.loadFromStorage();
        const project = allProjects.find((p) => p.name === projectName);
        if (project) {
            project.todos[index] = todo; // Update the specific todo
            StorageModule.saveToStorage(allProjects);
        }

        // Re-render the project details
        showProjectDetails(projectName);

        // Remove the edit form from the DOM
        overlay.remove();
    });
};



  
    return {
      renderProjects,
      renderTodoItem,
      showProjectDetails,
      openTodoForm,
      openEditTodoForm,
      renderHighPriorityProjects
    };
  })();
  
  export default ProjectsTab;
   