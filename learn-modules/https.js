const { send, read } = require("./src");

function makeRequest(url, data) {
  send(url, data);
  return read();
}

const responseData = makeRequest("http://google.com/", "data");
console.log(responseData);
