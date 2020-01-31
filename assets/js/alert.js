// Hide alert if close button is clicked before
if (localStorage.getItem("disable-alert")) {
  document.getElementById("alert").classList.add("Alert--hidden");
}

const closeAlert = element => {
  element.parentElement.classList.add("Alert--hidden");
  localStorage.setItem("disable-alert", true);
};
