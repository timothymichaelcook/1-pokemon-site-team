var requestUrl = 'https://pokeapi.co/api/v2/pokemon/';

var responseText = document.getElementById('response-text');

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
        responseText.textContent = response.status;
      }
      return response.json();
  });
}

getApi(requestUrl);

console.log(requestUrl);





//Declare and assign variables
// Tip: Declare variables outside of fuctions








//Event listener for generate button


