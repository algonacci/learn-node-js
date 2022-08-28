function createStack() {
  let array = [];
  return {
    push: function (item) {
      array.push(item);
    },

    pop: function () {
      return array.pop();
    },

    peek: function () {
      return array[array.length - 1];
    },

    size: function () {
      return array.length;
    },
  };
}

const books = createStack();
books.push("The effective Engineer");
books.push("The Art of Computer Programming");
books.push("The pragmatic programmer");

console.log(books.peek());
books.pop();
books.pop();
console.log(books.peek());
console.log(books.size());
