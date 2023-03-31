self.addEventListener("active", function (event) {
  console.log("push");
});
self.addEventListener("push", function (event) {
  const reg = navigator.serviceWorker.getRegistration();
  console.log(reg);
});
