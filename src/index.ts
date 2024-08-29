type Task = {
  name: string;
  description?: string;
};

let data: Array<Task> = [];

export function reset_data() {
  data = [];
}
export function add_task(task: Task, position: number = -1) {

  const dataLength = data.length;

  if (position < 0) {
    position = dataLength;
  }

  if (position > dataLength) {
    throw new Error(`Invalid position ${position}! Valid numbers are 0 to ${dataLength}`);
  }

  const repeatedTask = data.find(t => t.name === task.name);

  if (repeatedTask) {
    throw new Error("Task already exists!");
  }

  const leftData = data.slice(0, position);
  const rightData = data.slice(position);
  data = [...leftData, task, ...rightData];
}

export function remove_task(name: string) {
  const indexToRemove = data.findIndex(t => t.name === name);

  if (indexToRemove < 0) {
    throw new Error(`Task '${name}' not found!`);
  }

  return data.splice(indexToRemove, 1)[0];
}

export function find_task(name: string) {
  return data.findIndex(t => t.name === name);;
}

export function move_task(name: string, new_position: number) {

  const indexFrom = find_task(name);

  if (indexFrom < 0) {
    throw new Error(`Task '${name}' not found!`);
  }

  if (new_position > data.length - 1 || new_position < 0)
    throw new Error(`Invalid position ${new_position}! Valid numbers are 0 to ${data.length - 1}`);

  const task = remove_task(name);

  add_task(task, new_position);
}

export function list_tasks() {
  return data;
}

import express from "express";

const app = express();
const port = 8080;

app.use(express.json());

app.get("/:name", (req, res) => {
  const { name } = req.params;
  return res.json(find_task(name));
});
app.get("/", (req, res) => {
  const { name } = req.query as { name: string; };
  if (name)
    return res.json(find_task(name));
  return res.json(list_tasks());
});
app.post("/", (req, res) => {
  const { name, description, position } = req.body;
  return res.json(add_task({ name, description }, position));
});
app.delete("/:name", (req, res) => {
  const { name } = req.params;
  return res.json(remove_task(name));
});
app.post("/move", (req, res) => {
  const { name, new_position } = req.body;
  return res.json(move_task(name, new_position));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

