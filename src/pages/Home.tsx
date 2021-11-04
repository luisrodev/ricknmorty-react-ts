import React from "react";
import RicknmortyApi from "../character/api";
import CharacterList from "../character/components/CharacterGrid";
import { Character, CharacterResponse } from "../character/types";
import { PaginationAction } from "../types";
import Pagination from "../components/Pagination";
import usePagination from "../hooks/usePagination";

const Home = () => {
  const [characters, setCharacters] = React.useState<Character[]>([]);
  const {
    changePaginationMetadata,
    isNextEnable,
    isPrevEnable,
    nextPage,
    prevPage,
    currentPage,
    changeCurrentPage,
  } = usePagination();
  const [isFetching, setIsFetching] = React.useState<boolean>(true);

  React.useEffect(function () {
    RicknmortyApi.getAllCharacters().then(
      (gettedCharacters: CharacterResponse) => {
        setCharacters(gettedCharacters.results);
        console.log(gettedCharacters.info);
        const { next, prev } = gettedCharacters.info;
        changePaginationMetadata({
          next,
          prev,
        });
        setIsFetching(false);
      }
    );
  }, []);

  const handlePagination = (action: PaginationAction) => {
    setIsFetching(true);
    const requestParam: string =
      action === PaginationAction.Next ? nextPage : prevPage;
    RicknmortyApi.getAllCharacters(requestParam).then(
      (gettedCharacters: CharacterResponse) => {
        setCharacters(gettedCharacters.results);
        console.log(gettedCharacters.info);
        const { next, prev } = gettedCharacters.info;
        changePaginationMetadata({
          next,
          prev,
        });
        changeCurrentPage(action);

        setIsFetching(false);
      }
    );
  };

  return (
    <>
      <h1>Rick N Morty Page</h1>

      <Pagination
        currentPage={currentPage}
        nextEnable={!isFetching && isNextEnable}
        prevEnable={!isFetching && isPrevEnable}
        onNext={() => handlePagination(PaginationAction.Next)}
        onPrev={() => handlePagination(PaginationAction.Prev)}
      />
      {isFetching ? (
        <div>
          <h3>Cargando</h3>
        </div>
      ) : (
        <CharacterList characters={characters} />
      )}
    </>
  );
};

export default Home;
