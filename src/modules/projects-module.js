//Projects Module
export default function createProject(name,[...todos]){
    return{
        name: name,
        todos: [...todos],
    }
}