interface Props {
  onNext: () => void;
  onPrev: () => void;
  prevEnable: boolean;
  nextEnable: boolean;
  currentPage: number;
}

const Pagination = ({
  onNext,
  onPrev,
  prevEnable,
  nextEnable,
  currentPage,
}: Props) => {
  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button disabled={!prevEnable} onClick={onPrev}>
          Prev
        </button>
        <span> Page: {currentPage} </span>
        <button disabled={!nextEnable} onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
