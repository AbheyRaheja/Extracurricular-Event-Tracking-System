// alert("Follow all the steps one by one to complete registration");

const cards = document.querySelectorAll(".card");
// const card_img = document.querySelectorAll(".card img");

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent the card from expanding/collapsing
    const url = button.getAttribute("data-url");
    window.open(url, "_blank");
  });
});

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
      if (card.classList.contains("expanded")) {
        card.classList.remove("expanded");
      } else {
        cards.forEach((otherCard) => {
          otherCard.classList.remove("expanded");
        });
        card.classList.add("expanded");
      }
    }
  });

  const checkbox = card.querySelector('input[type="checkbox"]');
  checkbox.addEventListener("change", (e) => {
    if (checkbox.checked) {
      card.classList.remove("expanded");
      if (card.id <= cards.length) {
        if (card.id == 5) {
          const allCheckboxes = document.querySelectorAll(
            'input[type="checkbox"]'
          );
          const allCheckboxesChecked = Array.from(allCheckboxes).every(
            (checkbox) => checkbox.checked
          );

          if (allCheckboxesChecked) {
            alert(
              "The registration process is completed, after some time login with the new College email provided"
            );

            setTimeout(() => {
              // Show loading screen here
              // Perform the mentioned steps

              // Redirect to index.html
              window.location.href = "../index.html";
              localStorage.clear();
            }, 1000); // Delay in milliseconds (e.g., 2000 for 2 seconds)
          }
        } else {
          cards[card.id].classList.add("expanded");
        }
      }
    }
  });
});
