const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click', addTodo);

function addTodo(event) {
  event.preventDefault();
  const newTodo = todoInput.value;

  // Alert if no input
  if (newTodo === '') {
    alert('Please enter a task.');
    return;
  }

  const todoLi = document.createElement('li');
  todoLi.innerText = newTodo;
  todoLi.classList.add('todo');

  // Button to complete the task
  const completeButton = document.createElement('button');
  completeButton.classList.add('complete-btn', 'fas', 'fa-check-circle'); // Initial icon
  completeButton.addEventListener('click', () => {
    todoLi.classList.toggle('strike-through');
    completeButton.classList.toggle('fa-check-circle');
    completeButton.classList.toggle('strike-through');
  });

  // Button to delete the task
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add('trash-btn');
  deleteButton.addEventListener('click', deleteTodo);

  todoLi.append(completeButton, deleteButton);
  todoList.appendChild(todoLi);
  todoInput.value = '';
}

function deleteTodo(event) {
  const todo = event.target.parentElement;
  todo.remove();
}