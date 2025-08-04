export function formatNumber(number) {
  if (number.length > 11) number = number.slice(0, 11);

  if (number.length > 6) {
    number = `(${number.slice(0, 2)}) ${number.slice(2, 7)}-${number.slice(7)}`;
  } else if (number.length > 2) {
    number = `(${number.slice(0, 2)}) ${number.slice(2)}`;
  } else if (number.length > 0) {
    number = `(${number}`;
  }

  return number;
}
