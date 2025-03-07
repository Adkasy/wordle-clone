export default function range(start, end, step = 1) {
  if (step === 0) throw new Error("Step cannot be zero");

  const length = Math.max(Math.ceil((end - start) / step), 0);

  return Array.from({ length }, (_, i) => start + i * step);
}
