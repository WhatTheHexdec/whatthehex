export default function () {
  const r = Math.floor(Math.random() * 255 + 1)
    .toString(16)
    .padStart(2, "0");
  const g = Math.floor(Math.random() * 255 + 1)
    .toString(16)
    .padStart(2, "0");
  const b = Math.floor(Math.random() * 255 + 1)
    .toString(16)
    .padStart(2, "0");

  return r + g + b;
}
