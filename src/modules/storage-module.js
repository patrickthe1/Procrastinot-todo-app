const StorageModule = (() => {
  const STORAGE_KEY = "todoApp";

  // Load data from localStorage
  const loadFromStorage = () => {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    // Ensure the returned value is a valid array
    return Array.isArray(data) ? data.filter((item) => item !== null) : [];
  };

  // Save data to localStorage
  const saveToStorage = (projects) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  };

  // Initialize storage (if needed)
  const initializeStorage = () => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      saveToStorage([]); // Set up an empty array on first load
    }
  };

  return {
    loadFromStorage,
    saveToStorage,
    initializeStorage,
  };
})();

export default StorageModule;
