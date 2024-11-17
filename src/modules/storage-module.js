//Storage module 
const StorageModule = (()=> {
    const STORAGE_KEY = "todoAppData";

    //saveDatatoLocalStorage
    function saveDatatoLocalStorage(data){
    try {
        const serializeData = JSON.stringify(data);
        localStorage.setItem(STORAGE_KEY,serializeData);
        console.log("Data Saved to Local Storage");
    }
    catch (error){
        console.log("Error Saving data To localStoareg", error);
    }
    }

    function loadFromStorage(){
        try{
            const serializedData = localStorage.getItem(STORAGE_KEY);
            if(!serializedData){
                console.log("No data found in Local Storage, returning empty structure");
                return null;
            }
            const data = JSON.parse(serializedData);
            console.log("Data loaded from localStorage",data);
            return data;
        } catch(error){
            console.log("Error loading data from local storage", error);
            return null;        
        }
    }

    return {saveDatatoLocalStorage,loadFromStorage};
})();

export default StorageModule