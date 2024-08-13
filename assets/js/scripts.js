// This is your main script file
window.addEventListener(
  "load",
  () => {
    const check = document.querySelector("#terminCheck");
    const button = document.querySelector("#terminButton");
    check.addEventListener("change", () => {
      if (check.checked) {
        button.classList.remove("disabled");
      } else {
        button.classList.add("disabled");
      }
    });
  },
  false
);
