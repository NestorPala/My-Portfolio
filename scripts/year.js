const yearElement = document.getElementById("year");
const yearValue = new Date().toISOString().slice(0, 10).split("-")[0];

yearElement.innerHTML = yearValue;