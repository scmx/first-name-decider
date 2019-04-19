function randomName(names) {
  return names[Math.floor(Math.random() * names.length)];
}

function doesNotStartsWithSameLetterAs(otherName) {
  return name => name[0] !== otherName[0];
}

export function nameGenerator(names, ...current) {
  const second = randomName(names);
  let rest = names.slice();
  rest.splice(rest.indexOf(second), 1);
  rest = rest.filter(doesNotStartsWithSameLetterAs(second));
  const third = randomName(rest);

  return [second, third];
}
