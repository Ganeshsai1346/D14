const numbersToDisplay = 76;

function displayNumbers() {
  let numbersArea = document.getElementById("numbers-area");
  for (let number = 1; number <= numbersToDisplay; number++) {
    let numbers = document.createElement("div");
    numbers.classList.add("number");
    numbers.innerText = number;
    numbersArea.appendChild(numbers);
  }
}

function changeRandomNumbers() {
  const randoms = Math.floor(Math.random() * 76, 1);
  console.log(randoms);
  let randomClicked = document.querySelectorAll(".number");
  randomClicked[randoms - 1].style.backgroundColor = "blue";
}

function executeOnLoad() {
  displayNumbers();
}
window.onload = executeOnLoad;
