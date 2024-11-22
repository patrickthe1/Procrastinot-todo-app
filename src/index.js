import "./styles/styles.css";
import StorageModule from "./modules/storage-module";
import EventController from "./modules/event-controller";
import TodoManager from "./modules/todoManager";

// Initialize app
document.addEventListener("DOMContentLoaded", () => {
  StorageModule.initializeStorage(); // Ensure storage is set up
  EventController.initialize(); // Attach event listeners
});
