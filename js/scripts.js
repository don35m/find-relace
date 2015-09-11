var findReplace = function(string, word, replace) {
  var result = string.replace(new RegExp(word, 'ig'), replace);
  if (result == string) {
    return "No Match";
  } else {
    return result;
  }
};
