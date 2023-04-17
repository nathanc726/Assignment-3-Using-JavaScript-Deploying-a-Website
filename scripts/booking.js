/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

const fulldaycost = 35;
const halfdaycost = 20;
const dayButtons = document.querySelectorAll('.day-selector li');
const fullButton = document.getElementById('full');
const halfButton = document.getElementById('half');
const clearButton = document.getElementById('clear-button');
const cost = document.getElementById('calculated-cost');

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

let numberOfDays = 0;
let selectedDays = [];

// highlight or un-highlight day and re-calculation the cost
dayButtons.forEach(button => {
    button.addEventListener('click', function() {
      const day = this.id;
      if (this.classList.contains('clicked')) {
        this.classList.remove('clicked');
        removeSelectedDays(day);
      } else {
        this.classList.add('clicked');
        updateSelectedDays(day);
      }
      costCalculation();
    });
  });
  
// selected day and add into numberOfDays for calculation
function updateSelectedDays(day) {
    if (!selectedDays.includes(day)) {
        selectedDays.push(day);
        numberOfDays++;
    }}

// remove if the day is already selected
function removeSelectedDays(day) {
    const index = selectedDays.indexOf(day);
    if (index > -1) {
        selectedDays.splice(index, 1);
        numberOfDays--;
    }}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

// function reset variables to default 
function reset() {
    selectedDays = [];
    numberOfDays = 0;
    dayButtons.forEach(button => button.classList.remove('clicked'));
    fullButton.classList.add('clicked');
    halfButton.classList.remove('clicked');
    costPerDay = 35;
    cost.innerHTML = '0';
  }

clearButton.addEventListener('click', function() {
    reset();
  });

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfButton.addEventListener('click', function() {
    costPerDay = halfdaycost;
    halfButton.classList.add('clicked');
    fullButton.classList.remove('clicked');
    costCalculation();
  });
  
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullButton.addEventListener('click', function() {
    costPerDay = fulldaycost;
    fullButton.classList.add('clicked');
    halfButton.classList.remove('clicked');
    costCalculation();
  });

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

// function update the result of calculation
function costCalculation() {
    cost.innerHTML = numberOfDays * costPerDay;
  }

// initialize the page
  reset();