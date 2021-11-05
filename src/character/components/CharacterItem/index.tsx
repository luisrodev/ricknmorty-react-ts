import { Character } from "../../types";
import { Link } from "react-router-dom";
import "./index.css";

interface Props {
  character: Character;
}

// const size: number = 150;

const CharacterItem = ({ character }: Props) => {
  const { name, id, image } = character;
  return (
    <div className="character-container" key={id}>
      <Link to={`/ricknmorty/${id}`}>
        <img className="character-img" src={image} alt={name} />
        <p>{name}</p>
      </Link>
    </div>
  );
};

export default CharacterItem;
