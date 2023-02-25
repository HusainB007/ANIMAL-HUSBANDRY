
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
      case 'milk_production':
        answerDiv.innerHTML = '<p><h3>Milk production</h3> Milk production involves the collection of milk from cows or buffaloes. You will need equipment such as milking machines and cooling tanks. It is important to maintain hygiene and ensure the health of your animals.</p>';
        break;
      case 'cheese_production':
        answerDiv.innerHTML = '<p><h3>Cheese production</h3> Cheese production involves processing milk into cheese. You will need cheese making equipment such as a cheese vat, cheese press, and cheese molds. You will also need to ensure the quality and safety of your milk supply.</p>';
        break;
      case 'butter_production':
        answerDiv.innerHTML = '<p><h3>Butter production</h3> Butter production involves the processing of cream into butter. You will need butter making equipment such as a churn, a butter worker, and packaging equipment. It is important to maintain the quality of your cream supply.</p>';
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
  const milkingEquipment = document.getElementById('milking_equipment').checked;
  const healthManagement = document.getElementById('health_management').checked;

  // Display the selected requirements
  let selectedRequirements = '<p>You have selected:</p><ul>';
  if (feed) {
    selectedRequirements += '<li>Feed: Proper feed is essential for the health and productivity of dairy animals</li>';
  }
  if (water) {
    selectedRequirements += '<li>Water: Adequate and clean water supply is crucial for maintaining good health of dairy animals</li>';
  }
  if (shelter) {
    selectedRequirements += '<li>Shelter: Dairy animals require a comfortable and clean shelter to protect them from extreme weather conditions</li>';
  }
  if (milkingEquipment) {
    selectedRequirements += '<li>Milking Equipment: Milking machines help to reduce the milking time and increase efficiency in milk production</li>';
  }
  if (healthManagement) {
    selectedRequirements += '<li>Health Management: Regular health check-ups and vaccinations help to prevent and control diseases in dairy animals</li>';
  }
  selectedRequirements += '</ul>';

  answerDiv.innerHTML += selectedRequirements;
});
