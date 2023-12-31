const original = { name: "jeff" };

const reactive = new Proxy(original, {
  get(target, key) {
    console.log("Tracking: ", key);
    return target[key];
  },
  set(target, key, value) {
    console.log("updating UI...");
    return Reflect.set(target, key, value);
  },
});

reactive.name; // logs ''trackiing''

reactive.name = "bob"; // logs "updating UI"

// trigger the side effect behind the scene
// also commonly used in large object
