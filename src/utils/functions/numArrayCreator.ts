export const numArrayCreator = (length: number) => {
  const numArr = Array.from({ length: length }, (_, index) => index + 1);

  return numArr;
};
