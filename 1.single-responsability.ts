//@ts-nocheck
//#region Example 1
//BAD - Too coupled
class Products {
  products = [];
  getAllProducts() {
    const connection = new SQLConnection().get("products");
    return connection.data;
  }
}

//BETTER
class Connection {
  SQLConnection = new SQLConnection();
  get(table: string) {
    return this.SQLConnection.get(table);
  }
}

class Products {
  products = [];
  constructor(connection: Connection);
  getAllProducts() {
    this.products = this.connection.get("products").data;
  }
}
//#endregion

//#region Example 2
//Bad
class Task {}

class TaskManager {
  tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  completeTask(index: number): void {
    this.tasks[index].markAsCompleted();
  }

  displayTasks(): void {
    // ...logic
  }
}

const taskManage = new TaskManager();
const task1 = new Task("Completar el informe");

taskManager.addTask(task1);
taskManager.displayTasks();

taskManager.completeTask(0);
taskManager.displayTasks();

//Better
class TaskManager {
  private tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  completeTask(index: number): void {
    this.tasks[index].markAsCompleted();
  }

  getTasks(): Task[] {
    return this.tasks;
  }
}

class UIManager {
  displayTasks(tasks: task[]): void {
    // ...logic
  }
}

const taskManager = new TaskManager();
const uiManager = new UIManager();

const task1 = new Task("Completar el informe");
taskManager.addTask(task1);

const tasks = taskManager.getTasks();
uiManager.displayTasks(tasks);

taskManager.completeTask(0);
uiManager.displayTasks(tasks);
//#endregion
