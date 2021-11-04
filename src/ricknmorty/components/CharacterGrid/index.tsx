import { Link } from "react-router-dom";
import { Result } from "../../types";
import "./index.css";

interface Props {
  characters: Result[];
}

const size: number = 120;

const CharacterGrid = ({ characters }: Props) => {
  return (
    <div className="character-grid-container">
      {characters.map(({ id, image, name }) => (
        <div className="character-box" key={id}>
          <Link to={`/ricknmorty/${id}`}>
            <div className="character-container">
              <img width={size} height={size} src={image} alt={name} />
              {name}
            </div>
          </Link>
          {/* <p title={name}>{name}</p> */}
        </div>
      ))}
    </div>
  );
};
export default CharacterGrid;
