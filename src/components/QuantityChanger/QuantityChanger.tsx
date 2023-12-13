import Button from "../Button/Button";
import Input from "../Input/Input";

export default function QuantityChanger({ value }: { value: number }) {
  console.log(value);
  function handleButtonPlusClick() {
    // setAmount(amountValue + 1);
  }

  function handleButtonMinusClick() {
    // setAmount(amountValue - 1);
  }

  function handleChangeInput(value: string) {
    // setAmount(Number(value));
  }

  return (
    <div aria-label="QuantityChanger">
      <Button aria-label="minus" type="button" onClick={handleButtonMinusClick}>
        -
      </Button>
      <Input placeholder="1" value={value} onChange={handleChangeInput} />
      <Button aria-label="plus" type="button" onClick={handleButtonPlusClick}>
        +
      </Button>
    </div>
  );
}
