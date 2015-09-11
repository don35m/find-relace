describe('findReplace', function() {
  it("Finds a word in a string and replaces it", function() {
    expect(findReplace("My dog is here", "dog", "friend")).to.equal("My friend is here");
  });
});
