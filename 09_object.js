let fruit = {
  name: "Banana",
  price: 1.5,
  quantity: 10,
  owner: "John",
};

// print value of each property of the object
for (let key in fruit) {
  console.log(fruit[key]);
}

// print key of each property of the object
for (let key in fruit) {
  console.log(key);
}

console.log(fruit.owner || "Eric");

let keys = Object.keys(fruit);
console.log(keys);

let values = Object.values(fruit);
console.log(values);

let entries = Object.entries(fruit);
console.log(entries);
