fetch(URL)
.then(response => response.JSON())
.then(data => {
    console.log( "Datos de la api",data)
})