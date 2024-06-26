

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meter = 3.281;
const liter = 0.264;
const kilogram = 2.204;




//Getting html element from DOM
const convertButton = document.querySelector("#convert-btn");

//Event listener on Convert Button
convertButton.addEventListener("click", convertUnits);



//function to convert Units

function convertUnits() {
  const InputValue = Number(document.querySelector("#measurement").value);
  const length = document.querySelector("#length-value");
  const feet = (InputValue * meter).toFixed(3);
  const meters = (InputValue / meter).toFixed(3);
  // length calculation
  length.textContent = `${InputValue}meters=${feet} feet | ${InputValue}feet = ${meters}meters`;

  //Volume Calculation

  const liters = (InputValue * liter).toFixed(3);
  const gallons = (InputValue /liter).toFixed(3);

  const Volume = document.querySelector("#volume-value");

  Volume.textContent = `${InputValue} liters = ${liters} gallons | ${InputValue} gallons = ${gallons}liters`;

  //Mass Calculation
   
  //get Mass from DOM element
  const Mass = document.querySelector("#mass-value");
const kilograms=(InputValue*kilogram).toFixed(3);
const pounds=(InputValue/kilogram).toFixed(3);
//rendering text on the screen
Mass.textContent = `${InputValue}kilos = ${pounds}kilos | ${InputValue} pounds = ${kilograms}pounds`;


};

convertUnits();
