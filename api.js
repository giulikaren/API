


const key = "uVKWQe5UlFqjSPMOKqjHwos2cYDgGHSJKakXuszy";
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${key}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log("Datos de la API:", data);
  })
  .catch(error => {
    console.error("Error al realizar la solicitud:", error);
  });



