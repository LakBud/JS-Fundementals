
// All projects go here from now on + ES6 
// #50 DIGITAL STOPWATCH PROGRAM

const display1 = document.getElementById("display");
    let timer = null;
    let startTime = 0;
    let elapsedTime = 0;
    let isRunning = false;

    function start() {
      if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
      }
    }

    function stop() {
      if (isRunning) {
        clearInterval(timer);
        isRunning = false;
      }
    }

    function reset() {
      clearInterval(timer);
      isRunning = false;
      elapsedTime = 0;
      display1.textContent = "00:00:00:00";
    }

    function update() {
      const currentTime = Date.now();
      elapsedTime = currentTime - startTime;

      let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
      let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
      let seconds = Math.floor((elapsedTime / 1000) % 60);
      let milliseconds = Math.floor((elapsedTime % 1000) / 10);

      hours = String(hours).padStart(2, "0");
      minutes = String(minutes).padStart(2, "0");
      seconds = String(seconds).padStart(2, "0");
      milliseconds = String(milliseconds).padStart(2, "0");

      display1.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }


// #51 ES6 Module = An external file that contains reusable code that can be imported
//                  into other Javascript files. (Contains variables, functions, classes, etc).
// export and import
// remember to use type="module" and learn more about it.



//import {PI} from "./index.js";

//console.log(PI);

// #54 CALCULATOR PROGRAM


const displayer = document.getElementById("displayer");

function appendToDisplay(input){
    displayer.value += input;
}
function clearDisplay(){
    displayer.value = "";
}
function calculate(){
    try{
        displayer.value = eval(displayer.value);
    }
    catch(error){
        displayer.value = "Error";
    }
    
}

   
// #64 ROCK, PAPER AND SCISSORS PROGRAM

const choices =["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
  
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if(playerChoice === computerChoice){
    result = "ITS A TIE!";
  }
  else{
    switch(playerChoice){
      case "rock":
        result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!"
          break;
          case "paper":
          result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!"
          break;
          case "scissors":
          result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!"
          break;
    }
  }

  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText");


  switch(result){
    
    case "YOU WIN!":
      resultDisplay.classList.add("greenText");
      playerScore ++;
      playerScoreDisplay.textContent = playerScore;
    break;
    case "YOU LOSE!":
    resultDisplay.classList.add("redText");
    computerScore ++;
    computerScoreDisplay.textContent = computerScore;
    break;
  }
}


// #65 IMAGE SLIDER PROJECT

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalID = null;


document.addEventListener("DOMContentLoaded", initializeSlider);


function initializeSlider(){


  if(slides.length > 0){
  slides[slideIndex].classList.add("displaySlide");
  intervalID = setInterval(nextSlide, 5000);
  }

}



function showSlide(index){

  if(index >= slides.length){
    slideIndex = 0;
  }
  else if(index < 0){
    slideIndex = slides.length - 1;
  }

  slides.forEach(slide => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");

}
function prevSlide(){
  clearInterval(intervalID);
  slideIndex --;
  showSlide(slideIndex);
}
function nextSlide(){
  slideIndex++;
  showSlide(slideIndex);
}


// #70 WEATHER APP PROJECT

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "7c530e8a515aad4143664916ce484b18";

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = cityInput.value.trim();

  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
    } catch (error) {
      console.log(error);
      displayError("Failed to fetch weather data. Please check the city name.");
    }
  } else {
    displayError("Please enter a city");
  }
});

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error("Weather data not found");
  }

  const data = await response.json();
  return data;
}

function displayWeatherInfo(data) {
  const { name: city, main: { temp, humidity }, weather: [{ description, id }] } = data;

  card.textContent = "";
  card.style.display = "flex";

  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");

  cityDisplay.textContent = city;
  tempDisplay.textContent = `${temp.toFixed(1)}℃`;
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  descDisplay.textContent = description;
  weatherEmoji.textContent = getWeatherEmoji(id);

  cityDisplay.classList.add("cityDisplay");
  tempDisplay.classList.add("tempDisplay");
  humidityDisplay.classList.add("humidityDisplay");
  descDisplay.classList.add("descDisplay");
  weatherEmoji.classList.add("weatherEmoji");

  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(descDisplay);
  card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId) {
  switch (true) {
    case (weatherId >= 200 && weatherId < 300):
      return "⛈";
    case (weatherId >= 300 && weatherId < 400):
      return "🌦";
    case (weatherId >= 500 && weatherId < 600):
      return "🌧";
    case (weatherId >= 600 && weatherId < 700):
      return "❄️";
    case (weatherId >= 700 && weatherId < 800):
      return "🌫️";
    case (weatherId === 800):
      return "☀️";
    case (weatherId >= 801 && weatherId <= 804):
      return "☁️";
    default:
      return "❓";
  }
}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
   
    



