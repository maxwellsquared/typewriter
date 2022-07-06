const sentence = "hello there from lighthouse labs";

myTime = 50;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
    }, myTime) // <= 1s delay to make it noticeable. Can dial it down later.
  myTime += 50;
};
const newLine = setTimeout(() => {
  console.log('\n');
  }, myTime
);