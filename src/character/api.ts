import { Character, CharacterResponse } from "./types";

export default {
  // get all characters
  getAllCharacters: async (
    nextUrl: string = `https://rickandmortyapi.com/api/character`
  ) => {
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
      `https://rickandmortyapi.com/api/character/${charactId}`
    ).then((r) => r.json())) as Character;
    return gettedCharacter;
  },
};
