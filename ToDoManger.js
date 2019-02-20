import {ToDoActionBar} from './ToDoActionBar';
import {ToDoItem} from './ToDoItem';
import {toDoElement} from './ToDoMangerBroker';

function ToDoManager() {
        this.toDoItems = {};
    }

   ToDoManager.prototype.init=function() {
        const toDoActionBar = new ToDoActionBar();
        toDoActionBar.init();
        var that=this;
        toDoElement.addEventListener('toDoAdd',function(){
            that.createItem(event);
         });
         toDoElement.addEventListener('toDoDelete',function(){
             that.deleteAll();
         });
         toDoElement.addEventListener('toDoDeleteSelected',function(){
             that.deleteSelected();
         });
   }
    ToDoManager.prototype.createItem=function(event){
        var toDoDetails=event.detail;
        this.toDoItems[toDoDetails.toDoId]=toDoDetails;
        this.render();
    }
    ToDoManager.prototype.deleteAll=function(){
        for(var toDoId in this.toDoItems) {
          delete this.toDoItems[toDoId];
             }   
     this.render();
    }

    ToDoManager.prototype.deleteSelected=function(){
        for(var toDoId in this.toDoItems) {
            var selectedItem = document.querySelector(`[toDoId="${toDoId}"]`);
            if(selectedItem.querySelector('.select_todo').checked) {
                delete this.toDoItems[toDoId];   
            }
        }
        this.render();
    }
    ToDoManager.prototype.render=function() {
        var toDoContainer = document.getElementById("todo_container");
        toDoContainer.innerHTML = "";
        for(var toDoId in this.toDoItems) {
            const toDoItem = new ToDoItem();
            var descriptionToBeAdded = this.toDoItems[toDoId].toDoText;
            var cloneItem=toDoItem.createToDoFragment(toDoId,descriptionToBeAdded,this);
            document.querySelector(".todo_container").appendChild(cloneItem);

            var selectedToDoItem = cloneItem.querySelector(".todo_item");
            if(this.toDoItems[toDoId].toDoStatus) {
                selectedToDoItem.classList.remove('todo_item');
                selectedToDoItem.classList.add('todo_item_completed'); 
            }
            else {
                selectedToDoItem.classList.remove('todo_item_completed'); 
                selectedToDoItem.classList.add('todo_item');  
            }
            if(this.toDoItems[toDoId].toDoChecked){
               var selectedToDo=cloneItem.querySelector('.select_todo');
               selectedToDo.setAttribute("checked","checked");
            }
        }
    }

export {ToDoManager};