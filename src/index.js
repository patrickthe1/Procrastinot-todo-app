import './styles/styles.css';

import createTodo from './modules/todomodule';
import createProject from './modules/projects-module';

// Create some todos
const todo1 = createTodo("Task 1", "Description 1");
const todo2 = createTodo("Task 2", "Description 2");

// Create a project with todos
const project = createProject("Test Project", [todo1, todo2]);

// Log the project to verify
console.log("Created Project:", project);

// Check todos inside the project
console.log("Todos in Project:", project.todos);
console.log("Name of the project:", project.name);
//test the todo methods
todo1.updateTitle("Updatedtodo1")
console.log(todo1);
console.log('Hello, World!');
