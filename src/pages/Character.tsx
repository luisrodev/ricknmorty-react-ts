import React from "react";
import { useParams } from "react-router";
import { Result } from "../ricknmorty/types";
import RicknmortyApi from "../ricknmorty/api";

interface RouteParams {
    id: string;
}

const Character = () => {
    const [character, setCharacter] = React.useState<Result>();
    let { id } = useParams<RouteParams>();

    React.useEffect(function () {
        RicknmortyApi.getCharacterById(+(id)).then((gettedCharacter) => {
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
}

export default Character;