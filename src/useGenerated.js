import { useState } from "react";

export function useGenerated(generator, ...args) {
  const [value, setValue] = useState(() => generator(...args));

  function next() {
    setValue(generator(...args));
  }

  return [value, next];
}
