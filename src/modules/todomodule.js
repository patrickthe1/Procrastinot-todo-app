//To do module 
export default function createTodo(title, description) {  
    return {  
        title: title,  
        description: description,  
        completed: false,  
        
        updateTitle(newTitle) {  
            this.title = newTitle;  
        },  
        
        markAsComplete() {  
            this.completed = true;  
        }  
    };  
}  

