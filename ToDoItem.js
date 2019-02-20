    function ToDoItem() {

    }


    ToDoItem.prototype.createToDoFragment = function(toDoId,descriptionToBeAdded,toDoManager) {
        var todoTemplate = document.querySelector(".todo_template");
        var cloneItem = todoTemplate.cloneNode(true);
        cloneItem.querySelector('.todo_item').textContent = descriptionToBeAdded;
        var that=this;
        cloneItem.addEventListener('click',function(){
            that.toDoItemActions(toDoManager,event);
        });
        cloneItem.setAttribute("toDoId", toDoId);
        cloneItem.removeAttribute("id");
        cloneItem.classList.remove("todo_template");
        cloneItem.classList.add("todo_items");
        return cloneItem;
    }

    ToDoItem.prototype.toDoItemActions = function(toDoManager, event) {
                var targetItem=event.currentTarget;
                
                var toDoId = event.currentTarget.getAttribute('todoid');

                switch(event.target.getAttribute("data-action")) {
                    case "mark_todo_completed":
                        toDoManager.toDoItems[toDoId].toDoStatus = !toDoManager.toDoItems[toDoId].toDoStatus;
                        this.render(targetItem,toDoId,toDoManager);
                    break;
                    case "todo_delete":
                        delete toDoManager.toDoItems[toDoId];
                        toDoManager.render();
                    break;
                    case "todo_update":
                        var updateFromPrompt = prompt("enter to update"," ");
                        toDoManager.toDoItems[toDoId].toDoText+=updateFromPrompt;
                        this.render(targetItem,toDoId,toDoManager);
                    break;
                    case "select_todo":
                        toDoManager.toDoItems[toDoId].toDoChecked=!toDoManager.toDoItems[toDoId].toDoChecked;
                        break;
                    default: break;
                }
                
    }

ToDoItem.prototype.render=function(targetItem,toDoId,toDoManager){

    var descriptionToBeAdded=toDoManager.toDoItems[toDoId].toDoText;
    var clone=this.createToDoFragment(toDoId,descriptionToBeAdded,toDoManager);
    var selectedText = clone.querySelector('.todo_item');
    if(toDoManager.toDoItems[toDoId].toDoStatus){
        selectedText.classList.remove('todo_item');
        selectedText.classList.add('todo_item_completed'); 
    }
    else {
        selectedText.classList.remove('todo_item_completed'); 
        selectedText.classList.add('todo_item');  
    }
    targetItem.replaceWith(clone);
}
    export {ToDoItem};