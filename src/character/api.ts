import { Character, CharacterResponse } from "./types";
const apiURL: string = import.meta.env.VITE_API_URL;

export default {
  // get all characters
  getAllCharacters: async (nextUrl: string = `${apiURL}/character`) => {
    const gettedCharacters: CharacterResponse = (await fetch(nextUrl).then(
      (r) =>
        // `https://rickandmortyapi.com/api/character`
        r.json()
    )) as CharacterResponse;
    return gettedCharacters;
  },

  // character by Id
  getCharacterById: async (charactId: number) => {
    const gettedCharacter: Character = (await fetch(
      `${apiURL}/character/${charactId}`
    ).then((r) => r.json())) as Character;
    return gettedCharacter;
  },
};
