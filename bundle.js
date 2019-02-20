/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ToDoActionBar.js":
/*!**************************!*\
  !*** ./ToDoActionBar.js ***!
  \**************************/
/*! exports provided: ToDoActionBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToDoActionBar\", function() { return ToDoActionBar; });\n/* harmony import */ var _ToDoMangerBroker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoMangerBroker */ \"./ToDoMangerBroker.js\");\n\n\n\nfunction ToDoActionBar(descriptionToBeAdded, toDoId) {\n        this.toDoText=descriptionToBeAdded;\n        this.toDoId=toDoId;\n        this.toDoStatus=false;\n        this.toDoChecked=false;\n    }\n\n    ToDoActionBar.prototype.init=function() {\n        var that = this;\n        document.getElementById(\"add_todo\").addEventListener('click', function() {\n            that.addToDoItem();\n        });\n        document.getElementById(\"delete_all_todo\").addEventListener('click', function() {\n            that.deleteAllItems();\n        });\n        document.getElementById(\"delete_selected_todo\").addEventListener('click', function() {\n            that.deleteSelectedItems();\n        });\n    }\n\n    ToDoActionBar.prototype.addToDoItem=function() {\n\n        var date = new Date();\n        var toDoId = date.getTime();\n        var textEntered = document.getElementById(\"todo_text\");\n        var descriptionToBeAdded = textEntered.value;\n        if(!descriptionToBeAdded) {\n             var textFromPrompt = prompt(\"enter something\", \" \");\n             descriptionToBeAdded = textFromPrompt;\n        }\n\n        var toDoDetails={\n        toDoText: descriptionToBeAdded,\n        toDoId: toDoId,\n        toDoStatus: false,\n        toDoChecked: false\n        }\n        var toDoAdd = new CustomEvent('toDoAdd',{detail :toDoDetails});\n        _ToDoMangerBroker__WEBPACK_IMPORTED_MODULE_0__[\"toDoElement\"].dispatchEvent(toDoAdd);\n        textEntered.value = \"\";\n    } \n   \n   ToDoActionBar.prototype.deleteAllItems=function() {\n        var toDoDelete=new Event('toDoDelete');\n        _ToDoMangerBroker__WEBPACK_IMPORTED_MODULE_0__[\"toDoElement\"].dispatchEvent(toDoDelete);\n    }\n\n  ToDoActionBar.prototype.deleteSelectedItems=function(toDoManager) {\n       var toDoDeleteSelected=new Event('toDoDeleteSelected');\n       _ToDoMangerBroker__WEBPACK_IMPORTED_MODULE_0__[\"toDoElement\"].dispatchEvent(toDoDeleteSelected);\n       \n   }\n\n\n\n//# sourceURL=webpack:///./ToDoActionBar.js?");

/***/ }),

/***/ "./ToDoItem.js":
/*!*********************!*\
  !*** ./ToDoItem.js ***!
  \*********************/
/*! exports provided: ToDoItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToDoItem\", function() { return ToDoItem; });\n    function ToDoItem() {\n\n    }\n\n\n    ToDoItem.prototype.createToDoFragment = function(toDoId,descriptionToBeAdded,toDoManager) {\n        var todoTemplate = document.querySelector(\".todo_template\");\n        var cloneItem = todoTemplate.cloneNode(true);\n        cloneItem.querySelector('.todo_item').textContent = descriptionToBeAdded;\n        var that=this;\n        cloneItem.addEventListener('click',function(){\n            that.toDoItemActions(toDoManager,event);\n        });\n        cloneItem.setAttribute(\"toDoId\", toDoId);\n        cloneItem.removeAttribute(\"id\");\n        cloneItem.classList.remove(\"todo_template\");\n        cloneItem.classList.add(\"todo_items\");\n        return cloneItem;\n    }\n\n    ToDoItem.prototype.toDoItemActions = function(toDoManager, event) {\n                var targetItem=event.currentTarget;\n                \n                var toDoId = event.currentTarget.getAttribute('todoid');\n\n                switch(event.target.getAttribute(\"data-action\")) {\n                    case \"mark_todo_completed\":\n                        toDoManager.toDoItems[toDoId].toDoStatus = !toDoManager.toDoItems[toDoId].toDoStatus;\n                        this.render(targetItem,toDoId,toDoManager);\n                    break;\n                    case \"todo_delete\":\n                        delete toDoManager.toDoItems[toDoId];\n                        toDoManager.render();\n                    break;\n                    case \"todo_update\":\n                        var updateFromPrompt = prompt(\"enter to update\",\" \");\n                        toDoManager.toDoItems[toDoId].toDoText+=updateFromPrompt;\n                        this.render(targetItem,toDoId,toDoManager);\n                    break;\n                    case \"select_todo\":\n                        toDoManager.toDoItems[toDoId].toDoChecked=!toDoManager.toDoItems[toDoId].toDoChecked;\n                        break;\n                    default: break;\n                }\n                \n    }\n\nToDoItem.prototype.render=function(targetItem,toDoId,toDoManager){\n\n    var descriptionToBeAdded=toDoManager.toDoItems[toDoId].toDoText;\n    var clone=this.createToDoFragment(toDoId,descriptionToBeAdded,toDoManager);\n    var selectedText = clone.querySelector('.todo_item');\n    if(toDoManager.toDoItems[toDoId].toDoStatus){\n        selectedText.classList.remove('todo_item');\n        selectedText.classList.add('todo_item_completed'); \n    }\n    else {\n        selectedText.classList.remove('todo_item_completed'); \n        selectedText.classList.add('todo_item');  \n    }\n    targetItem.replaceWith(clone);\n}\n    \n\n//# sourceURL=webpack:///./ToDoItem.js?");

/***/ }),

