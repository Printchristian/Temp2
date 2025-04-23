function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

function describeTemperature(celsius) {
  if (celsius < 0) {
    return "very cold";
  } else if (celsius < 20) {
    return "cold";
  } else if (celsius < 30) {
    return "warm";
  } else if (celsius < 40) {
    return "hot";
  } else {
    return "very hot";
  }
}

function handleConvert() {
  const input = document.getElementById("tempInput").value;
  const fahrenheit = parseFloat(input);

  if (isNaN(fahrenheit)) {
    alert("Please enter a valid number!");
    return;
  }

  const celsius = convertToCelsius(fahrenheit).toFixed(1);
  const description = describeTemperature(celsius);

  const message = `That's about ${celsius}°C — it's ${description}!`;
  document.getElementById("result").innerText = message;
}
