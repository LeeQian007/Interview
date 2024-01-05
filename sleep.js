// setTimeout(() => {
//   console.log("execute!");
// }, 1000);

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function delayedOperation() {
  console.log("start...");
  await delay(1000);
  console.log("end...");
}

delayedOperation();
