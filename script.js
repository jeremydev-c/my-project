alert("Welcome to the Waste Sorting Guide! Type an item in the search box or click on a chip to find out how to dispose of it properly.");
let mybutton = document.getElementById("button1")
mybutton.addEventListener('click', function () {
  alert("You clicked the button! Scroll to the top of the page."); }
);

// Waste sorting database
const wasteData = {
  "plastic bottle": {
    bin: "recycle",
    icon: "♻️",
    label: "Recycle",
    tip: "Rinse it out and remove the cap. Crush it to save space. Most curbside programs accept #1 and #2 plastics."
  },
  "pizza box": {
    bin: "compost",
    icon: "🟤",
    label: "Compost",
    tip: "Greasy pizza boxes contaminate paper recycling. Tear off clean parts to recycle, and compost the greasy sections."
  },
  "banana peel": {
    bin: "compost",
    icon: "🟤",
    label: "Compost",
    tip: "Banana peels break down quickly and add potassium to compost. Never put them in recycling."
  },
  "battery": {
    bin: "special",
    icon: "⚠️",
    label: "Special Disposal",
    tip: "Batteries contain toxic heavy metals. Take them to a designated drop-off point — never put them in regular bins."
  },
  "glass jar": {
    bin: "recycle",
    icon: "♻️",
    label: "Recycle",
    tip: "Rinse the jar and remove the lid. Glass can be recycled endlessly without losing quality."
  },
  "aluminium can": {
    bin: "recycle",
    icon: "♻️",
    label: "Recycle",
    tip: "Aluminium cans are one of the most recyclable items. Recycling one can saves enough energy to run a TV for 3 hours."
  },
  "aluminum can": {
    bin: "recycle",
    icon: "♻️",
    label: "Recycle",
    tip: "Aluminum cans are one of the most recyclable items. Recycling one can saves enough energy to run a TV for 3 hours."
  },
  "styrofoam": {
    bin: "landfill",
    icon: "🗑️",
    label: "Landfill",
    tip: "Styrofoam is not recyclable in most areas and takes 500+ years to decompose. Avoid using it when possible."
  },
  "coffee cup": {
    bin: "landfill",
    icon: "🗑️",
    label: "Landfill",
    tip: "Most disposable coffee cups have a plastic lining that makes them non-recyclable. Bring a reusable cup instead!"
  },
  "newspaper": {
    bin: "recycle",
    icon: "♻️",
    label: "Recycle",
    tip: "Newspapers are easily recyclable. Keep them dry and bundle them together."
  },
  "food scraps": {
    bin: "compost",
    icon: "🟤",
    label: "Compost",
    tip: "Food scraps make excellent compost. Keep meat and dairy out of home compost bins to avoid pests."
  },
  "plastic bag": {
    bin: "special",
    icon: "⚠️",
    label: "Special Disposal",
    tip: "Plastic bags jam recycling machinery. Return them to grocery store drop-off bins or reuse them."
  },
  "cardboard": {
    bin: "recycle",
    icon: "♻️",
    label: "Recycle",
    tip: "Flatten cardboard boxes to save space. Remove any tape or labels if possible. Keep it dry."
  },
  "light bulb": {
    bin: "special",
    icon: "⚠️",
    label: "Special Disposal",
    tip: "CFL bulbs contain mercury — take them to a hazardous waste drop-off. LED and incandescent bulbs go in the landfill."
  },
  "egg carton": {
    bin: "compost",
    icon: "🟤",
    label: "Compost",
    tip: "Paper egg cartons can be composted or recycled. Styrofoam egg cartons go in the landfill."
  },
  "paper towel": {
    bin: "compost",
    icon: "🟤",
    label: "Compost",
    tip: "Used paper towels can be composted if they only touched food. If they touched chemicals, put them in the landfill."
  },
  "tin can": {
    bin: "recycle",
    icon: "♻️",
    label: "Recycle",
    tip: "Rinse tin cans before recycling. You can leave the label on — it burns off during the recycling process."
  },
  "clothes": {
    bin: "special",
    icon: "⚠️",
    label: "Donate or Special Disposal",
    tip: "Donate wearable clothes. Worn-out textiles can go to textile recycling drop-offs — never in the regular recycling bin."
  }
};

