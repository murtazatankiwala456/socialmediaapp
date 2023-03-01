// popover working function form bootstrap
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

// gender select

const radioBtn1 = document.querySelector("#flexRadioDefault1");
const radioBtn2 = document.querySelector("#flexRadioDefault2");
const radioBtn3 = document.querySelector("#flexRadioDefault3");
const genderSelect = document.querySelector("#genderSelect");

if (window.location.pathname === "/") {
  radioBtn1.addEventListener("change", () => {
    genderSelect.classList.add("d-none");
  });
  radioBtn2.addEventListener("change", () => {
    genderSelect.classList.add("d-none");
  });
  radioBtn3.addEventListener("change", () => {
    genderSelect.classList.remove("d-none");
  });
}
