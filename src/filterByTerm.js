function filterByTerm(inputArr, searchTerm) {
  if (!searchTerm) {
    return "searchTerm cannot be empty";
  }
  if (!inputArr.length) throw Error("inputArr cannot be empty");
  const regex = new RegExp(searchTerm, "i");
  return inputArr.filter(function (arrayElement) {
    return arrayElement.url.match(regex);
  });
}

export default filterByTerm;
