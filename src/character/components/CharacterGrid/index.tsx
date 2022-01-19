import { Character } from "../../types";
import CharacterItem from "../CharacterItem";
import "./index.css";

interface Props {
  characters: Character[];
}

const CharacterGrid = ({ characters }: Props) => {
  return (
    <div className="character-grid-container">
      {characters.map((character) => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </div>
  );
};
export default CharacterGrid;
