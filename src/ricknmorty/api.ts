import { Result, RickMorty } from "./types";

export default {
  // get all characters
  getAllCharacters: async (
    nextUrl: string = `https://rickandmortyapi.com/api/character`
  ) => {
    const gettedCharacters: RickMorty = (await fetch(nextUrl).then((r) =>
      // `https://rickandmortyapi.com/api/character`
      r.json()
    )) as RickMorty;
    return gettedCharacters;
  },

  // character by Id
  getCharacterById: async (charactId: number) => {
    const gettedCharacter: Result = (await fetch(
      `https://rickandmortyapi.com/api/character/${charactId}`
    ).then((r) => r.json())) as Result;
    return gettedCharacter;
  },
};
