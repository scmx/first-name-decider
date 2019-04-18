function randomName(names) {
  return names[Math.floor(Math.random() * names.length)];
}

export function nameGenerator(names, ...current) {
  const second = randomName(names);
  const rest = names.slice();
  rest.splice(rest.indexOf(second), 1);
  const third = randomName(rest);

  return [second, third];
}
