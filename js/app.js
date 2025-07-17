const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// to do added

addBtn.addEventListener('click', () => {
  const text = input.value.trim();
  if (text !== "") {
    addTodoItem(text);
    input.value = "";
  }
});

function addTodoItem(text) {
  const li = document.createElement('li');
  li.className = "flex justify-between items-center bg-gray-200 px-4 py-2 rounded";

  const span = document.createElement('span');
  span.textContent = text;

  const btns = document.createElement('div');
  btns.className = "space-x-2";


  //   btn edit
  const editBtn = document.createElement('button');
  editBtn.textContent = "Edit";
  editBtn.className = "text-yellow-600 hover:underline cursor-pointer";
  editBtn.onclick = () => editTodoItem(span, editBtn);


  




}