let pokemons = ['Charmander', 'Bulbasaur'];

console.log(pokemons);

pokemons.push('Squirtle');

console.log(pokemons);

let pokemon = pokemons[1];

console.log(`Pokemon på position 1: ${pokemon}`);

let position = pokemons.indexOf('Squirtle');

console.log(position);

let squirtle = pokemons[position];

console.log(`Pokemon på position ${position}: ${squirtle}`);

//let removePokemon = pokemons.pop();

//console.log(pokemons);

let pos = pokemons.indexOf('Bulbasaur');
pokemons.splice(pos, 1);
console.log(pokemons);

console.log(`Hittar inget på denna positionen: ${pokemons[10]}`);