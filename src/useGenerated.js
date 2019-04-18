import { useState } from "react";

export function useGenerated(generator, collection) {
  const [values, setValues] = useState(() => generator(collection));

  function next() {
    setValues(generator(collection, ...values));
  }

  return [...values, next];
}
