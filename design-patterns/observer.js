function Subject() {
  this.observers = [];
}

Subject.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
  },

  unsubscribe: function (fnToRemove) {
    this.observers = this.observers.filter((fn) => {
      return fn !== fnToRemove;
    });
  },

  broadcast(data) {
    for (let i = 0; i < this.observers.length; i++) {
      this.observers[i](data);
    }
  },
};

const subject = new Subject();
subject.observers
subject.subscribe((data) => {
  console.log("callback 1 ", data);
});

subject.broadcast("helo im data");
