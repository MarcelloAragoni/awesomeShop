import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

export default function QuantityChanger() {
  const [amountValue, setAmount] = useState(0);

  function handleButtonPlusClick() {
    setAmount(amountValue + 1);
  }

  function handleButtonMinusClick() {
    setAmount(amountValue - 1);
  }

  function handleChangeInput(value: string) {
    setAmount(Number(value));
  }

  return (
    <div aria-label="QuantityChanger">
      <Button aria-label="minus" type="button" onClick={handleButtonMinusClick}>
        -
      </Button>
      <Input placeholder="0" value={amountValue} onChange={handleChangeInput} />
      <Button aria-label="plus" type="button" onClick={handleButtonPlusClick}>
        +
      </Button>
    </div>
  );
}
