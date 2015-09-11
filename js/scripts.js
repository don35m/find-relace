var findReplace = function(string, word, replace) {
  return string.replace(new RegExp(word, 'ig'), replace);
};
