import React from "react";
import { useParams } from "react-router";
import { Character } from "../character/types";
import RicknmortyApi from "../character/api";

interface RouteParams {
  id: string;
}

const CharacterPage = () => {
  const [character, setCharacter] = React.useState<Character>();
  let { id } = useParams<RouteParams>();

  React.useEffect(function () {
    RicknmortyApi.getCharacterById(+id).then((gettedCharacter) => {
      setCharacter(gettedCharacter);
    });
  }, []);

  return (
    <>
      <h1>Character Page</h1>
      <div key={character?.id}>
        <img src={character?.image} alt={character?.image} />
        <p>{character?.name}</p>
        <p>{character?.status}</p>
        <p>{character?.species}</p>
        <p>{character?.gender}</p>
      </div>
    </>
  );
};

export default CharacterPage;
