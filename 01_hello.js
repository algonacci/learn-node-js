const mission = process.argv[2];

if (mission === "learn") {
    console.log("Time to write Node.js code");
} else {
    console.log(`Is ${mission} really more fun?`);
}