const button = document.getElementById("info_button");
button.addEventListener("click", () => {
  console.log("click");
  if (document.getElementById("info_dropdown").height === "0px") {
    document.getElementById("info_dropdown").height = "200px";
  }
});
