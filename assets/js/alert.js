const alert = document.getElementById("alert");

if (localStorage.getItem("disable-alert")) {
  removeElement(alert);
} else {
  alert?.classList.remove("Alert--hidden");
}

function removeElement(element) {
  var parent = element?.parentElement;
  parent?.removeChild(element);
}

function closeAlert() {
  removeElement(alert);
  localStorage.setItem("disable-alert", true);
}
