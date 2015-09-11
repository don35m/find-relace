describe('findReplace', function() {
  it("Finds a word in a string and replaces it", function() {
    expect(findReplace("My dog is here", "dog", "friend")).to.equal("My friend is here");
  });

  it("Finds a case insensitive word in a string and replaces it", function() {
    expect(findReplace("My DOg is here", "dog", "friend")).to.equal("My friend is here");
  });

  it("Alerts user to no match", function() {
    expect(findReplace("My pet is here", "dog", "friend")).to.equal("No Match");
  });
});
