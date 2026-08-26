export function retry(n) {
  if (n < 0) throw new Error("retry count must be non-negative");
  return Math.floor(n);
}
