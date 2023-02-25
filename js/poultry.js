// let select = document.getElementById("sector");
// let answer = document.getElementById("answer");

// select.addEventListener("change", function() {
//   if (select.value === "") {
//     answer.innerHTML = "";
//   } else if (select.value === "chicken_breeding") {
//     answer.innerHTML = "<h3>Chicken Breeding</h3><p>Chicken breeding involves selecting and mating the best chickens to produce high-quality offspring. This requires knowledge of genetics and careful record-keeping to ensure the best breeding outcomes.</p>";
//   } else if (select.value === "egg_production") {
//     answer.innerHTML = "<h3>Egg Production</h3><p>Egg production involves raising hens to produce eggs for consumption. This requires knowledge of nutrition, egg quality, and egg handling to ensure a safe and high-quality product.</p>";
//   } else if (select.value === "meat_production") {
//     answer.innerHTML = "<h3>Meat Production</h3><p>Meat production involves raising chickens or other birds for meat. This requires knowledge of animal husbandry, nutrition, and processing to ensure a safe and high-quality product.</p>";
//   }
// });


const sectorSelect = document.getElementById('sector');

// Get the div element to show the answers
const answerDiv = document.getElementById('answer');

// Get the form element
const requirementsForm = document.getElementById('requirements');




// Add an event listener to the select element
sectorSelect.addEventListener('change', function() {
  // Get the selected option value
  const sector = this.value;

  // Check if a sector is selected
  if (sector) {
    // Show the requirements form
    requirementsForm.style.display = 'block';
    
    // Display the information based on the selected sector
    switch(sector) {
      case 'egg_production':
        answerDiv.innerHTML = '<p><h3>Egg production</h3> Egg production involves raising chickens to lay eggs. You will need a chicken coop, nesting boxes, and feeding and watering equipment. It is important to maintain the health of your birds and ensure they have adequate lighting and ventilation.</p>';
        break;
        case 'chicken_breeding':
          answerDiv.innerHTML = '<h3>Chicken Breeding</h3><p>Chicken breeding involves selecting and mating the best chickens to produce high-quality offspring. This requires knowledge of genetics and careful record-keeping to ensure the best breeding outcomes.</p>';
          break;
      case 'meat_production':
        answerDiv.innerHTML = '<p><h3>Meat production</h3> Meat production involves raising chickens for meat. You will need a chicken coop, feeding and watering equipment, and equipment for processing the meat. It is important to maintain the health of your birds and ensure they have adequate space and ventilation.</p>';
        break;
      default:
        answerDiv.innerHTML = '';
    }
  } else {
    // Hide the requirements form and answer div if no sector is selected
    requirementsForm.style.display = 'none';
    answerDiv.innerHTML = '';
  }
});

// Add an event listener to the form element
requirementsForm.addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the values of the checked checkboxes
  const feed = document.getElementById('feed').checked;
  const water = document.getElementById('water').checked;
  const shelter = document.getElementById('shelter').checked;
  const lighting = document.getElementById('lighting').checked;
  const ventilation = document.getElementById('ventilation').checked;

  // Display the selected requirements
  let selectedRequirements = '<p>You have selected:</p><ul>';
  if (feed) {
    selectedRequirements += '<li>Feed: Proper feed is essential for the health and productivity of poultry</li>';
  }
  if (water) {
    selectedRequirements += '<li>Water: Adequate and clean water supply is crucial for maintaining good health of poultry</li>';
  }
  if (shelter) {
    selectedRequirements += '<li>Shelter: Poultry require a clean and comfortable shelter to protect them from extreme weather conditions and predators</li>';
  }
  if (lighting) {
    selectedRequirements += '<li>Lighting: Proper lighting helps to regulate the birds biological rhythms and stimulate egg production</li>';
  }
  if (ventilation) {
    selectedRequirements += '<li>Ventilation: Good air circulation is important for maintaining good health and preventing the spread of diseases among poultry</li>';
  }
  selectedRequirements += '</ul>';

  answerDiv.innerHTML += selectedRequirements;
});

   
  
