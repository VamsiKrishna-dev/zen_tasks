const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);

request.send(null);

request.onload = function (e) {
    var response = JSON.parse(request.response);
    
    // Get all the countries from Asia continent /region using Filter function
    var asia = response.filter(function (country) {
        return country.region === "Asia";
    });
    console.log(asia);
    // Get all the countries with a population of less than 2 lakhs using Filter function  
    var population = response.filter(function (country) {
        return country.population < 200000;
    });
    console.log(population);

    // Print the following details name, capital, flag using forEach function
    response.forEach((countryData) => {
        console.log(countryData.name, countryData.capital, countryData.flag);
    })

    // Print the total population of countries using reduce function
    var totalPopulation = response.reduce((acc, countryData) => {
        return acc + countryData.population;
    }, 0);
    console.log("Total Population: " + totalPopulation);

    // Print the country name which uses US dollar as currency
    for (var i = 0; i < response.length; i++) {
        if (response[i].name['common'] != "Bouvet Island" &&
            response[i].name['common'] != "Heard Island and McDonald Islands" &&
            response[i].name['common'] != "Antarctica") {
            if (response[i].currencies['USD']) {
                console.log(response[i].name['common']+ " uses US Dollar");
            }
        }
    }
}