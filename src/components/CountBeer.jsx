import { useState } from "react";

function CountBeer() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>NOMBRE DE BIERE : {count}</p>
      <input
        type="button"
        value="+1 beer"
        onClick={() => setCount(count + 1)}
      />
      <input
        type="button"
        value="+1 pack = 6beer"
        onClick={() => setCount(count + 6)}
      />
    </div>
  );
}

export default CountBeer;
