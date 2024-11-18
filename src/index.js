import './styles/styles.css';
import StorageModule from './modules/storage-module';
import createTodo from './modules/todomodule';
import createProject from './modules/projects-module';

const HomeTab = (() => {
    const contentDiv = document.getElementById("content");
    const homeButton = document.getElementById("home-tab");
    
  
    // Function to add the form
    const addForm = () => {
      // Clear existing content
      contentDiv.innerHTML = "";
  
      // Create the container and its elements
      const homeContainer = document.createElement("div");
      homeContainer.setAttribute("id", "home-container");
  
      const h2 = document.createElement("h2");
      h2.textContent = "Add a Project";
  
      const projectForm = document.createElement("form");
      projectForm.setAttribute("id", "project-form");
  
      const projectInput = document.createElement("input");
      projectInput.setAttribute("id", "project-name");
      projectInput.type = "text";
      projectInput.placeholder = "Enter project name";
  
      const projectSubmit = document.createElement("button");
      projectSubmit.type = "button";
      projectSubmit.setAttribute('id','project-submit');
      projectSubmit.textContent = "Add Project";
  
      // Append elements to the form and container
      projectForm.appendChild(projectInput);
      projectForm.appendChild(projectSubmit);
      homeContainer.appendChild(h2);
      homeContainer.appendChild(projectForm);
  
      // Append the container to the content div
      contentDiv.appendChild(homeContainer);
    };

    const initializeHomeTab = () => {

      addForm();
      const projectSubmitButton = document.getElementById("project-submit");
    
      if (projectSubmitButton) {
        projectSubmitButton.addEventListener("click", (e) => {
          e.preventDefault(); // Prevent default behavior, just in case
          console.log("Button clicked. Listener is working.");
          makeProject();
        });
      } else {
        console.error("Submit button not found in the DOM.");
      }
    };
    
    // Add event listener to the Home button
    homeButton.addEventListener("click", initializeHomeTab);



    const makeProject = () => {
      const projectName = document.getElementById("project-name").value.trim(); // Trim spaces
      const projectSubmitButton = document.getElementById("project-submit");
    
      // Prevent form from refreshing the page
      projectSubmitButton.addEventListener("click", (e) => {
        e.preventDefault(); // Stop default form behavior
    
        if (projectName === "") {
          alert("Project name cannot be empty!");
          return;
        }
    
        // Create and save the project
        const newProject = createProject(projectName, []);
        StorageModule.saveDatatoLocalStorage(newProject); 
        // updateSidebar(newProject); 
        // Clear the input field
        document.getElementById("project-name").value = "";
    
        alert(`Project "${projectName}" added successfully!`);
      });
    };
})();
  


