import item from './item.js';

const items = []; 
const hideCheckedItems = false;

const findById = function (id) {
 return store.items.find(item => item.id === id);
}

const addItems = function (name) {
    try {
        item.validateName(itemName);
        this.items.push(item.create(itemName));
        //item.create(itemName);
      } catch (error) {
        console.log(`Cannot add item: ${error.message}`);
      }
}

const findAndToggleChecked = function(id) {
    const myId = this.findById(); 
    myId.checked = !myId.checked;
}

const findAndUpdateName = function(id, newName) {
    try {
        validateName(newName);
        findById(id); 
    } catch(error) {
        console.log(`Cannot update name: ${error.message}`);
    }
}

const findAndDelete = function (id) {
    const index = this.items.findIndex(item => item.id === id);
    this.items.splice(index, 1);
}   



export default {
    addItems, 
    findById,
    findAndToggleChecked,
    findAndDelete,
    findAndUpdateName,
    items,
    hideCheckedItems
  };