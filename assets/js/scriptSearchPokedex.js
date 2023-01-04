//SELECT HTML ELEMENT WITH ID POKE CONTAINER
const poke_container = document.getElementById('poke_container');

const pokemons_number = 150;

const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};

//MAP MAIN TYPES TO COLORS
const main_types = Object.keys(colors);

//START OF CODE, CREATES LOOP 150 TIMES AND PASSES GETPOKEMON EACH TIME
const fetchPokemons = async () => {
	for (let i = 1; i <= pokemons_number; i++) {
		await getPokemon(i);
	}
};

//MAKES API CALL, RETURNS POKEMON VARIABLE AND PASSES THIS VARIABLE TO CARD FUNCTION
const getPokemon = async id => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokemon = await res.json();
	createPokemonCard(pokemon);
};

//CREATES POKEMON CARD 
function createPokemonCard(pokemon) {
	const pokemonEl = document.createElement('div');
	//ADDS POKEMON VARIABLE TO DIV ELEMENT POKEMON ELEMENT
	pokemonEl.classList.add('pokemon');

	//ASSIGNS COLOR TO POKEMON TYPE
	const poke_types = pokemon.types.map(type => type.type.name);
	const type = main_types.find(type => poke_types.indexOf(type) > -1);
	//FORMAT RESULTS
	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	const color = colors[type];
	
	//ASSIGN BACKGROUND COLOR TO POKEMON ELEMENT
	pokemonEl.style.backgroundColor = color;
	//PASS DATA TO INNER HTML
	const pokeInnerHTML = `
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
							pokemon.id
						}.png" alt="${name}" />
        </div>
        <div class="info">
            <span class="number">#${pokemon.id
							.toString()
							.padStart(3, '0')}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
        </div>
    `;

	pokemonEl.innerHTML = pokeInnerHTML;

	poke_container.appendChild(pokemonEl);
}

//MAIN FUNCTION
fetchPokemons();









