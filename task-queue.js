class TaskQueue {
  constructor(max) {
    this.max = max;
    this.taskList = [];
  }
  addTask(task) {
    this.taskList.push(task);
  }
  run() {
    const length = this.taskList.length;
    if (!length) {
      return;
    }
    const min = Math.min(this.max, length);
    for (let i = 0; i < min; i++) {}
  }
}

// 模拟请求
const mockRequest = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Request completed");
    }, 1000);
  });
};

const taskQueue = new TaskQueue(5);
// 添加20个 模拟请求 到任务队列
for (let i = 1; i <= 20; i++) {
  const task = createTask(i);
  taskQueue.addTask(task);
}
