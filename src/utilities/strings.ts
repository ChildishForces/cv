/**
 * Efficient function for looping over characters for a fixed length of characters
 * @param characterLength
 * @param repeatedString
 */
export const repeatStringFor = (characterLength: number, repeatedString: string) => {
  let returnedString = '';
  let index = 0;

  while (returnedString.length < characterLength) {
    returnedString += repeatedString[index % repeatedString.length];
    index += 1;
  }

  return returnedString;
};
