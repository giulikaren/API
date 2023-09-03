

/**const key = "uVKWQe5UlFqjSPMOKqjHwos2cYDgGHSJKakXuszy";**/
const apiUrl = "https://restcountries.com/v3.1/all"


  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      console.log("País comunmente llamado:", country.name.common);
      console.log("Capital:", country.capital);
      console.log()
    });
  })
  .catch(error => {
    console.error("Error al obtener los datos:", error);
  });