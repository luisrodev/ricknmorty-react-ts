import React from "react";
import RicknmortyApi from "../ricknmorty/api";
import CharacterList from "../ricknmorty/components/CharacterGrid";
import { Result, RickMorty, PaginationAction } from "../ricknmorty/types";
import Pagination from "../ricknmorty/components/Pagination";
import usePagination from "../ricknmorty/hooks/usePagination";

const RickNMorty = () => {
  const [characters, setCharacters] = React.useState<Result[]>([]);
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
    RicknmortyApi.getAllCharacters().then((gettedCharacters: RickMorty) => {
      setCharacters(gettedCharacters.results);
      console.log(gettedCharacters.info);
      const { next, prev } = gettedCharacters.info;
      changePaginationMetadata({
        next,
        prev,
      });
      setIsFetching(false);
    });
  }, []);

  const handlePagination = (action: PaginationAction) => {
    setIsFetching(true);
    const requestParam: string =
      action === PaginationAction.Next ? nextPage : prevPage;
    RicknmortyApi.getAllCharacters(requestParam).then(
      (gettedCharacters: RickMorty) => {
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

export default RickNMorty;