/***/ "./ToDoManger.js":
/*!***********************!*\
  !*** ./ToDoManger.js ***!
  \***********************/
/*! exports provided: ToDoManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToDoManager\", function() { return ToDoManager; });\n/* harmony import */ var _ToDoActionBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoActionBar */ \"./ToDoActionBar.js\");\n/* harmony import */ var _ToDoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDoItem */ \"./ToDoItem.js\");\n/* harmony import */ var _ToDoMangerBroker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToDoMangerBroker */ \"./ToDoMangerBroker.js\");\n\n\n\n\nfunction ToDoManager() {\n        this.toDoItems = {};\n    }\n\n   ToDoManager.prototype.init=function() {\n        const toDoActionBar = new _ToDoActionBar__WEBPACK_IMPORTED_MODULE_0__[\"ToDoActionBar\"]();\n        toDoActionBar.init();\n        var that=this;\n        _ToDoMangerBroker__WEBPACK_IMPORTED_MODULE_2__[\"toDoElement\"].addEventListener('toDoAdd',function(){\n            that.createItem(event);\n         });\n         _ToDoMangerBroker__WEBPACK_IMPORTED_MODULE_2__[\"toDoElement\"].addEventListener('toDoDelete',function(){\n             that.deleteAll();\n         });\n         _ToDoMangerBroker__WEBPACK_IMPORTED_MODULE_2__[\"toDoElement\"].addEventListener('toDoDeleteSelected',function(){\n             that.deleteSelected();\n         });\n   }\n    ToDoManager.prototype.createItem=function(event){\n        var toDoDetails=event.detail;\n        this.toDoItems[toDoDetails.toDoId]=toDoDetails;\n        this.render();\n    }\n    ToDoManager.prototype.deleteAll=function(){\n        for(var toDoId in this.toDoItems) {\n          delete this.toDoItems[toDoId];\n             }   \n     this.render();\n    }\n\n    ToDoManager.prototype.deleteSelected=function(){\n        for(var toDoId in this.toDoItems) {\n            var selectedItem = document.querySelector(`[toDoId=\"${toDoId}\"]`);\n            if(selectedItem.querySelector('.select_todo').checked) {\n                delete this.toDoItems[toDoId];   \n            }\n        }\n        this.render();\n    }\n    ToDoManager.prototype.render=function() {\n        var toDoContainer = document.getElementById(\"todo_container\");\n        toDoContainer.innerHTML = \"\";\n        for(var toDoId in this.toDoItems) {\n            const toDoItem = new _ToDoItem__WEBPACK_IMPORTED_MODULE_1__[\"ToDoItem\"]();\n            var descriptionToBeAdded = this.toDoItems[toDoId].toDoText;\n            var cloneItem=toDoItem.createToDoFragment(toDoId,descriptionToBeAdded,this);\n            document.querySelector(\".todo_container\").appendChild(cloneItem);\n\n            var selectedToDoItem = cloneItem.querySelector(\".todo_item\");\n            if(this.toDoItems[toDoId].toDoStatus) {\n                selectedToDoItem.classList.remove('todo_item');\n                selectedToDoItem.classList.add('todo_item_completed'); \n            }\n            else {\n                selectedToDoItem.classList.remove('todo_item_completed'); \n                selectedToDoItem.classList.add('todo_item');  \n            }\n            if(this.toDoItems[toDoId].toDoChecked){\n               var selectedToDo=cloneItem.querySelector('.select_todo');\n               selectedToDo.setAttribute(\"checked\",\"checked\");\n            }\n        }\n    }\n\n\n\n//# sourceURL=webpack:///./ToDoManger.js?");

/***/ }),

/***/ "./ToDoMangerBroker.js":
/*!*****************************!*\
  !*** ./ToDoMangerBroker.js ***!
  \*****************************/
/*! exports provided: toDoElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toDoElement\", function() { return toDoElement; });\nvar toDoElement=document.createElement('div');\n\n\n//# sourceURL=webpack:///./ToDoMangerBroker.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ToDoManger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoManger */ \"./ToDoManger.js\");\n\n(function() {\n    const toDoManager = new _ToDoManger__WEBPACK_IMPORTED_MODULE_0__[\"ToDoManager\"]();\n    toDoManager.init();\n })();\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });