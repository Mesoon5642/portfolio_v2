export function randomUnicodeChar(min = 0x0000, max = 0x10FFFF) {
  if (min > max || min < 0 || max > 0x10FFFF) {
    throw new Error('Invalid Unicode range');
  }
  const codePoint = Math.floor(Math.random() * (max - min + 1)) + min;
  return String.fromCodePoint(codePoint);
}

export function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
