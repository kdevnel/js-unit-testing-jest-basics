import filterByTerm from "../src/filterByTerm.js";

describe("Filter function", () => {
  test('filter by the search term "link"', () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" },
    ];

    const linkTest = [{ id: 3, url: "https://www.link3.dev" }];
    const urlTest = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
    ];

    expect(filterByTerm(input, "link")).toEqual(linkTest);
    expect(filterByTerm(input, "LINK")).toEqual(linkTest);
    expect(filterByTerm(input, "uRl")).toEqual(urlTest);
    expect(filterByTerm(input, "")).toEqual("searchTerm cannot be empty");
  });
});