// DOM elements
const searchInput = document.getElementById("feeling");
const searchBtn = document.getElementById("findStrategy");
const resultDiv = document.getElementById("strategyOutput");

// Search function
function sortItem() {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) {
    showResult("🔍", "Type something", "Enter an item name to find out how to dispose of it.", "default");
    return;
  }

  // Exact match
  if (wasteData[query]) {
    const item = wasteData[query];
    showResult(item.icon, item.label, item.tip, item.bin);
    return;
  }

  // Partial match
  const keys = Object.keys(wasteData);
  const match = keys.find(key => key.includes(query) || query.includes(key));
  if (match) {
    const item = wasteData[match];
    showResult(item.icon, item.label + ` (matched: "${match}")`, item.tip, item.bin);
    return;
  }

  // No match
  showResult("❓", "Not found", `We don't have "${query}" in our database yet. When in doubt, check with your local waste management service.`, "unknown");
}

// Display result
function showResult(icon, label, tip, binType) {
  resultDiv.className = "result " + binType;
  resultDiv.innerHTML = `
    <div class="result-icon">${icon}</div>
    <div class="result-info">
      <h3>${label}</h3>
      <p>${tip}</p>
    </div>
  `;
  resultDiv.classList.remove("hidden");
}

// Event listeners
searchBtn.addEventListener("click", sortItem);
searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") sortItem();
});
document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", function () {
    searchInput.value = this.dataset.item;
    sortItem();
  });
});

// Get the button that triggers the local action lookup
const findActionBtn = document.getElementById("findAction");
// Get the div where the local action message will be shown
const actionOutputDiv = document.getElementById("actionOutput");
// Get the text input where the user types their neighbourhood
const locationInput = document.getElementById("location");

// Function that reads the location and displays a matching local action
function findLocalAction() {
  // Read what the user typed and remove extra spaces from the start and end
  const location = locationInput.value.trim();
  // Create a variable to hold the action message we will display
  let actionMessage = "";

  // Check if the user typed Kibera (ignoring upper/lower case)
  if (location.toLowerCase() === "kibera") {
    // Set the Kibera-specific local action message
    actionMessage = "Join the Kibera Community Cleanup every Saturday at 9 AM near Olympic Stage — bring gloves and sorted plastic bottles.";
  // Check if the user typed Westlands (ignoring upper/lower case)
  } else if (location.toLowerCase() === "westlands") {
    // Set the Westlands-specific local action message
    actionMessage = "Drop off sorted recyclables at the TakaTaka Solutions hub on Mwanzi Road, Westlands — open Mon–Sat, 8 AM to 5 PM.";
  // Check if the user typed Karen (ignoring upper/lower case)
  } else if (location.toLowerCase() === "karen") {
    // Set the Karen-specific local action message
    actionMessage = "Take e-waste and batteries to the Karen Shopping Centre collection point on the last Friday of each month.";
  // Check if the user typed Mathare (ignoring upper/lower case) - Day 5 Extension
  } else if (location.toLowerCase() === "mathare") {
    // Set the Mathare-specific local action message
    actionMessage = "Join the Mathare Youth Environmental Brigade every Sunday at 10 AM near Juja Road bridge for riverbank plastic collection.";
  // Check if the user typed Githurai (ignoring upper/lower case) - Day 5 Extension
  } else if (location.toLowerCase() === "githurai") {
    // Set the Githurai-specific local action message
    actionMessage = "Drop off plastic packaging and metal cans at the Githurai 45 Youth Recycling Hub near the railway station.";
  // Handle any other location the user might type
  } else {
    // Set a default action message for unknown neighbourhoods
    actionMessage = "Check the Nairobi City County waste page or ask your local chama for the nearest sorting drop-off point.";
  }

  // Write the chosen action message into the output div so the user can read it
  actionOutputDiv.textContent = actionMessage;
}

// Run findLocalAction when the user clicks the Find action button
findActionBtn.addEventListener("click", findLocalAction);
// Also run findLocalAction when the user presses Enter inside the location input
locationInput.addEventListener("keypress", function (e) {
  // Check if the key pressed was Enter
  if (e.key === "Enter") {
    // Call the function to show the local action
    findLocalAction();
  }
});
