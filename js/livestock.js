// // Get the select element
// const select = document.getElementById('sector');

// // Get the div element for displaying the answer
// const answer = document.getElementById('answer');

// // Listen for changes to the select element
// select.addEventListener('change', (event) => {
//   // Get the value of the selected option
//   const sector = event.target.value;

//   // Display the appropriate message based on the selected option
//   switch (sector) {
//     case 'beef_cattle':
//       answer.innerHTML = 'Beef cattle are raised for meat production.';
//       break;
//     case 'dairy_cattle':
//       answer.innerHTML = 'Dairy cattle are raised for milk production.';
//       break;
//     case 'sheep':
//       answer.innerHTML = 'Sheep are raised for meat, milk, and wool production.';
//       break;
//     case 'goats':
//       answer.innerHTML = 'Goats are raised for meat, milk, and fiber production.';
//       break;
//     case 'pigs':
//       answer.innerHTML = 'Pigs are raised for meat production.';
//       break;
//     case 'horses':
//       answer.innerHTML = 'Horses are raised for transportation, sport, and other purposes.';
//       break;
//     default:
//       answer.innerHTML = '';
//       break;
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
      case 'beef_cattle':
               answer.innerHTML = '<h3>Beef cattle</h3> Beef cattle are raised for meat production.';
               break;
             case 'dairy_cattle':
               answer.innerHTML = '<h3>Dairy cattle</h3> Dairy cattle are raised for milk production.';
               break;
             case 'sheep':
               answer.innerHTML = '<h3>Sheep</h3> Sheep are raised for meat, milk, and wool production.';
               break;
             case 'goats':
               answer.innerHTML = '<h3>Goats</h3> Goats are raised for meat, milk, and fiber production.';
               break;
             case 'pigs':
               answer.innerHTML = '<h3>Pigs</h3> Pigs are raised for meat production.';
               break;
             case 'horses':
               answer.innerHTML = '<h3>Horses</h3> Horses are raised for transportation, sport, and other purposes.';
               break;
    
      default:
        answerDiv.innerHTML = '';
        break;
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
  const equipment = document.getElementById('equipment').checked;
  const healthManagement = document.getElementById('health_management').checked;

  // Display the selected requirements
  let selectedRequirements = '<p>You have selected:</p><ul>';
  if (feed) {
    selectedRequirements += '<li>Feed: Providing your animals with adequate nutrition is essential for their health and productivity</li>';
  }
  if (water) {
    selectedRequirements += '<li>Water: Providing your animals with clean and fresh water is crucial for maintaining good health</li>';
  }
  if (shelter) {
    selectedRequirements += '<li>Shelter: Providing your animals with a comfortable and clean shelter is important for protecting them from extreme weather conditions</li>';
  }
  if (equipment) {
    selectedRequirements += '<li>Equipment: Depending on your livestock sector, you may need equipment such as handling facilities or shearing tools</li>';
  }
  if (healthManagement) {
    selectedRequirements += '<li>Health Management: Regular health check-ups and vaccinations help to prevent and control diseases in your herd</li>';
  }
  selectedRequirements += '</ul>';

  answerDiv.innerHTML += selectedRequirements;
});
