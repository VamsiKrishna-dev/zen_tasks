const request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all',true);

function displayCountry(country) {
    console.log(country);
}

request.send(null);