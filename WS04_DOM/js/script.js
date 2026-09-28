// Change header text
const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");

changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "Muokattu otsikko!";
});

// Change style

const changeStyleButton = document.querySelector("#changeStyleButton");
changeStyleButton.addEventListener("click", function () {
    taskOneHeading.style.color = "red";
    taskOneHeading.style.fontSize = "2em";
    taskOneHeading.style.fontWeight = "bold";
});

// Change animal

const changeTextButton = document.querySelector("#changeTextButton");
const animalText = document.querySelector("#animalText");

changeTextButton.addEventListener("click", function () {;
    animalText.textContent = "Cats go meow..";
});

// Add a sentence

const addSentenceButton = document.querySelector("#addSentenceButton");
addSentenceButton.addEventListener("click", function () {
    animalText.textContent += " Elephants also use their trunks to communicate.";
});

// Add a background color

const backgroundButton = document.querySelector("#backgroundButton");
backgroundButton.addEventListener("click", function () {
    document.body.classList.toggle("page-colored");
});



// Task 2

const animalContent = document.querySelector("#animalContent");

const animalHeading = document.createElement("h3");
animalHeading.textContent = "Animal of the Day";
animalHeading.classList.add("animal-heading");

const animalDescription = document.createElement("p");
animalDescription.textContent =
    "Pandas are native to China and are known for their distinctive black and white fur.";

const animalImage = document.createElement("img");
animalImage.src = "images/panda.png";
animalImage.alt = "A panda bear";

animalContent.append(animalHeading, animalDescription, animalImage);



const hideAnimalButton = document.querySelector("#hideAnimalButton");
const showAnimalButton = document.querySelector("#showAnimalButton");

hideAnimalButton.addEventListener("click", function () {
    animalContent.style.display = "none";
});

showAnimalButton.addEventListener("click", function () {
    animalContent.style.display = "block";
});

// Task 3

const animalSelect = document.querySelector("#animalSelect");
const selectedAnimalName = document.querySelector("#animalName");
const selectedAnimalImage = document.querySelector("#animalImage");
const selectedAnimalDescription = document.querySelector("#animalDescription");

const animals = {
    elephant: {
        name: "Elephant",
        image: "images/elephant.png",
        description: "Elephants are the world's largest land animals."
    },
    tiger: {
        name: "Tiger",
        image: "images/tiger.png",
        description: "Tigers are powerful predators of the savannah."
    },
    penguin: {
        name: "Penguin",
        image: "images/penguin.png",
        description: "Penguins are good swimmers and live in cold climates."
    },
    panda: {
        name: "Panda",
        image: "images/panda.png",
        description: "They're bear-like creatures who chew on bamboo and seem lazy but cute."
    }
};

animalSelect.addEventListener("change", function () {
    const selectedAnimal = animals[animalSelect.value];

    selectedAnimalName.textContent = selectedAnimal.name;
    selectedAnimalImage.src = selectedAnimal.image;
    selectedAnimalImage.alt = selectedAnimal.name;
    selectedAnimalDescription.textContent = selectedAnimal.description;
});


selectedAnimalImage.addEventListener("mouseenter", function () {
    selectedAnimalImage.classList.add("image-highlight");
});

selectedAnimalImage.addEventListener("mouseleave", function () {
    selectedAnimalImage.classList.remove("image-highlight");
});


// Task 4

const animalForm = document.querySelector("#animalForm");
const observationTableBody = document.querySelector("#observationTableBody");


animalForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const animal = document.querySelector("#observationAnimal").value;
    const location = document.querySelector("#observationLocation").value;
    const date = document.querySelector("#observationDate").value;

    if (animal === "" || location === "" || date === "") {
    alert("Please fill in all fields");
    return;
    }
    

    const newRow = document.createElement("tr");

    const animalCell = document.createElement("td");
    animalCell.textContent = animal;

    const locationCell = document.createElement("td");
    locationCell.textContent = location;

    const dateCell = document.createElement("td");
    dateCell.textContent = date;

    newRow.append(animalCell, locationCell, dateCell);
    observationTableBody.append(newRow);

    
    animalForm.reset();
});