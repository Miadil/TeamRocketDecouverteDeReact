import { useState } from "react";

function Form() {
  const [marque, setMarque] = useState("");

  return (
    <div>
      <p>marque de la biere : {marque}</p>
      <input
        type="text"
        name="marque"
        onChange={(event) => setMarque(event.target.value)}
      />
    </div>
  );
}

export default Form;
