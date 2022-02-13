
// (async function(){

    // if (location.protocol) == "http" {
    //     location
    

    const taskInput = document.getElementById("new");
    const addButton = document.getElementById("add");
    const tasks = document.getElementById("tasks");
   

        item.forEach(item => {
        tasks.appendChild(createElementForTask(item)
        )});
    
        taskInput.addEventListener("keyup", processKeyPress);
        addButton.addEventListener('click', addNewItem);

        function processKeyPress(event) {
          addButton.disabled = event.target.value.trim() === "";
            if (event.key === "Enter") {addNewItem();
            }
        }

     const items = [{value: "my item", complete : false},{value: "my item 2", complete : false},
    ];

    for(let item of items){
      const li = createElementForTask(item);
      tasks.appendChild(li);

      createElementForTask(item);
    }
    function createElementForTask(_item) {

      const template = document.getElementById("taskTemplate");
      const newListItem = template.content.cloneNode(true);

      const checkbox = newListItem.querySelector("item-check");
      const text = newListItem.querySelector(".item-text");

      const deleteButton = newListItem.querySelector(".delete");
    
      text.innerText = item.value;
      checkbox.checked = item.complete;


      deleteButton.onclick = function(event) {
        event.target.closest('li').remove();
        items.splice(items.indexOf(items), 1);
        saveItems();
      };
      return newListItem;
      };

      checkbox.onchange = function(event){
          items.complete = event.target.checked;
          // saveItems();
          deleteButton.onclick = function(event) {
            event.target.closest('li').remove();
            items.splice(items.indexOf(items), 1);
            saveItems();
          }
      }; 
      
      // function addNewItem() {
      // const task = {
      //      value: taskInput.value,
      //      complete: false
      // };
      // items.push(task);
      // let newItem = createElementForTask(task);
      // tasks.appendChild(newItem);

      // taskInput.value = "";
      // taskInput.focus();
      // }
    //  await getItems();
     
   

    
      
   
    
     
    //   return newListItem;
    // }
    
   
    
    //   items.push(task);
    //   saveItems();
    
      
      
    // }
    
//     async function getItems() {
//       const request = await fetch("https://todo-api-ff.azurewebsites.net/api/todo",{
//         method:'GET',
//              headers: {'Content-Type' : 'application/json'}
//          });
//           const itemsJSON = (await request.text()) || "[]";
//           return JSON.parse(itemsJSON)
//         }

//       const noItemsFound = "[]";
//       const itemsJSON = localStorage.getItem('items') || noItemsFound;
//       return JSON.parse(itemsJSON);
    
// //  const request = await fetch("https://todo-api-ff.azurewebsites.net/api/todo",{
// //      method:'GET',
// //      headers: {'Content-Type' : 'application/json'}
// //  });
// //   const itemsJSON = (await request.text()) || "[]";
// //   return JSON.parse(itemsJSON)
// // }
    
//     async function saveItems() {
//       const data = JSON.stringify(items);
//       localStorage.setItem('items', data);

//     // const data = JSON.stringify(items);

//     await fetch ("https://todo-api-ff.azurewebsites.net/api/todo", {
//         method: "POST",
//         headers:{ "content-type": "application/json"},
//         body: data
//     });
//     }

//     if ('serviceworker' in navigator){
//         navigator.serviceWorker.register(sw.js)    }
// }());
