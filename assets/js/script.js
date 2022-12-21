// Selecting our HTML Element from DOM
document.querySelector("#search").addEventListener("click", getPokemon);

// Listening for event click, runs getPokemon function

//Function capitalize first letter of search
function capitalizeCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCase(string) {
  return string.toLowerCase();
}

// Function fetches data from Pokemon API
function getPokemon(e) {
  const name = document.querySelector("#pokemonName").value;
  const pokemonName = lowerCase(name);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".pokemonBox").innerHTML = `
      <div>
        <img src="${data.sprites.other["official-artwork"].front_default}" alt="Image of Pokemon">
      </div>
      <div class="pokemonInfos">
        <h1>${capitalizeCase(data.name)} (#${data.id})</h1>
        <p>Weight: ${data.weight}</p>
        <p>Height: ${data.height}</p>
        <p>Base Experience: ${data.base_experience}</p>

      </div>
      `;
    })
    .catch((err) => {
      document.querySelector(".pokemonBox").innerHTML = `
      <h4>Pokemon not found.</h4>
      `;
      console.log("Error", err);
    });
  e.preventDefault();
}





