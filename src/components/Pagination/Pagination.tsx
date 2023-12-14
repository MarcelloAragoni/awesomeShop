import Button from "../Button/Button";

type Props = {
  value: number;
  onPageUp: (value: number) => void;
  onPageDown: (value: number) => void;
};

export default function Pagination({ value, onPageUp, onPageDown }: Props) {
  function handlePageUp(value: number) {
    onPageUp(value + 1);
  }

  function handlePageDown(value: number) {
    onPageDown(value - 1);
  }

  return (
    <div aria-label="Pagination">
      <Button onClick={() => handlePageDown(value)} type="button">
        -
      </Button>
      <span>{value}</span>
      <Button onClick={() => handlePageUp(value)} type="button">
        +
      </Button>
    </div>
  );
}
