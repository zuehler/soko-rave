export const camelizeWords = (string) => {
  const wordArr = string.toString().toLowerCase().split(" ");
  const tempWord = wordArr
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
  const camelizedWord = tempWord.charAt(0).toLowerCase() + tempWord.slice(1);
  return camelizedWord;
};
