function urlSearch(href) {
  let name, value;

  // https://www.example.com/page?id=123&name=John
  let str = decodeURI(href);
  let patrol_rest = str.split("://");

  const result = {};
  // https
  result["patrol"] = patrol_rest[0];

  // www.example.com
  result["host"] = patrol_rest[1].split("/")[0];

  // page/xx/yy
  result["routes"] = patrol_rest[1].split("/")[1].split("?")[0];

  // ["id=123", "name=john"]
  result["params"] = patrol_rest[1].split("/")[1].split("?")[1].split("&");
  // we can also use string.indexOf
  //   str.substring (前闭后开)
  for (let param of result["params"]) {
    result["key"] = param.split("=")[0];
    result["value"] = param.split("=")[1];
  }

  return result;
}

console.log(urlSearch("https://www.example.com/page?id=123&name=John"));
