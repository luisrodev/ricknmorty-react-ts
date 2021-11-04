import React from "react";
import { Pagination, PaginationAction } from "../types";

const usePagination = () => {
  const [paginationMetadata, setPaginationMetadata] =
    React.useState<Pagination>();
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const isPrevEnable: boolean = Boolean(paginationMetadata?.prev);

  const isNextEnable: boolean = Boolean(paginationMetadata?.next);

  const nextPage: string = paginationMetadata?.next as string;

  const prevPage: string = paginationMetadata?.prev as string;

  const changePaginationMetadata = ({ next, prev }: Pagination) => {
    setPaginationMetadata({
      next,
      prev,
    });
  };

  const changeCurrentPage = (action: PaginationAction) => {
    setCurrentPage((prev) =>
      action === PaginationAction.Next ? prev + 1 : prev - 1
    );
  };

  return {
    isPrevEnable,
    isNextEnable,
    nextPage,
    prevPage,
    currentPage,
    changeCurrentPage,
    changePaginationMetadata,
  };
};

export default usePagination;
