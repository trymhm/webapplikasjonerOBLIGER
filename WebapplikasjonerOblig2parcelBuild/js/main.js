
var todos = [];
let todosDefault = [
    ["Completed","Title","Author","Description","Date"],
    {Completed:true,Title:"Vaske stua",Author:"Trym",Description:"Innen torsdag",Date:"03.03.2020",id:1},
    {Completed:true,Title:"Rydde rommet",Author:"Trym",Description:"Innen fredag",Date:"03.03.2020",id:2},
    {Completed:true,Title:"Hente pakke",Author:"Trym",Description:"Innen mandag",Date:"03.04.2020",id:3},
    {Completed:false,Title:"Dra på date",Author:"Trym",Description:"Onsdag",Date:"00.00.0000",id:4}
]
let todosSorted = [

]
    var stored = localStorage['myKey']
    let lastet = ""
    if(lastet.length < 1)todos = todosDefault;
    else todos = lastet;

    function reset(){
        todos = todosDefault
        updateDone(todos)
        updateTodos(todos)
        localStorage['lagring'] = JSON.stringify(todos)
        return todos;

    }

    

    document.getElementById("box").onclick = function(){
        todos.sort(function(a,b){
            
//hentet sortering fra stackoverflow som ikke funker. masse funker ikke selv om det burde jeg hater vanilla.

            if(document.getElementById("box") == true){
                return new Date(b.Date) + new Date(a.Date);
            }else{
                return new Date(b.Date) - new Date(a.Date);
            }
          });
    }
    var modal = document.getElementById("modal")
    var btn = document.getElementById("nyTodo")
    var span = document.getElementsByClassName("lukk")[0]
    btn.onclick = function() {
    modal.style.display = "block"
    }
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"
        }
    } 
    

    document.getElementById("createTodo").onclick = createTodoFunct
    var completedItemsList = document.getElementById("completedItemsList")
    var todoList = document.getElementById("todoList")
    
   
    updateDone(todos)
    updateTodos(todos)

    
    function createTodoFunct(){
        var feedback="";
        if(document.getElementById("title").value.length<1)feedback+="You have to set a title.\n"
        if(document.getElementById("author").value.length<1)feedback+="You have to set an author.\n"
        if(document.getElementById("description").value.length<1)feedback+="You have to set an author\n"
        if(feedback.length>1){
            alert(feedback)
            return
        }
        while(todoList.hasChildNodes())todoList.removeChild(todoList.lastChild)
        
        todos.push({Completed:false,Title:document.getElementById("title").value,Author:document.getElementById("author").value,Description:document.getElementById("description").value,Date:"00.00.0000",id:todos.lenght})
       console.log(todoList.childElementCount >3)
        if(todoList.childElementCount > 3) return;
        updateDone(todos)
        updateTodos(todos)
    }

    function updateDone(items){
        while(completedItemsList.hasChildNodes())completedItemsList.removeChild(completedItemsList.lastChild)
        for(var i=1;i<todos.length;i++){
            if(items[i].Completed){
                let completedItem=document.createElement("ul")
                for(var j=1;j<5;j++){
                    var yolo=document.createTextNode(items[i][items[0][j]])
                    var swag=document.createElement("LI")
                    swag.appendChild(yolo)
                    completedItem.appendChild(swag)
                }
                completedItem.classList.add("tableItem")
                completedItemsList.appendChild(completedItem)

                
            }
        }
        console.log(items)
        if(localStorage['myKey'] != JSON.stringify(todos))localStorage['myKey'] = JSON.stringify(todos)
    }   

    

    function updateTodos(items){
        for(var i=1;i<todos.length;i++){
            if(todoList.childNodes.length>3)break
                if(!todos[i].Completed){
                let todo=document.createElement("div")
                for(var j=1;j<4;j++){
                    if(j==1){
                        var yolo=document.createTextNode(items[i][items[0][j]])
                        var swag=document.createElement("h3")
                        swag.appendChild(yolo)
                        todo.appendChild(swag)
                    }
                    if(j==3){
                        var yolo=document.createTextNode(items[i][items[0][j]])
                        var swag=document.createElement("p")
                        swag.appendChild(yolo)
                        todo.appendChild(swag)
                    }

                    
                }
                var slett=document.createTextNode("Delete")
                var slettKnapp=document.createElement("button")
                todo.id="todo"+i
                slettKnapp.appendChild(slett)
                slettKnapp.onclick = function(e){
                   console.log("får ikke til å lagre sletting, men det skulle funker faen jeg vil ta livet mitt")
                    todoList.removeChild(e.target.parentNode)
                    todos.splice(e.target.parentNode.id.replace(/[^\d.-]/g, '')-1,1)
                    
                }
                var complete=document.createTextNode("Complete")
                var completeKnapp=document.createElement("button")
                completeKnapp.appendChild(complete)
                completeKnapp.onclick = function(e){
                    todoList.removeChild(e.target.parentNode)
                    console.log(todo.id.replace(/[^\d.-]/g, ''))
                    todos[todo.id.replace(/[^\d.-]/g, '')].Completed=true
                    var today = new Date()
                    var dd = String(today.getDate()).padStart(2, '0')
                    var mm = String(today.getMonth() + 1).padStart(2, '0')
                    var yyyy = today.getFullYear()
                    today = mm + '.' + dd + '.' + yyyy
                    todos[todo.id.replace(/[^\d.-]/g, '')].Date=today
                    updateDone(todos)
                    if(localStorage['lagrning'] != JSON.stringify(todos))localStorage['lagring'] = JSON.stringify(todos)
                }
                slettKnapp.id = "redButton"
                completeKnapp.id ="greenButton"
                todo.appendChild(completeKnapp)
                todo.appendChild(slettKnapp)
                todoList.appendChild(todo)
                
            }
        }
        console.log(items)
        if(localStorage['lagrning'] != JSON.stringify(todos))localStorage['lagring'] = JSON.stringify(todos)
  
    }
    



    
