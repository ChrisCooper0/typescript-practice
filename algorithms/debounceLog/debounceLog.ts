// Write a function which logs to the console after 1000ms

const debounceLog = () => {
  setTimeout(() => {
    console.log("log");
  }, 1000);
};
console.log(debounceLog());
