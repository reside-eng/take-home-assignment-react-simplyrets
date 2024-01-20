export function getTotalBaths(fullBaths: number, halfBaths: number) {
  if (!halfBaths) return fullBaths;
  return fullBaths + (halfBaths % 2);
}
