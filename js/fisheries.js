// // Get the select element
// const selectElement = document.getElementById("sector");

// // Get the div element where the answer will be displayed
// const answerDiv = document.getElementById("answer");

// // Add an event listener to the select element
// selectElement.addEventListener("change", function() {

//   // Get the selected value
//   const selectedValue = selectElement.value;

//   // Clear the answer div
//   answerDiv.innerHTML = "";

//   // Check which option was selected and display the appropriate answer
//   switch(selectedValue) {
//     case "fish_farming":
//       answerDiv.innerHTML = "Fish farming involves the breeding and raising of fish in tanks, ponds, or other controlled environments.";
//       break;
//     case "commercial_fishing":
//       answerDiv.innerHTML = "Commercial fishing involves catching fish and other aquatic organisms on a large scale for sale or consumption.";
//       break;
//     case "aquaculture":
//       answerDiv.innerHTML = "Aquaculture involves the breeding and raising of fish, shellfish, and other aquatic organisms in tanks, ponds, or other controlled environments.";
//       break;
//     default:
//       answerDiv.innerHTML = "Please select a sector.";
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
      case 'aquaculture':
        answerDiv.innerHTML = '<p><h3>AQUACULTURE</h3> Aquaculture involves the farming of aquatic animals such as fish, shrimp, and oysters. You will need equipment such as fish tanks, aerators, and feeders. It is important to maintain water quality and ensure the health of your animals.</p>';
        break;
      case 'commercial_fishing':
        answerDiv.innerHTML = '<p><h3>COMMERCIAL FISHING</h3> Commercial fishing involves the capture of fish and other marine animals for sale. You will need fishing equipment such as nets, traps, and lines. It is important to follow regulations and quotas to ensure the sustainability of your fishing operations.</p>';
        break;
        case 'fish_farming':
        answerDiv.innerHTML = '<p><h3>FISH FARMING</h3> Fish farming or pisciculture involves commercial breeding of fish, usually for food, in fish tanks or artificial enclosures such as fish ponds.</p>';
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
  const fishingEquipment = document.getElementById('fishing_equipment').checked;
  const healthManagement = document.getElementById('health_management').checked;

  // Display the selected requirements
  let selectedRequirements = '<p>You have selected:</p><ul>';
  if (feed) {
    selectedRequirements += '<li>Feed: Proper feed is essential for the health and productivity of aquatic animals in aquaculture operations</li>';
  }
  if (water) {
    selectedRequirements += '<li>Water: Adequate and clean water supply is crucial for maintaining good health of aquatic animals in aquaculture operations</li>';
  }
  if (shelter) {
    selectedRequirements += '<li>Shelter: Aquatic animals in aquaculture operations may require shelter to protect them from predators or to provide a suitable environment for breeding</li>';
  }
  if (fishingEquipment) {
    selectedRequirements += '<li>Fishing Equipment: Fishing equipment such as nets, traps, and lines are essential for commercial fishing operations</li>';
  }
  if (healthManagement) {
    selectedRequirements += '<li>Health Management: Regular health check-ups and treatments help to prevent and control diseases in aquatic animals in aquaculture operations</li>';
  }
  selectedRequirements += '</ul>';

  answerDiv.innerHTML += selectedRequirements;
});
