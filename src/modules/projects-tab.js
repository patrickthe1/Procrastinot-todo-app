import StorageModule from "./storage-module";
import TodoManager from "./todoManager";
const ProjectsTab = (() => {
    const renderProjects = () => {
      const projectsList = document.getElementById("projects-list");
      projectsList.innerHTML = ""; // Clear existing content
      const projects = StorageModule.loadFromStorage();

      if (projects && projects.length > 0) {
          projects.forEach((project) => {
              const projectItem = document.createElement("li");
              projectItem.textContent = project.name;

              // Add event listener to show project details on click
              projectItem.addEventListener("click", () => {
                  ProjectsTab.showProjectDetails(project.name); // Call the function to show project details
              });

              projectsList.appendChild(projectItem);
          });
      } else {
          const noProjectMessage = document.createElement("li");
          noProjectMessage.textContent = "No projects available.";
          projectsList.appendChild(noProjectMessage);
      }
  
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
  const todoItem = document.createElement("li");
  todoItem.textContent = `${todo.title} (Priority: ${todo.priority})`;

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.setAttribute('class','edit');  
  editButton.addEventListener("click", () => openEditTodoForm(todo, index, projectName));

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.setAttribute('class','delete');
  deleteButton.addEventListener("click", () => {
      TodoManager.deleteTodoFromProject(projectName, index);
      showProjectDetails(projectName); // Re-render the project
  });

  todoItem.appendChild(editButton);
  todoItem.appendChild(deleteButton);
  container.appendChild(todoItem);
};

const openEditTodoForm = (todo, index, projectName) => {
  // Create a modal or popup for editing
  const editForm = document.createElement("div");
  editForm.classList.add("edit-todo-form");

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.value = todo.title; // Pre-fill with current title
  editForm.appendChild(titleInput);

  const saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  saveButton.addEventListener("click", () => {
      // Update the todo
      todo.title = titleInput.value;

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
      editForm.remove();
  });

  editForm.appendChild(saveButton);

  // Append the form to the content div
  const contentDiv = document.getElementById("content");
  contentDiv.appendChild(editForm);
};


  
    return {
      renderProjects,
      renderTodoItem,
      showProjectDetails,
      openTodoForm,
      openEditTodoForm
    };
  })();
  
  export default ProjectsTab;
   