// Get all checkboxes
const checkboxes = document.querySelectorAll(".card-checkbox");
var flag = 0;

// Add event listener to each checkbox
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    // Get the checkbox ID and its checked state
    const checkboxId = event.target.id;
    const isChecked = event.target.checked;

    // Store the checkbox data in localStorage
    localStorage.setItem(checkboxId, isChecked);
  });
});

// On page load, retrieve the checkbox data from localStorage and set the checkbox state
window.addEventListener("load", () => {
  checkboxes.forEach((checkbox) => {
    const checkboxId = checkbox.id;
    const storedValue = localStorage.getItem(checkboxId);

    if (storedValue !== null) {
      checkbox.checked = storedValue === "true";
      neededID = checkbox.id.split("-")[1];
      document.getElementById(neededID).classList.remove("expanded");
      if (neededID < 5) {
        document
          .getElementById(parseInt(neededID) + 1)
          .classList.add("expanded");
      }
    }
  });
});
