function createQueue() {
  const queue = [];
  return {
    enqueue: function (item) {
      queue.unshift(item);
    },

    dequeue: function () {
      queue.pop();
    },

    peek: function () {
      return queue[queue.length - 1];
    },

    size: function () {
      return queue.length;
    },
  };
}

const q = createQueue();
q.enqueue("Learn JavaScript");
q.enqueue("Learn React");
q.enqueue("Learn React Native");
q.enqueue("Learn Node.js");

q.dequeue();
// q.dequeue();
// q.dequeue();
console.log(q.peek());
console.log(q.size());
