/* Global Variables */
// Personal API Key for OpenWeatherMap API
const apiKey = "915cc052afdabe7d26dd8bd6015bdf21&units=imperial";

let generate = document.getElementById("generate");


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//add event listner to the botton on click
generate.addEventListener("click", async callBack());
//the function for the button when clicked
const callBack = function callBack() {
  //get user's zip code entered in the input section
  let zip = document.getElementById("zip").value;
  //get user's textarea
  let feelings = document.getElementById("feelings").value;
  //get the generate button
  // api website
  const url =`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}`;
}
