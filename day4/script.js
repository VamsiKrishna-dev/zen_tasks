const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all", true);

request.send(null);

request.onload = function (e) {
  var response = JSON.parse(request.response);
  for(var i = 0; i < response.length; i++){
  console.log("Country Name: ",response[i].name);
  console.log("Country Population: ",response[i].population);
  console.log("Country Region: ",response[i].region);
  console.log("Country Sub-region: ",response[i].subregion);
  console.log(response[i].flags.png);
  }
};
