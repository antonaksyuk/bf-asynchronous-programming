import { ORIGIN } from '../config.js';

/**
 * Returns an array of pokemon in an evolution chain.
 *
 * @async
 * @param {number} [chainId=1] - The evolution chain's id to fetch.
 * @returns {Promise<object[]>} An array of Pokemon objects with a name and URL.
 *
 * @throws {Error} HTTP error! status: {number}.
 */
export const evolutionChain = async (chainId = 1) => {
  // --- generate and declare your resource's URL ---
  // docs: https://pokeapi.co/docs/v2#evolution-section
  const URL = `https://pokeapi.co/api/v2/evolution-chain/${chainId}`;
  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL);

  // --- throw an error if the response is not ok (this works!) ---
  if (!response.ok) {
    const message = response.statusText
      ? `${response.status}: ${response.statusText}\n-> ${URL}`
      : `HTTP error! status: ${response.status}\n-> ${URL}`;
    throw new Error(message);
  }

  /* --- parse the data if the response was ok (this works!) ---*/
  const data = await response.json();

  // --- process the fetched data (if necessary) ---
  //  you do not need to use `await` below this comment
  //  you can refactor this to a separate logic function and test it
  const pokemon = [];

  let current = data.chain;

  while (current) {
    pokemon.push({
      name: current.species.name,
      url: current.species.url,
    });
    current = current.evolves_to[0];
  } // tricky one!  you will need to push all the species into an array

  // --- return the final data ---
  return pokemon;
};
