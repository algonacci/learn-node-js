const REQUEST_TIMEOUT = 5000;

function encrypt() {
  return "encrypted";
}

function send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`Sending data ${encryptedData} to ${url}`);
}

module.exports = {
  REQUEST_TIMEOUT,
  send,
};
