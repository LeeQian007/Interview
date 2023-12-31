const zombie = {
  eatBrain() {
    return "yummy";
  },
};

const chad = Object.create(zombie, {
  name: { value: "chad" },
  //   sex: "male",
});

console.log(chad.name);
