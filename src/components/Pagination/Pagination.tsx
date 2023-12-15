import Button from "../Button/Button";
import * as S from "./Pagination.styled";

type Props = {
  value: number;
  onPageUp: (value: number) => void;
  onPageDown: (value: number) => void;
  hasNext: boolean;
  hasPrev: boolean;
};

export default function Pagination({
  value,
  onPageUp,
  onPageDown,
  hasNext,
  hasPrev,
}: Props) {
  function handlePageUp(value: number) {
    onPageUp(value + 1);
  }

  function handlePageDown(value: number) {
    onPageDown(value - 1);
  }

  return (
    <S.PaginationContainer aria-label="Pagination">
      <Button
        disabled={!hasPrev}
        onClick={() => handlePageDown(value)}
        type="button"
      >
        -
      </Button>
      <span>{value}</span>
      <Button
        disabled={!hasNext}
        onClick={() => handlePageUp(value)}
        type="button"
      >
        +
      </Button>
    </S.PaginationContainer>
  );
}
