import  {toDoElement} from './ToDoMangerBroker';


function ToDoActionBar(descriptionToBeAdded, toDoId) {
        this.toDoText=descriptionToBeAdded;
        this.toDoId=toDoId;
        this.toDoStatus=false;
        this.toDoChecked=false;
    }

    ToDoActionBar.prototype.init=function() {
        var that = this;
        document.getElementById("add_todo").addEventListener('click', function() {
            that.addToDoItem();
        });
        document.getElementById("delete_all_todo").addEventListener('click', function() {
            that.deleteAllItems();
        });
        document.getElementById("delete_selected_todo").addEventListener('click', function() {
            that.deleteSelectedItems();
        });
    }

    ToDoActionBar.prototype.addToDoItem=function() {

        var date = new Date();
        var toDoId = date.getTime();
        var textEntered = document.getElementById("todo_text");
        var descriptionToBeAdded = textEntered.value;
        if(!descriptionToBeAdded) {
             var textFromPrompt = prompt("enter something", " ");
             descriptionToBeAdded = textFromPrompt;
        }

        var toDoDetails={
        toDoText: descriptionToBeAdded,
        toDoId: toDoId,
        toDoStatus: false,
        toDoChecked: false
        }
        var toDoAdd = new CustomEvent('toDoAdd',{detail :toDoDetails});
        toDoElement.dispatchEvent(toDoAdd);
        textEntered.value = "";
    } 
   
   ToDoActionBar.prototype.deleteAllItems=function() {
        var toDoDelete=new Event('toDoDelete');
        toDoElement.dispatchEvent(toDoDelete);
    }

  ToDoActionBar.prototype.deleteSelectedItems=function(toDoManager) {
       var toDoDeleteSelected=new Event('toDoDeleteSelected');
       toDoElement.dispatchEvent(toDoDeleteSelected);
       
   }

export {ToDoActionBar};