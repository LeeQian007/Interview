let myObj = { name: "Json" };

const list = [myObj];

myObj = null;

console.log(list); // still get {name: "json"}

let myObj2 = { name: "Json2" };
const weakRef = new WeakSet();
weakRef.add(myObj2);
myObj2 = null;
console.log(weakRef); // cannot get {name: "json"}
