import { Character } from "../../types";
import { Link } from "react-router-dom";
import "./index.css";

interface Props {
  character: Character;
}

const size: number = 120;

const CharacterItem = ({ character }: Props) => {
  const { name, id, image } = character;
  return (
    <div className="character-container" key={id}>
      <Link to={`/ricknmorty/${id}`}>
        <div className="character-details">
          <img width={size} height={size} src={image} alt={name} />
          {name}
        </div>
      </Link>
    </div>
  );
};

export default CharacterItem;
