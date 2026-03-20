let todo =[]
 let request = prompt("Enter your request")
  while(true)
  {
    if(request=="quit"){
        console.log("Exiting the program")
        break;
    }
    if(request=="list"){
        for(task of todo){
                console.log(task)
        }
    }
    else if(request=="add"){
        let newtask = prompt("Enter the task to be added")
        todo.push(newtask)
        console.log("Task added successfully")
    }
    else if(request=="delete"){
        let index = prompt("Enter the index of the task to be deleted")
        index = parseInt(index)
        let deletedtask = todo.splice(index,1)
        console.log("Task deleted successfully")
  }
  else{
        console.log("Invalid request. Please try again.")
  }
  request = prompt("Enter your request")
}