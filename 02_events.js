const EventEmitter = require('events');
const celebrity = new EventEmitter();

celebrity.on('race win', () => {
    console.log("CONGRATS YOU ARE THE BEST");
});

celebrity.on('race win', () => {
    console.log("Yoww I could have better than that");
});

celebrity.emit('race win');