const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const loop = (url) => {
  for (url of urls) {
    console.log(url);
  }
};

loop();

const getData = async function () {
  const arrayOfPromises = urls.map((urls) => fetch(urls));
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
};

getData();
