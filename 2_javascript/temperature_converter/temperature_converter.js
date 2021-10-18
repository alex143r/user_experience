document.querySelector("button").addEventListener("click", function (e) {
  const form = document.querySelector("form");
  e.preventDefault();
  form.reportValidity();
  if (form.checkValidity()) {
    calculateTemperature();
  }
});

function calculateTemperature() {
  const temperature = parseFloat(
    document.querySelector("#convert-input").value
  );
  const currentUnit = document.querySelector("#currentUnit").value;
  const newUnit = document.querySelector("#newUnit").value;
  const originalValue = document.querySelector(".original-value");
  const convertedValue = document.querySelector(".converted-value");
  let result;
  let resultText;

  //if to decide calculation
  if (currentUnit == "celsius") {
    originalValue.innerHTML = `${temperature.toFixed(2)}°C =`;
    if (newUnit == "celsius") {
      result = temperature;
      resultText = `°C`;
    }
    if (newUnit == "fahrenheit") {
      result = (9 / 5) * temperature + 32;
      resultText = `°F`;
    }
    if (newUnit == "kelvin") {
      result = temperature + 273.15;
      resultText = `°K`;
    }
  }
  if (currentUnit == "fahrenheit") {
    originalValue.innerHTML = `${temperature.toFixed(2)}°F =`;
    if (newUnit == "celsius") {
      result = ((temperature - 32) * 5) / 9;
      resultText = `°C`;
    }
    if (newUnit == "fahrenheit") {
      result = temperature;
      resultText = `°F`;
    }
    if (newUnit == "kelvin") {
      resultText = `°K`;
      result = temperature + (459.67 * 5) / 9;
    }
  }
  if (currentUnit == "kelvin") {
    originalValue.innerHTML = `${temperature.toFixed(2)}°K =`;
    if (newUnit == "celsius") {
      result = 273.15 - temperature;
      resultText = `°C`;
    }
    if (newUnit == "fahrenheit") {
      result = temperature * (9 / 5) - 459.67;
      resultText = `°F`;
    }
    if (newUnit == "kelvin") {
      result = temperature;
      resultText = `°K`;
    }
  }
  convertedValue.innerHTML = `${result.toFixed(2)}${resultText}`;
}
