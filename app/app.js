const togggleBtn = document.getElementById("checkbox");
const monthText = document.querySelector(".monthly_text");
const yearText = document.querySelector(".yearly_text");

const darkBtn = document.getElementById("dark-Btn");
const cards = document.querySelectorAll(".card");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("active");
  cards.forEach((card) => {
    card.classList.toggle("active");
  });
  if ((document.body.classList.contains = "active")) {
    darkBtn.innerText = "Light Mood";
  } else {
    darkBtnText.innerText = "Dark mood";
    //  cards.classList.remove('active')
  }
});

function containerToggle(id) {
  const container = document.querySelectorAll(".container");
  for (let cont of container) {
    cont.style.display = "none";
  }
  document.getElementById(id).style.display = "flex";
}

togggleBtn.addEventListener("change", () => {
  if (togggleBtn.checked) {
    containerToggle("yearly");
    yearText.classList.add("active");
    monthText.classList.add("active");
  } else {
    containerToggle("monthly");
    monthText.classList.remove("active");
    yearText.classList.remove("active");
  }
});
