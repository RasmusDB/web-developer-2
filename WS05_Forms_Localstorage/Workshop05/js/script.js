// WS05 student starter / opiskelijan aloituspohja
// Complete the TODOs. This file is intentionally unfinished.
// Täydennä TODO-kohdat. Tämä tiedosto on tarkoituksella keskeneräinen.

const animalForm = document.getElementById("animalForm");
const animalName = document.getElementById("animalName");
const animalSpecies = document.getElementById("animalSpecies");
const careNote = document.getElementById("careNote");
const nameError = document.getElementById("nameError");
const speciesError = document.getElementById("speciesError");
const noteError = document.getElementById("noteError");
const formResult = document.getElementById("formResult");

// Exercises 1 and 3 / Harjoitukset 1 ja 3
animalForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // TODO: Clear previous errors / Tyhjennä edelliset virheet.

    nameError.textContent = "";
    speciesError.textContent = "";
    noteError.textContent = "";
    formResult.textContent = "";

    animalName.classList.remove("invalid");
    animalSpecies.classList.remove("invalid");
    careNote.classList.remove("invalid");

    // TODO: Read and trim values / Lue ja trimmaa kenttien arvot.

    const aName = animalName.value.trim();
    const aSpecies = animalSpecies.value.trim();
    const cNote = careNote.value.trim();

    const isValid = true;

    // TODO: Validate and show errors / Validoi ja näytä virheet.

    if (aName === "") {
        nameError.textContent = "Animal name is required.";
        animalName.classList.add("invalid");
        isValid = false;
    }
    if (aSpecies === "") {
        speciesError.textContent = "Animal species is required.";
        animalSpecies.classList.add("invalid");
        isValid = false;
    }
    if (cNote.length < 1 || cNote.length > 150) {
        noteError.textContent = "Care note must be 1–150 characters.";
        careNote.classList.add("invalid");
        isValid = false;
    }

    // TODO: If valid, show the result / Näytä hyväksytty tulos.

    if (isValid) {
        formResult.textContent = `${aName} the ${aSpecies}: ${cNote}`;

        const animalData = {
            name: aName,
            species: aSpecies,
            note: cNote
        };
        localStorage.setItem("ws05Animal", JSON.stringify(animalData));
    }

    // TODO: Create { name, species, note } and save it as JSON.
    // TODO: Luo { name, species, note } ja tallenna se JSON-tekstinä.
});

// Exercise 2 / Harjoitus 2
const sponsorForm = document.getElementById("sponsorForm");
const animalType = document.getElementById("animalType");
const yearsInput = document.getElementById("years");
const cost = document.getElementById("cost");
const discountMessage = document.getElementById("discountMessage");

sponsorForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // TODO: Convert input values with Number().
    // TODO: Muunna syötteet numeroiksi Number()-funktiolla.

    const inputYears = Number(yearsInput.value);
    const animalFee = Number(animalType.value);

    // TODO: Calculate the price and apply discounts.
    // TODO: Laske hinta ja alennukset.

    let total;
    if (inputYears >= 5) {
        total = (animalFee * inputYears * 0.8) - 5;
    } else if (inputYears >= 2) {
        total = animalFee * inputYears * 0.8;
    } 
    else {
        total = animalFee * inputYears;
    }

    // TODO: Show the result / Näytä tulos.

    cost.textContent = `Total cost: $${total.toFixed(2)}`;

    if (inputYears >= 5) {
        discountMessage.textContent = 'You get a $5 discount and 20% discount for sponsoring 5 or more years!';
    } else if (inputYears >= 2) {
        discountMessage.textContent = 'You get a 20% discount for sponsoring 2 or more years!';
    }



});

// Exercise 4 / Harjoitus 4

    // TODO: Read ws05Animal. Handle null before using JSON.parse().
    // TODO: Lue ws05Animal. Tarkista null ennen JSON.parse()-muunnosta.
    // TODO: Display name, species and note with textContent.
    // TODO: Näytä nimi, laji ja muistio textContent-ominaisuudella.

const loadButton = document.getElementById("loadAnimal");
const clearButton = document.getElementById("clearAnimal");
const savedAnimal = document.getElementById("savedAnimal");

function loadAnimal() {
    const savedData = localStorage.getItem("ws05Animal");
    if (!savedData) {
        savedAnimal.textContent = "No saved animal yet.";
    } else {
        const animalData = JSON.parse(savedData);
        savedAnimal.textContent = `${animalData.name} the ${animalData.species}: ${animalData.note}`;
    }
}

    // TODO: Remove ws05Animal and update the displayed result.
    // TODO: Poista ws05Animal ja päivitä sivulla näkyvä tulos.

loadButton.addEventListener("click", loadAnimal);
clearButton.addEventListener("click", function () {

    localStorage.removeItem("ws05Animal");
    savedAnimal.textContent = "No saved animal yet.";
});

// TODO: Call loadAnimal() here to restore data when the page opens.
// TODO: Kutsu loadAnimal() tässä, jotta tiedot palautuvat sivun avautuessa.

loadAnimal();