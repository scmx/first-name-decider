function randomName(names) {
  return names[Math.floor(Math.random() * names.length)];
}

export function nameGenerator(names, ...current) {
  return [randomName(names), randomName(names)];
}
