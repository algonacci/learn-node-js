// pararell, sequence, and race

const promify = (item, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(item), delay));

const a = () => promify("a", 100);
const b = () => promify("b", 5000);
const c = () => promify("c", 3000);

// console.log(a, b, c);
// console.log(a(), b(), c());

async function pararell() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `pararell is done: ${output1} ${output2} ${output3}`;
}

async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`;
}

async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequence is done: ${output1}, ${output2}, ${output3}`;
}

pararell().then(console.log);
sequence().then(console.log);
race().then(console.log);
