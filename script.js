console.log("hello world");

let inputDiv = document.getElementById("inputDiv");
let inputToAddPlan = document.querySelector(".addPlan");
inputToAddPlan.placeholder = "Write your plan and click Enter";
let plans = document.querySelector(".plans");

inputToAddPlan.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && inputToAddPlan.value !== "") {
    let planDiv = document.createElement("div");
    planDiv.appendChild(Plans());
    planDiv.appendChild(deletePlan());
    planDiv.appendChild(redeclarePlan());
    plans.prepend(planDiv);
    inputToAddPlan.value = "";
  }
});

function Plans() {
  let planInput = document.createElement("input");
  planInput.value = inputToAddPlan.value;
  planInput.classList.add("planInput");
  planInput.setAttribute("readonly", "readonly");
  return planInput;
}

function deletePlan() {
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.style.backgroundColor = "red";
  deleteButton.addEventListener("click", (e) => {
    console.log(deleteButton.parentElement);
    deleteButton.parentElement.remove();
  });
  return deleteButton;
}

function redeclarePlan() {
  let redeclareButton = document.createElement("button");
  redeclareButton.classList.add("redeclare_button");
  redeclareButton.innerText = "Redeclare";
  redeclareButton.addEventListener("click", (e) => {
    redeclareButton.classList.toggle("save_button");

    if (redeclareButton.innerText === "Redeclare") {
      console.log(e.target.parentElement.firstChild);
      e.target.parentElement.firstChild.readOnly = false;
      redeclareButton.innerText = "Save";
      e.target.parentElement.firstChild.focus();
    } else {
      e.target.parentElement.firstChild.readOnly = true;
      redeclareButton.innerText = "Redeclare";
    }
  });
  return redeclareButton;
}
