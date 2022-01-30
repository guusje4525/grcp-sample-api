const fs = require('fs')

interface TodoItem {
  id: number;
  text: string;
}

export function create(item: TodoItem) {
  const todos = JSON.parse(fs.readFileSync(__dirname + '/../../todos.json', 'utf8'));

  const todoItem = {
    id: todos.length +1,
    text: item.text
  }
  todos.push(todoItem);

  fs.writeFileSync(__dirname + '/../../todos.json', JSON.stringify(todos))

  return todoItem;
}

export function list() {
  const data = JSON.parse(fs.readFileSync(__dirname + '/../../todos.json', 'utf8'));
  return { items: data };
}

