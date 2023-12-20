const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  let rowData = [];
  while ((line = await readline())) {
    rowData.push(line);
    // 接受几个参数就写几
    if (rowData.length == 4) {
      // 获取参数
      let p1 = rowData[0];
      let p2 = rowData[1];
      // ....

      // 自行output
      // ....
    }
  }
})();
