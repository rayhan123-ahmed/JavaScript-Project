const todolist = [
    {
     name : 'Make a dinner',
     dueDate : '2026-02-01'
    },
    {
     name : 'write a notes',
     dueDate : '2026-02-02'
    }
]
  
renderTodo()

// This funstion has been cretaed for rendering the html in the page
function renderTodo() {
     let todolistHtml = ''

  for (let i = 0; i < todolist.length; i++) {
        const todo = todolist [i];
        const name = todo.name;
        const dueDate = todo.dueDate;

        const html = `
        <div class="aling">
          ${name}
        </div>
        <div class="aling">
          ${dueDate}
        </div>
          <button class="delete-btn" onclick = "
           todolist.splice(${i},1)
           renderTodo()
          ">
          Delete
          </button>
        `
        todolistHtml += html
  }
    console.log(todolistHtml);
    
  document.querySelector('.js-div').innerHTML = todolistHtml
}
 


// This funtion has been cretaed for add todo
function addTodo() {
    const inputEl = document.querySelector('.input-js');
    const deletEl = document.querySelector('.dueDate')
    const name = inputEl.value;
    const dueDate = deletEl.value;


    todolist.push(
        {
            name,
            dueDate
        }
    );
    
    inputEl.value = ''
    renderTodo()
}



// This function created for press Enter button 
function keyDwon(event) {
     if (event.key === 'Enter' || event.key === 'Shift') {
        addTodo()
     }
}