import Toast from "./Toast.js";

// const toast = new Toast({
//   //   position: "bottom-right",
//   text: "hey",

//   //   onClose: () => alert("la"),
//   //   autoClose: false,
//   canClose: false,
// });

// setTimeout(() => {
//   toast.update({ text: "to bye", position: "top-left" });
// }, 2000);

document.querySelector(".click").addEventListener("click", () => {
  const toast = new Toast({
    text: "yeh",
    // autoClose: false,

    position: "top-right",
    // showProgress: false,
  });

  // setTimeout(() => {
  //   toast.update({ autoClose: 2000 });
  // }, 1000);
});
