/* Global Variables */
// Personal API Key for OpenWeatherMap API
const apiKey = "&appid=915cc052afdabe7d26dd8bd6015bdf21&units=imperial";
// api website
const url = "https://api.openweathermap.org/data/2.5/weather?zip=";
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();



//get the generate button
const generate = document.getElementById("generate");

//url of the post request in server.js and it's data
const postData = async (url = '', data = {}) => {
  console.log(data);
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    // Body data type must match "Content-Type" header
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    console.log(newData);
  } catch (error) {
    console.log("error happened in the post data", error);
  }
}

generate.addEventListener("click", actionOnClick);

function actionOnClick(x) {
  //get user's zip code entered in the input section
  let zip = document.getElementById("zip").value;
  //get user's textarea
  let feelings = document.getElementById("feelings").value;

  getWeather(url, zip, apiKey).then(function(data) {
    console.log(data);
    postData("/add", {
      date: d,
      temp: data.main.temp,
      content: feelings

    })
    console.log(data) ;
    retrieveData();

  })
}
const getWeather = async (url, zip, key) => {

  const res = await fetch(url + zip + key)
  console.log(res);
  try {
    const weatherData = await res.json();
    console.log(weatherData);
    return (weatherData);

  } catch (error) {
    console.log("error", error);
  }
}

//this is a get request

const retrieveData = async () => {
  const req = await fetch('/all');
  console.log("done" + req);
  try {
    // Transform into JSON
    const allData = await req.json()
    console.log(allData);
    // Write updated data to DOM elements
    document.getElementById('temp').innerHTML = Math.round(allData.temp) + ' degrees';
    document.getElementById('content').innerHTML = allData.content;
    document.getElementById("date").innerHTML = allData.date;
  } catch (error) {
    console.log("error in retrieveData", error);
    // appropriately handle the error
  }
}
