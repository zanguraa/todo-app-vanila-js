const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data;
};

const addTodos = async () => {
  const todos = await getTodos();
  const todosDiv = document.querySelector(".todos");
  todos.forEach((todo) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const todoTitle = document.createElement("h3");
    todoTitle.innerText = todo.title;
    const todocheck = document.createElement("input");
    todocheck.setAttribute("type", "checkbox");
    todocheck.classList.add("todo-check");
    todocheck.checked = todo.completed;
    if (todo.completed) {
      todoTitle.style.textDecoration = "line-through";
    } else {
      todoTitle.style.textDecoration = "none";
    }
    todocheck.addEventListener("change", () => {
      if (todocheck.checked) {
        todoTitle.style.textDecoration = "line-through";
      } else {
        todoTitle.style.textDecoration = "none";
      }
    });
    todoDiv.appendChild(todocheck);

    todoDiv.addEventListener("click", () => {
      todocheck.checked = !todocheck.checked;
      if (todocheck.checked) {
        todoTitle.style.textDecoration = "line-through";
      } else {
        todoTitle.style.textDecoration = "none";
      }
    });

    todoDiv.appendChild(todoTitle);
    todosDiv.appendChild(todoDiv);
  });
};

addTodos();
