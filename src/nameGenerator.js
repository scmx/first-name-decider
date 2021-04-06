function randomName(names) {
  return names[Math.floor(Math.random() * names.length)];
}

export function nameGenerator({ nameCount, middleNames, lastName, firstName }) {
  if (!firstName) {
    firstName = randomName(middleNames);
  }
  let rest = middleNames.slice();
  rest.splice(rest.indexOf(firstName), 1);

  const secondName = randomName(middleNames);
  rest.splice(rest.indexOf(secondName), 1);

  const thirdName = randomName(rest);

  return Object.fromEntries(
    [
      ["firstName", firstName],
      ["secondName", secondName],
      ["thirdName", thirdName],
    ]
      .slice(0, nameCount)
      .concat([["lastName", lastName]])
  );
}
