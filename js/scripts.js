var findReplace = function(string, word, replace) {
  //use reg exp to find, replace
  var result = string.replace(new RegExp('\\b' + word + '\\b', 'igm'), replace);
  //incase of no match
  if (result == string) {
    return "No Match";
  } else {
    return result;
  }
};

$(document).ready(function() {
  $("form#findReplace").submit(function(event) {
    var string = $("input#string").val();
    var word = $("input#word").val();
    var replace = $("input#replace").val();
    var result = findReplace(string, word, replace);

    $("#results span").text(result);
    $("#results").show();


    event.preventDefault();
  });
});
