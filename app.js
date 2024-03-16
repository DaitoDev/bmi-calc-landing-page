// INPUTS
const heightInpt = document.getElementById("ht");
const weightInpt = document.getElementById("wt");

// RESULTS
const yourBMI = document.querySelector(".results p");
const bmiResults = document.querySelector(".bmiResults");
const result = document.querySelector(".result");

function displayResults(r) {
  yourBMI.classList.add("active");
  bmiResults.innerText = `${r}`;
  result.innerText = "you fat";
}

function getBMI() {
  const results = weightInpt.value * heightInpt.value;
  console.log(results);
  displayResults(results);
}

weightInpt.addEventListener("keyup", getBMI);


// THIS JS SECTION WAS IS PLAY. THIS PROJECT WAS LAYOUT BASED PRACTICE 