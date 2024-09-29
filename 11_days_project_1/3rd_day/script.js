const textInputField=document.querySelector("#text-input-field");
    const addButton=document.querySelector("#add-button");
    const todosContainer= document.querySelector(".todos-container");

addButton.addEventListener("click" , ()=>{
    if(textInputField.value.trim().length==="")
        return ;
      console.log(textInputField.value.trim())
    // create div 
    const todoItemContainer = document.createElement("div");
    todoItemContainer.classList.add("todo-item-container");
    todosContainer.appendChild(todoItemContainer);


    // create p element add id=todo-text
    const todoText=document.createElement("p");
    todoText.id="todo-text";
    todoText.innerText = textInputField.value;
    todoItemContainer.appendChild(todoText);

//  cteate button
   const editButton=document.createElement('button');
   editButton.id="edit-button";
   editButton.innerHTML='<i class="fa-regular fa-pen-to-square">'




    textInputField.value="";

})

