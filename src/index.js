module.exports = function check(str, bracketsConfig) {
  // your solution
  str = str.replace(/\s/g, "");
  function bracketsSearch() {
    for (var i = 0; i < bracketsConfig.length; i++) {
      var item = bracketsConfig[i][0] + bracketsConfig[i][1];
      var found = str.includes(item);
      if (found !== false) {
        deleteСoincidence(item);
      }
    }

  }
  function deleteСoincidence(item) {
    str = str.replace(item, "");
    bracketsSearch();
  }

  bracketsSearch();
  if (str == 0) {
    return true;
  }
  else {
    return false;
  }
}
