const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  let rowData = [];
  while ((line = await readline())) {
    console.log(line);
    rowData.push(line);
    if (rowData.length == 2) {
      let str = rowData[0].toLowerCase();
      let code = rowData[1].toLowerCase();
      let strArr = str.split("");
      // e.g. A -- 2
      let obj = {};
      for (let i of strArr) {
        if (obj[i]) obj[i]++;
        else obj[i] = 1;
      }
      console.log(obj[code] || 0);
    }
  }
})();
