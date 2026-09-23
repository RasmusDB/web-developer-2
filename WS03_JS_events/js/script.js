// Add your JavaScript solutions here.

// Exercise 1

function showTable() { 
    let animal = "Tiger";
    let habitat = "Forest";
    let diet = "Carnivore";

    let animal2 = "Elephant";
    let habitat2 = "Savanna";
    let diet2 = "Herbivore";

    let table = `
        <table>
            <tr>
                <th>Animal</th>
                <th>Habitat</th>
                <th>Diet</th>
            </tr>

            <tr>
                <td>${animal}</td>
                <td>${habitat}</td>
                <td>${diet}</td>
            </tr>

            <tr>
                <td>${animal2}</td>
                <td>${habitat2}</td>
                <td>${diet2}</td>
            </tr>
        </table>
    `;

    document.querySelector("#tableContainer").innerHTML = table;
} 

// Exercise 2

document.querySelector("#e2Heading").addEventListener("mouseover", function() {
    console.log("Stepped over me with a mouse!");
});

document.querySelector("#e1Heading").addEventListener("click", function() {
    this.style.color = "red";
    this.innerHTML = "Bye bye mouse!";
});

// Exercise 3

let feedback = document.querySelector("#feedback");
let status = document.querySelector("#status");

feedback.addEventListener("focus", function() {
    status.textContent = "You are writing feedback.";
    feedback.style.backgroundColor = "lightyellow";
});

feedback.addEventListener("blur", function() {
    status.textContent = "";
    feedback.style.backgroundColor = "";
});

let charcount = document.querySelector("#charcount");
let preview = document.querySelector("#preview");

feedback.addEventListener("input", function() {
    charcount.textContent = feedback.value.length + "/200";
    preview.textContent = feedback.value;
});

// Exercise 4

let feedbackForm = document.querySelector("#feedbackForm");

feedbackForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (feedback.value.length < 10 || feedback.value.length > 200) {
        status.textContent = "Feedback must be between 10 and 200 characters.";
    } else {
        feedback.value = "";
        status.textContent = "Thank you for your feedback!";
    }
});

// Exercise 5

const keybox = document.querySelector("#keybox");
const keyinfo = document.querySelector("#keyinfo");

let keyPressCount = 0;

document.addEventListener("keydown", function (event) {
  console.log(event);

  keyPressCount++;

  keybox.innerHTML = `<strong style="font-size: 2em;">${event.key}</strong>`;
  keyinfo.innerHTML = `
    Pressed key: ${event.key}<br>
    Key code: ${event.code}<br>
    Key presses: ${keyPressCount}<br>
    Shift: ${event.shiftKey}<br>
    Ctrl: ${event.ctrlKey}<br>
    Alt: ${event.altKey}
  `;

  if (event.key === "r") {
    keybox.style.backgroundColor = "lightcoral";
  } else if (event.key === "g") {
    keybox.style.backgroundColor = "lightgreen";
  } else if (event.key === "b") {
    keybox.style.backgroundColor = "lightblue";
  } else if (event.key === "y") {
    keybox.style.backgroundColor = "lightyellow";
  } else if (event.key === "o") {
    keybox.style.backgroundColor = "lightorange";
  } else if (event.key === "p") {
    keybox.style.backgroundColor = "lightpink";
  } else if (event.key === "m") {
    keybox.style.backgroundColor = "#f56df5";
  } else {
    keybox.style.backgroundColor = "white";
  }
});

// Bonus Exercise

    const button = document.getElementById('locateBtn');
    const statusLoc = document.getElementById('statusLoc');

    button.addEventListener('click', () => {
      // Check if the browser supports geolocation
      if (!navigator.geolocation) {
        statusLoc.textContent = "Geolocation is not supported by your browser.";
        return;
      }

      statusLoc.textContent = "Locating…";

      navigator.geolocation.getCurrentPosition(
        // Success callback
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          console.log("Latitude:", lat);
          console.log("Longitude:", lon);

          // Create the Google Maps URL using a template literal
          const url = `https://www.google.com/maps?q=${lat},${lon}`;

          // Redirect the user to Google Maps
          window.location.href = url;
        },
        // Error callback
        (error) => {
          statusLoc.textContent = "Could not get the location: " + error.message;
          console.error(error);
                  }
      );
    });     